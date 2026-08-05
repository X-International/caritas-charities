# Caritas Kampala

The public website for Caritas Kampala. It presents the organisation’s mission, programmes, appeals, news, gallery, FAQs, annual reports, contact details, and giving guidance.

This is a Next.js App Router site with mostly static content, client-side galleries/maps, and a small server route that forwards contact enquiries to a configured provider.

## Stack

- Next.js 16 with React 19 and TypeScript
- Tailwind CSS 4
- Mapbox (with Google Maps fallback) for location content
- Playwright for browser smoke tests
- Vercel Analytics and Speed Insights

## Prerequisites

- Node.js 22 or newer
- npm

## Local setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can run without map credentials; map sections will use their configured fallback or graceful unavailable state. The contact form requires `CONTACT_FORM_ENDPOINT` to deliver messages.

Never commit `.env.local` or real credentials. Browser-visible variables must still be restricted by production origin and provider quota.

## Configuration

| Variable | Required | Used for |
| --- | --- | --- |
| `CONTACT_FORM_ENDPOINT` | For live contact delivery | Server-only endpoint receiving validated contact submissions. Do not prefix it with `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Optional | Origin-restricted Mapbox browser token. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Origin-restricted Google Maps key for the legacy fallback component. |

Use `.env.example` as the configuration contract. Configure Preview and Production independently in the hosting provider’s encrypted environment store. Preview should use a test endpoint or intentionally leave contact delivery disabled.

## Common commands

```bash
npm run dev          # Start local development
npm run lint         # Run ESLint
npx tsc --noEmit     # Type-check the project
npm run build        # Create a production build and sitemap
npm run start        # Serve the production build locally
npm run test:e2e     # Run Playwright desktop/mobile smoke tests
```

## Main routes

- `/` — homepage
- `/about-us`, `/about-us/our-story`, `/about-us/our-team`, `/about-us/chaconet-partners` — organisation information
- `/our-programmes` and `/current-appeal` — programmes and current appeal
- `/donate` — giving guidance and verified destination links
- `/resources/news` and `/resources/news/[slug]` — searchable news and article pages
- `/resources/gallery` — filterable gallery and lightbox
- `/resources/faqs` and `/resources/annual-reports` — supporting resources
- `/contact-us` — contact details, map, and enquiry form
- `/api/contact` — validated contact forwarding endpoint
- `/api/health` — no-store health check for deployment probes

## Contact submission behavior

The browser submits JSON to `POST /api/contact`. The route enforces same-origin requests, JSON content type, a 16 KB body limit, field validation, a honeypot, and a process-local rate limit. It forwards valid submissions to `CONTACT_FORM_ENDPOINT` with an eight-second timeout and returns a request ID for support diagnostics.

The endpoint is an external delivery boundary, not a durable inbox: submissions are not stored in this application. Before running multiple instances, move rate limiting to an edge/WAF or shared store. Before adding retries or asynchronous delivery, add durable storage and idempotency.

## CI and deployment

Pull requests are expected to pass linting, TypeScript, the production build, and desktop/mobile Playwright checks. See [DEPLOYMENT.md](DEPLOYMENT.md) for environment promotion, rollback, health checks, and production monitoring.

## Documentation map

- [ARCHITECTURE.md](ARCHITECTURE.md) — domains, boundaries, and target module structure
- [TESTING.md](TESTING.md) — current coverage and testing priorities
- [DEPLOYMENT.md](DEPLOYMENT.md) — delivery process and release safety
- [OBSERVABILITY.md](OBSERVABILITY.md) — logs, request IDs, metrics, and monitoring
- [API_REVIEW.md](API_REVIEW.md) — API contract and backend review
- [RELIABILITY_REVIEW.md](RELIABILITY_REVIEW.md) — failure handling and resilience
- [AUTH_SECURITY_REVIEW.md](AUTH_SECURITY_REVIEW.md) — identity/access-control boundary review
- [ACCESSIBILITY_REVIEW.md](ACCESSIBILITY_REVIEW.md) — accessibility findings and fixes
- [PERFORMANCE_REVIEW.md](PERFORMANCE_REVIEW.md) — performance risks and improvements
- [FRONTEND_REVIEW.md](FRONTEND_REVIEW.md) — visual and UX review
- [CODE_QUALITY_REVIEW.md](CODE_QUALITY_REVIEW.md) — maintainability review
- [STATE_MANAGEMENT_REVIEW.md](STATE_MANAGEMENT_REVIEW.md) — state boundaries and recommended patterns
- [ANALYTICS.md](ANALYTICS.md) — product events and privacy boundaries

## Current scope and limitations

- There is no authentication, admin area, CMS, or application database.
- Giving is informational; this site does not process donations or represent a completed payment.
- Contact forwarding depends on the configured external provider and is not durably queued.
- The in-memory contact rate limiter is suitable only for a small single instance.
- News, gallery, and organisation content are maintained in the repository, so content changes require a code change and deployment.

When these boundaries change, update this README and the relevant specialist document in the same pull request.
