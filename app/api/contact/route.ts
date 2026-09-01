import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { parseContactSubmission, escapeHtml } from "@/lib/contact/contract";
import { logger, requestIdFrom } from "@/lib/observability/logger";
import { siteConfig } from "@/lib/site-config";

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

function formatKampalaTimestamp(date: Date = new Date()): string {
  try {
    const formatted = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Kampala",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
    return `${formatted} EAT`;
  } catch {
    return `${date.toUTCString()} (EAT)`;
  }
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
  const configuredSender = process.env.CONTACT_EMAIL_FROM || "Caritas Kampala | Charity Office <website@contact.caritaskampalacharities.org>";
  const defaultSender = "Caritas Kampala | Charity Office <website@contact.caritaskampalacharities.org>";

  // Escape HTML content for safe insertion
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const rawPhone = submission.phone?.trim();
  const safePhone = escapeHtml(rawPhone && rawPhone.length > 0 ? rawPhone : "Not provided");
  const safeSubject = escapeHtml(submission.subject);
  const safeMessage = escapeHtml(submission.message);

  const kampalaTimestamp = formatKampalaTimestamp();
  const logoUrl = `${siteConfig.domain}/images/logos/Caritas_Kampala_logo.png`;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Contact Message</title>
  </head>
  <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #222222; background-color: #f9f6f3; padding: 20px 10px; margin: 0;">
    <!-- Hidden Email Preheader -->
    <div style="display: none; font-size: 1px; color: #ffffff; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
      New website enquiry from ${safeName} regarding ${safeSubject}.
    </div>

    <!-- Main Container Table -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 640px; width: 100%; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e7ded4; overflow: hidden;">
      <tr>
        <td style="padding: 32px 28px;">
          
          <!-- Header Branding Area -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
            <tr>
              <td>
                <img src="${logoUrl}" alt="Caritas Kampala" width="60" style="width: 60px; max-width: 60px; height: auto; display: block; border: 0; outline: none; text-decoration: none;" />
                <h1 style="margin: 12px 0 2px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: bold; color: #b10017; line-height: 1.2;">
                  Caritas Kampala
                </h1>
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; color: #444444; letter-spacing: 0.5px; text-transform: uppercase;">
                  Charity Office
                </p>
                <p style="margin: 14px 0 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; color: #666666; text-transform: uppercase; letter-spacing: 1px;">
                  NEW WEBSITE CONTACT MESSAGE
                </p>
              </td>
            </tr>
          </table>

          <!-- Red Accent Line -->
          <div style="height: 3px; background-color: #b10017; margin-top: 14px; margin-bottom: 24px; border-radius: 2px;"></div>

          <!-- Contact Submission Fields -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 14px;">
            <tr>
              <td style="padding: 7px 0; font-weight: bold; color: #555555; width: 100px; vertical-align: top;">Name:</td>
              <td style="padding: 7px 0; color: #111111; vertical-align: top; word-break: break-word;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; font-weight: bold; color: #555555; vertical-align: top;">Email:</td>
              <td style="padding: 7px 0; vertical-align: top; word-break: break-word;">
                <a href="mailto:${safeEmail}" style="color: #b10017; text-decoration: underline;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 7px 0; font-weight: bold; color: #555555; vertical-align: top;">Phone:</td>
              <td style="padding: 7px 0; color: #111111; vertical-align: top; word-break: break-word;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; font-weight: bold; color: #555555; vertical-align: top;">Subject:</td>
              <td style="padding: 7px 0; color: #111111; font-weight: bold; vertical-align: top; word-break: break-word;">${safeSubject}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="background-color: #f9f5f0; padding: 18px 20px; border-radius: 12px; border: 1px solid #ebd7ca; margin-bottom: 20px;">
            <span style="display: block; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #b10017; margin-bottom: 8px;">
              MESSAGE
            </span>
            <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; color: #222222; white-space: pre-wrap; word-break: break-word;">${safeMessage}</p>
          </div>

          <!-- Received Timestamp Row -->
          <p style="margin: 0 0 20px 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #777777; line-height: 1.4;">
            <strong>Received:</strong> ${kampalaTimestamp}
          </p>

          <!-- Muted Footer -->
          <div style="border-top: 1px solid #eeeeee; padding-top: 16px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #777777; text-align: center; line-height: 1.5;">
            <p style="margin: 0 0 4px 0;">Sent from the Charity Office website contact form.</p>
            <p style="margin: 0;"><a href="https://www.caritaskampalacharities.org/" style="color: #888888; text-decoration: underline;">caritaskampalacharities.org</a></p>
          </div>

        </td>
      </tr>
    </table>
  </body>
</html>`;

  const textContent = `New Website Contact Message

Name: ${submission.name}
Email: ${submission.email}
Phone: ${rawPhone && rawPhone.length > 0 ? rawPhone : "Not provided"}
Subject: ${submission.subject}
Received: ${kampalaTimestamp}

Message:
${submission.message}

---------------------------
Sent from the Charity Office website contact form.
https://www.caritaskampalacharities.org/`;

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

    // Fallback: If domain configuration issues occur, retry with default domain format
    if (sendResult.error && configuredSender !== defaultSender) {
      console.warn("Configured sender failed. Retrying with default domain sender:", sendResult.error.message);
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
