# Security review report

## Executive summary

This repository is a public, mostly static Next.js site. No authentication, authorization, database, API route, server action, upload handler, or server-side user-data persistence was found. The highest practical risks are missing browser security headers (now fixed), public third-party map credentials that must be origin/key restricted, broad third-party browser integrations, dependency-supply-chain uncertainty, and a contact form that presents as operational while not submitting anywhere.

## A. Critical issues

No confirmed critical vulnerability was found in the reviewed repository. There is no privileged authenticated surface or server-side data store in scope from which a direct account takeover, cross-tenant access, injection, or secret exfiltration path was identified.

## B. High-priority issues

### SEC-001 — Browser security headers were absent (fixed)

Before this review, `next.config.ts` did not define response security headers. That left the site without explicit clickjacking protection, MIME-sniffing protection, referrer control, permissions control, or a CSP boundary. The fix is now in [`next.config.ts`](/run/media/stuart/Shared/caritas-charities/next.config.ts:3).

Residual risk: the CSP still permits `'unsafe-inline'` because the current Next/Tailwind/third-party setup uses inline content. A nonce/hash-based CSP should be considered when the deployment pipeline can support it.

### SEC-002 — Public map tokens require provider-side restriction

[`components/Map.tsx`](/run/media/stuart/Shared/caritas-charities/components/Map.tsx:26) reads `NEXT_PUBLIC_MAPBOX_TOKEN`, and [`components/GoogleMap.tsx`](/run/media/stuart/Shared/caritas-charities/components/GoogleMap.tsx:5) reads a public Google Maps key. Any `NEXT_PUBLIC_*` value is intentionally shipped to browsers; it is not a secret. If the provider keys are unrestricted, an attacker can reuse them for quota exhaustion or unexpected billing.

Fix required outside this repository: restrict Mapbox to the production origin and restrict Google Maps to the exact HTTP referrers and required APIs. Set budget alerts and rotate any key that has ever been committed or exposed without restrictions.

### SEC-003 — Contact form is an unimplemented data-collection surface

The form at [`app/contact-us/page.tsx`](/run/media/stuart/Shared/caritas-charities/app/contact-us/page.tsx:123) has no `action`, server action, API route, or submission handler. It currently cannot transmit data, but it creates a dangerous false expectation and should not be connected to an ad-hoc endpoint later without CSRF protection, schema validation, spam controls, and output-safe email handling.

Recommended fix: either remove/disable the form until a real provider is selected, or implement a server-side endpoint with strict length/type validation, CSRF/origin checks, rate limiting, honeypot/CAPTCHA controls, and safe email-template encoding.

### SEC-004 — Dependency audit remediation completed

The initial audit found three high-severity transitive issues in `postcss` and `sharp`, pulled through Next.js. `npm audit fix --force` upgraded Next.js to `16.3.0`, updated the lockfile, and a subsequent networked audit reported `0 vulnerabilities`. Dependencies remain declared in [`package.json`](/run/media/stuart/Shared/caritas-charities/package.json:12); keep a CI dependency scanner enabled for future updates.

## C. Recommendations & hardening improvements

- Keep `.env*` ignored as currently configured in [`.gitignore`](/run/media/stuart/Shared/caritas-charities/.gitignore:35), and add CI secret scanning plus a documented `.env.example` containing names only.
- Treat all `NEXT_PUBLIC_*` values as public configuration. Never place private API credentials, webhook secrets, payment secrets, or admin tokens in them.
- Replace the broad `img-src https:` CSP allowance with a finite image host list after confirming all production image sources.
- Add `Strict-Transport-Security` only after confirming every production hostname and subdomain is permanently HTTPS; do not enable it for local development.
- Pin/verify dependency updates in CI and use automated security update PRs.
- Keep `rel="noopener noreferrer"` on external links and use `sandbox` for third-party iframes; the YouTube embed now has a sandbox in [`components/SpotlightSection.tsx`](/run/media/stuart/Shared/caritas-charities/components/SpotlightSection.tsx:128).
- The app currently has no server endpoint requiring authentication, authorization, CSRF tokens, rate limiting, or upload controls. Add those controls at the boundary if contact, donation, CMS, or admin functionality is introduced.
- Verify official social/donation destinations before launch; redirect integrity is an application-trust concern even where it is not a code vulnerability.

## Review coverage

Reviewed runtime pages/components, Next configuration, environment-variable references, third-party script/iframe usage, dependency declarations, ignore rules, and source patterns for dynamic HTML, eval, storage, uploads, routes, cookies, and server-side handlers. No `dangerouslySetInnerHTML`, `eval`, `new Function`, file upload path, cookie/session implementation, API route, or database client was found.
