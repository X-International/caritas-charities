# Cost and resource efficiency review

## Overall rating: Efficient

This is a small, mostly static Next.js site with no database, AI provider, background jobs, polling, authentication service, or paid server-side data pipeline. The current architecture is inexpensive to operate. The main cost exposure is asset bandwidth and third-party client libraries loaded on the pages that need them.

## Current resource profile

- Public content is rendered by Next.js and can be cached at the CDN.
- The contact endpoint performs one bounded provider request per submission, with an eight-second timeout and no automatic retry storm.
- The location map is loaded only when its section approaches the viewport.
- Gallery/lightbox code is route-scoped rather than loaded by every page.
- Vercel Analytics and Speed Insights load only on Vercel deployments and do not block the main content.
- Next Image handles responsive image delivery and lazy loading for normal page images.

## Actions taken

`next.config.ts` now sends:

- One-year immutable caching for local fonts and versioned favicon assets.
- One-day browser/CDN caching with stale-while-revalidate for public images. This reduces repeated origin transfers without making editorial image replacements invisible for a full year.

## Biggest cost risks

1. Image bandwidth will grow with gallery traffic. The gallery contains many source images and the lightbox can request full-size originals.
2. Mapbox usage can grow with contact-page traffic if visitors repeatedly load the interactive map. The existing viewport defer reduces this already.
3. Contact-provider usage can grow with abuse. The current process-local limit is useful for one instance but should move to an edge/WAF or shared store before scaling horizontally.
4. Static content updates require deployments. This is a workflow cost, not an infrastructure cost; a CMS is justified only when publishing volume or ownership requires it.

## High-value next steps

- Keep using Next Image dimensions and `sizes`; avoid raw `<img>` tags for content images.
- Convert the largest legacy JPEGs to AVIF/WebP during a deliberate asset cleanup, retaining originals only when required by the lightbox.
- Add CDN/WAF rate limiting before increasing contact traffic or adding expensive provider integrations.
- Monitor image transfer volume, map requests, contact-provider calls, and cache hit ratio before optimizing further.

## Not worth doing yet

- A monorepo or microservices split.
- A client-side data cache for static repository content.
- A database or server-side cache layer.
- AI response caching or model optimization; the application currently has no AI feature.
- Deleting legacy assets without an ownership review. The repository is only tens of megabytes, while delivery bandwidth is the meaningful future cost.
