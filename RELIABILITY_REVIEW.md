# Reliability and Error-Handling Review

## Overall rating: Adequate

This is a public, mostly static site with one contact API and a few browser-side third-party integrations. The main user journeys now have recoverable error, loading, empty, and not-found states. The remaining production concern is operational: the contact rate limiter and provider delivery path are process-local and need an external durable control if the app runs across multiple instances.

## Critical scenarios and current behavior

| Scenario | User experience | Technical behavior |
| --- | --- | --- |
| Contact provider missing/down | Form stays filled and explains the problem; direct contact fallback remains available | 503/502 response, bounded 8-second provider timeout, safe server diagnostic logging |
| Contact request timeout in browser | Clear timeout message and retry path without losing fields | Client aborts after 12 seconds |
| Contact abuse/rate limit | Tells the user to wait and try again | 429 with `Retry-After`; expired in-memory entries are pruned |
| Mapbox token/service unavailable | Directions link remains usable | Map is not rendered without a token; runtime map errors degrade to Google Maps |
| Unknown route | Branded 404 with return-home action | HTTP 404 and `app/not-found.tsx` |
| Render exception | Branded retry/home recovery UI | Route and global error boundaries log a digest, not form data |
| Slow route transition | Stable skeleton instead of blank screen | `app/loading.tsx` provides a route loading state |

## Implemented improvements

- Added route-level and global error boundaries with retry actions.
- Added custom 404 and loading states.
- Added explicit contact API error codes and `Retry-After` handling.
- Added provider timeout diagnostics without exposing provider details to users.
- Preserved entered form data after failure and made timeout/provider/rate-limit messages specific.
- Added lazy Mapbox fallback behavior for missing tokens and runtime failures.
- Added failure-mode browser coverage for the contact provider failure and route smoke coverage.

## Remaining risks and recommendations

1. **Distributed rate limiting:** the current `Map` limiter resets on process restart and does not coordinate across instances. Use an edge/WAF limit or shared Redis/KV limiter before scaling horizontally.
2. **Delivery reliability:** do not automatically retry the contact provider without an idempotency key; duplicate messages are worse than a visible failure. If reliable delivery becomes business-critical, persist an idempotent submission record and process it through a queue with a dead-letter path.
3. **Observability:** replace raw console logging with structured logs and an error-monitoring service that captures route, status, provider latency, and digest while excluding names, emails, phones, and message contents.
4. **External service health:** add a synthetic check for the contact provider and alert on timeout/502 rates. The website should remain usable even when that dependency is down.
5. **Deployment validation:** ensure `CONTACT_FORM_ENDPOINT`, its secret/configuration, and the Mapbox token are present in every production environment; missing configuration is intentionally handled, but should still fail deployment checks.

## Verification

- Production build passes.
- ESLint and TypeScript pass.
- Desktop/mobile Playwright suite passes: 12/12.
- Direct checks confirmed custom 404 (404), malformed contact payload (400), and unsupported contact method (405).
