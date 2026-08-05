import { NextRequest, NextResponse } from "next/server";
import { parseContactSubmission } from "@/lib/contact/contract";
import { logger, requestIdFrom } from "@/lib/observability/logger";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 16_000;
const requests = new Map<string, { count: number; resetAt: number }>();

function pruneRateLimitEntries(now: number) {
  for (const [key, entry] of requests) {
    if (entry.resetAt <= now) requests.delete(key);
  }
}

function clientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const requestId = requestIdFrom(request);
  const startedAt = performance.now();
  const respond = (body: object, status: number, headers: Record<string, string> = {}) =>
    NextResponse.json({ ...body, requestId }, {
      status,
      headers: {
        "X-Request-ID": requestId,
        "Cache-Control": "no-store",
        ...headers,
      },
    });

  const origin = request.headers.get("origin");
  const siteOrigin = new URL(request.url).origin;
  if (origin && origin !== siteOrigin) {
    logger.warn("contact.request.rejected", { requestId, reason: "invalid_origin" });
    return respond({ error: "Invalid request origin", code: "INVALID_ORIGIN" }, 403);
  }

  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim();
  if (contentType !== "application/json") {
    logger.info("contact.request.invalid_content_type", { requestId });
    return respond({ error: "Content-Type must be application/json", code: "UNSUPPORTED_MEDIA_TYPE" }, 415);
  }

  const key = clientKey(request);
  const now = Date.now();
  pruneRateLimitEntries(now);
  const entry = requests.get(key);
  if (entry && entry.resetAt > now && entry.count >= MAX_REQUESTS) {
    const retryAfter = String(Math.ceil((entry.resetAt - now) / 1000));
    logger.warn("contact.request.rate_limited", { requestId });
    return respond(
      { error: "Too many requests", code: "RATE_LIMITED" },
      429,
      { "Retry-After": retryAfter }
    );
  }
  requests.set(key, entry && entry.resetAt > now ? { count: entry.count + 1, resetAt: entry.resetAt } : { count: 1, resetAt: now + WINDOW_MS });

  const rawBody = await request.text().catch(() => "");
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    logger.warn("contact.request.body_too_large", { requestId });
    return respond({ error: "Submission is too large", code: "PAYLOAD_TOO_LARGE" }, 413);
  }
  let parsedBody: unknown = null;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    parsedBody = null;
  }
  const body = parseContactSubmission(parsedBody);
  if (!body) {
    logger.info("contact.request.invalid", { requestId });
    return respond({ error: "Invalid submission", code: "INVALID_SUBMISSION" }, 400);
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    logger.error("contact.provider.not_configured", { requestId });
    return respond({ error: "Contact service is not configured", code: "PROVIDER_NOT_CONFIGURED" }, 503);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Request-ID": requestId },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) {
      logger.error("contact.provider.rejected", {
        requestId,
        providerStatus: response.status,
        durationMs: Math.round(performance.now() - startedAt),
      });
      return respond(
        { error: "Contact service rejected the message", code: "PROVIDER_REJECTED" },
        502,
        { "Server-Timing": `contact-provider;dur=${Math.round(performance.now() - startedAt)}` }
      );
    }
    logger.info("contact.request.succeeded", {
      requestId,
      durationMs: Math.round(performance.now() - startedAt),
    });
    return respond(
      { ok: true },
      200,
      { "Server-Timing": `contact-provider;dur=${Math.round(performance.now() - startedAt)}` }
    );
  } catch (error) {
    logger.error("contact.provider.failed", {
      requestId,
      reason: error instanceof Error ? error.name : "unknown",
      durationMs: Math.round(performance.now() - startedAt),
    });
    return respond(
      { error: "Contact service unavailable", code: "PROVIDER_UNAVAILABLE" },
      502,
      { "Server-Timing": `contact-provider;dur=${Math.round(performance.now() - startedAt)}` }
    );
  } finally {
    clearTimeout(timeout);
  }
}
