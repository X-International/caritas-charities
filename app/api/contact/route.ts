import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { parseContactSubmission, escapeHtml } from "@/lib/contact/contract";
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

  // Origin check
  const origin = request.headers.get("origin");
  const siteOrigin = new URL(request.url).origin;
  if (origin && origin !== siteOrigin) {
    logger.warn("contact.request.rejected", { requestId, reason: "invalid_origin" });
    return respond({ error: "Invalid request origin", code: "INVALID_ORIGIN" }, 403);
  }

  // Content-Type check
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim();
  if (contentType !== "application/json") {
    logger.info("contact.request.invalid_content_type", { requestId });
    return respond({ error: "Content-Type must be application/json", code: "UNSUPPORTED_MEDIA_TYPE" }, 415);
  }

  // Basic rate limiting
  const key = clientKey(request);
  const now = Date.now();
  pruneRateLimitEntries(now);
  const entry = requests.get(key);
  if (entry && entry.resetAt > now && entry.count >= MAX_REQUESTS) {
    const retryAfter = String(Math.ceil((entry.resetAt - now) / 1000));
    logger.warn("contact.request.rate_limited", { requestId });
    return respond(
      { error: "Too many requests. Please wait a few minutes and try again.", code: "RATE_LIMITED" },
      429,
      { "Retry-After": retryAfter }
    );
  }
  requests.set(key, entry && entry.resetAt > now ? { count: entry.count + 1, resetAt: entry.resetAt } : { count: 1, resetAt: now + WINDOW_MS });

  // Body size check
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

  // Parse and validate submission (includes honeypot check)
  const submission = parseContactSubmission(parsedBody);
  if (!submission) {
    logger.info("contact.request.invalid", { requestId });
    return respond(
      { error: "Please fill in all required fields (Name, Email, Subject, and Message).", code: "INVALID_SUBMISSION" },
      400
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    logger.error("contact.provider.not_configured", { requestId });
    return respond(
      { error: "Contact email service is not configured. Please add RESEND_API_KEY.", code: "PROVIDER_NOT_CONFIGURED" },
      503
    );
  }

  const recipientEmail = process.env.CONTACT_EMAIL_TO || "charityofficecaritaskampala@gmail.com";
  const configuredSender = process.env.CONTACT_EMAIL_FROM || "Caritas Kampala Charity Office <onboarding@resend.dev>";
  const defaultSender = "Caritas Kampala Charity Office <onboarding@resend.dev>";

  // Escape HTML content for safe insertion
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safePhone = escapeHtml(submission.phone || "Not provided");
  const safeSubject = escapeHtml(submission.subject);
  const safeMessage = escapeHtml(submission.message);

  const htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Website Contact Message</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f9f6f0; padding: 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
      <div style="border-bottom: 3px solid #b10017; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #b10017; margin: 0; font-size: 20px; font-family: Georgia, serif;">Caritas Kampala Charity Office</h2>
        <p style="color: #666666; margin: 4px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">New Website Contact Message</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555555;">Name:</td>
          <td style="padding: 8px 0; color: #111111;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #b10017; text-decoration: underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555555;">Phone:</td>
          <td style="padding: 8px 0; color: #111111;">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555555;">Subject:</td>
          <td style="padding: 8px 0; color: #111111; font-weight: bold;">${safeSubject}</td>
        </tr>
      </table>

      <div style="background-color: #f9f5f0; padding: 18px; border-radius: 12px; border: 1px solid #ebd7ca; margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px 0; color: #b10017; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
        <p style="white-space: pre-wrap; margin: 0; font-size: 14px; color: #222222; font-family: inherit;">${safeMessage}</p>
      </div>

      <div style="border-top: 1px solid #eeeeee; padding-top: 15px; font-size: 12px; color: #888888; text-align: center;">
        Submitted securely from the Caritas Kampala Charity Office website.
      </div>
    </div>
  </body>
</html>`;

  const textContent = `New Website Contact Message
---------------------------
Name: ${submission.name}
Email: ${submission.email}
Phone: ${submission.phone || "Not provided"}
Subject: ${submission.subject}

Message:
${submission.message}

---------------------------
Submitted securely from the Caritas Kampala Charity Office website.`;

  try {
    const resend = new Resend(resendApiKey);

    // Attempt to send with configuredSender
    let sendResult = await resend.emails.send({
      from: configuredSender,
      to: recipientEmail,
      replyTo: submission.email,
      subject: `Website Contact: ${submission.subject}`,
      text: textContent,
      html: htmlContent,
    });

    // Fallback: If custom domain is not yet verified in Resend, retry with onboarding@resend.dev
    if (sendResult.error && configuredSender !== defaultSender) {
      console.warn("Custom sender domain failed (domain DNS likely unverified). Retrying with default onboarding@resend.dev sender:", sendResult.error.message);
      sendResult = await resend.emails.send({
        from: defaultSender,
        to: recipientEmail,
        replyTo: submission.email,
        subject: `Website Contact: ${submission.subject}`,
        text: textContent,
        html: htmlContent,
      });
    }

    if (sendResult.error) {
      console.error("Resend Email Delivery Error:", sendResult.error);
      logger.error("contact.provider.rejected", {
        requestId,
        error: sendResult.error.message,
        durationMs: Math.round(performance.now() - startedAt),
      });
      return respond(
        {
          error: `Resend error: ${sendResult.error.message}`,
          code: "PROVIDER_REJECTED",
        },
        502
      );
    }

    logger.info("contact.request.succeeded", {
      requestId,
      durationMs: Math.round(performance.now() - startedAt),
    });

    return respond({ ok: true }, 200);
  } catch (error) {
    console.error("Resend Email Delivery Exception:", error);
    const message = error instanceof Error ? error.message : "Unable to send message at this time.";
    logger.error("contact.provider.failed", {
      requestId,
      reason: message,
      durationMs: Math.round(performance.now() - startedAt),
    });
    return respond(
      { error: `Delivery failed: ${message}`, code: "PROVIDER_UNAVAILABLE" },
      502
    );
  }
}
