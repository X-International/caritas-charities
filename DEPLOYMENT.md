# Deployment and Delivery Guide

## Current target

This is a Next.js application suitable for Vercel or another Node-compatible host. The repository does not contain provider-specific infrastructure, so the hosting project must be configured explicitly rather than assuming that a push is a deployment.

## Required environment variables

Configure these separately for Preview and Production; never commit values:

- `CONTACT_FORM_ENDPOINT` — server-only provider endpoint. Required for real contact delivery.
- `NEXT_PUBLIC_MAPBOX_TOKEN` — browser-visible, origin-restricted Mapbox token. Optional; the page has a Google Maps fallback.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — only needed by the legacy Google Maps component; restrict by origin and API.

Use `.env.example` as the contract. Production secrets belong in the hosting provider’s encrypted environment store. Preview should use a safe test contact provider or leave delivery intentionally disabled.

## Promotion flow

1. Open a pull request; the `Build and browser checks` workflow must pass lint, TypeScript, a production build, and desktop/mobile Playwright smoke tests.
2. Review the preview deployment, especially contact failure states, donation destinations, and responsive layouts.
3. Merge to `main` only after the preview is accepted.
4. Promote the exact tested commit to Production through the hosting provider.
5. Check `/api/health`, the homepage, `/contact-us`, and one news route immediately after promotion.

## Rollback

Use the hosting provider’s deployment history to promote the last known-good deployment. Roll back the application and configuration together when a secret, provider endpoint, or payment destination changed. Do not rebuild from a moving branch during an incident.

## Production gates and monitoring

- Require `npm run build` to pass; a deployment that cannot produce the production artifact must not proceed.
- Keep the CI browser suite as a release gate; upload traces/screenshots on failure.
- Probe `/api/health` externally and alert on non-200 or timeout.
- Monitor contact provider 5xx/rejection rate and latency using the structured events documented in `OBSERVABILITY.md`.
- Confirm HTTPS, custom-domain DNS, and provider API key origin restrictions in the hosting platform.

## Known platform boundary

The contact rate limiter is process-local. It is adequate for a single small instance but must move to an edge/WAF or shared Redis/KV store before horizontal scaling. Contact delivery also has no durable queue, so do not introduce automatic retries without idempotency.
