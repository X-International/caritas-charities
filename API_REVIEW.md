# API and Backend Review

## Overall rating: Strong for current scope

The backend is a small, appropriately scoped Next.js route layer with one public write endpoint and one liveness endpoint. There is no unnecessary service or database layer. The contact route now has a bounded JSON contract, stable machine-readable error codes, request correlation, provider timeout handling, rate limiting, and safe response shaping.

## Endpoint contract

### `POST /api/contact`

- Request: `application/json` with `name`, `email`, `subject`, `message`; optional `phone`; honeypot `website` is rejected.
- Subject values: `general`, `donations`, `partnerships`, `media`, `other`.
- Body limit: 16 KB.
- Success: `200 { ok: true, requestId }`.
- Client error: `400 INVALID_SUBMISSION`, `403 INVALID_ORIGIN`, `413 PAYLOAD_TOO_LARGE`, or `415 UNSUPPORTED_MEDIA_TYPE`.
- Abuse/dependency errors: `429 RATE_LIMITED`, `502 PROVIDER_REJECTED`/`PROVIDER_UNAVAILABLE`, or `503 PROVIDER_NOT_CONFIGURED`.
- Error responses include `requestId`; responses are `no-store`. Rate limits include `Retry-After`.
- `X-Request-ID` is propagated to the contact provider and returned to the client.

### `GET /api/health`

Returns a no-store liveness response with a request ID. It does not expose secrets or provider configuration.

## Strengths

- HTTP methods and status codes match the operation and failure class.
- Input is normalized and bounded before external forwarding.
- Provider failures are mapped to safe generic errors; provider response bodies are not leaked.
- Automatic retries are not added to a non-idempotent contact operation, avoiding duplicate messages.
- API code is isolated in route handlers with pure validation in `lib/contact/contract.ts`.

## Remaining improvements

1. The process-local rate limiter must move to an edge/WAF or shared store before multi-instance deployment.
2. If contact delivery becomes business-critical, add durable idempotency keys and a queue/dead-letter workflow before enabling retries.
3. Add contract tests for every status/code pair and a controlled provider test double for success, timeout, rejection, and malformed responses.
4. Keep `/api` unversioned while it is an internal same-origin browser boundary; introduce `/api/v1` only when external consumers or incompatible contracts appear.
