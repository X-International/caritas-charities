import { NextRequest, NextResponse } from "next/server";
import { parseContactSubmission } from "@/lib/contact/contract";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
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
  const origin = request.headers.get("origin");
  const siteOrigin = new URL(request.url).origin;
  if (origin && origin !== siteOrigin) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  const key = clientKey(request);
  const now = Date.now();
  pruneRateLimitEntries(now);
  const entry = requests.get(key);
  if (entry && entry.resetAt > now && entry.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many requests", code: "RATE_LIMITED" },
      { status: 429, headers: { "Retry-After": String(Math.ceil((entry.resetAt - now) / 1000)) } }
    );
  }
  requests.set(key, entry && entry.resetAt > now ? { count: entry.count + 1, resetAt: entry.resetAt } : { count: 1, resetAt: now + WINDOW_MS });

  const body = parseContactSubmission(await request.json().catch(() => null));
  if (!body) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ error: "Contact service is not configured" }, { status: 503 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Contact provider rejected submission", { status: response.status });
      return NextResponse.json({ error: "Contact service rejected the message", code: "PROVIDER_REJECTED" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact provider request failed", { reason: error instanceof Error ? error.name : "unknown" });
    return NextResponse.json({ error: "Contact service unavailable", code: "PROVIDER_UNAVAILABLE" }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
