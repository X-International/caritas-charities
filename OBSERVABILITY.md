# Observability Baseline

## Current rating: Basic

The site is mostly static, so the operational surface is intentionally small. The contact API is the main server boundary and now emits JSON logs with a request ID, outcome, provider status, duration, and safe error reason. Every contact response includes `X-Request-ID`; provider calls receive the same ID for cross-system correlation. Provider responses also include `Server-Timing` for browser and proxy diagnostics.

## Signals now available

- `GET /api/health` provides a no-store liveness check with HTTP 200.
- Contact events: `contact.request.invalid`, `contact.request.rate_limited`, `contact.provider.not_configured`, `contact.provider.rejected`, `contact.provider.failed`, and `contact.request.succeeded`.
- Structured fields: `timestamp`, `level`, `event`, `requestId`, `durationMs`, `providerStatus`, and safe failure reason.
- User content, email addresses, phone numbers, IP addresses, provider URLs, and request bodies are intentionally excluded from logs.
- Existing Vercel Analytics/Speed Insights remain enabled only on Vercel deployments.

## Recommended alerts

Configure these in the hosting/logging platform:

1. Alert on `contact.provider.failed` or `contact.provider.rejected` above a small baseline for 5 minutes.
2. Alert on `/api/health` non-200 responses or probe timeouts.
3. Track contact success rate, 4xx/5xx rate, provider duration p50/p95, rate-limit count, and missing-provider configuration.
4. Track web LCP/CLS/INP by route from the existing performance telemetry.

## Next platform step

Forward stdout/stderr to the host's structured log system and retain request IDs in provider logs. If the app becomes multi-instance, replace the process-local rate limiter with an edge/WAF or shared Redis/KV limiter. Add OpenTelemetry only when there is a second backend or queue to trace; request IDs and provider timing are sufficient for the current topology.
