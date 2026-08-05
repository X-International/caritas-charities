# Performance Review

## Overall rating: Good

The production build is static-first and route rendering is fast in local Chromium. The main interaction routes now avoid loading Mapbox until the map is near the viewport. The remaining performance ceiling is mostly asset/content quality: several source images are large JPEGs, and the homepage hero still carries a multi-image carousel.

## Measured baseline after fixes

At a 375px viewport against the production build:

| Route | Initial JS transfer | Failed requests | Console errors |
| --- | ---: | ---: | ---: |
| `/` | ~159 KB | 0 | 0 |
| `/contact-us` | ~161 KB | 0 | 0 |
| `/resources/gallery` | ~179 KB | 0 | 0 |
| `/resources/news` | ~159 KB | 0 | 0 |

These are local measurements, not a substitute for field Core Web Vitals from real users. The build also passes the full desktop/mobile Playwright suite.

## Highest-impact risks

1. **Image payloads remain the largest asset risk.** The repository contains multi-megabyte originals, including logo JPEGs over 1 MB and a 3.4 MB source logo. `next/image` protects delivery dimensions, but source cleanup and modern formats would reduce storage, optimization work, and cache misses.
2. **The homepage hero is the LCP candidate.** The first slide is prioritized and has responsive `sizes`, but the carousel still contains three large visual states. Keep the first slide lightweight and consider loading later slides only after first interaction or idle time.
3. **Third-party map work is inherently expensive.** It is now isolated to the contact page and lazy-loaded near the map viewport. Keep the static directions link as the fallback and avoid loading map code on other routes.
4. **No production field data is collected outside Vercel.** Telemetry is deployment-gated to avoid local 404s. Production should monitor LCP, CLS, INP, route-level JS transfer, and image optimization failures through the hosting platform or a privacy-reviewed RUM tool.

## Changes implemented

- Lazy-loaded the Mapbox component with `IntersectionObserver` rather than loading it during contact-page hydration.
- Removed controlled map state updates on every pan; Mapbox now uses `initialViewState`.
- Added missing responsive `sizes` hints to hero and prominent images.
- Removed `priority` from the below-the-fold footer logo.
- Removed build/runtime dependency on remote Google fonts; the app uses a local/system font stack.
- Rendered Vercel Analytics and Speed Insights only on Vercel deployments, eliminating local 404 and MIME errors.
- Added the narrowly scoped CSP `worker-src 'self' blob:` required by Mapbox workers.
- Kept Webpack as the default dev/build path for stable local startup and production builds.

## Recommended next steps

### Quick wins

- Convert the largest local JPEGs to AVIF/WebP variants and retain only appropriately sized originals.
- Audit hero and above-the-fold images with Lighthouse at 320px, 375px, and desktop widths.
- Add `fetchPriority="high"` only to the actual LCP image and keep all other images lazy.
- Add a CI Lighthouse or Lighthouse CI budget for LCP, CLS, INP, and initial JS transfer.

### Deeper improvements

- Split the homepage hero so only the first slide is server-rendered initially; preload the next slide after idle or user interaction.
- Introduce a small image-content pipeline that generates responsive AVIF/WebP derivatives during asset updates.
- Add real-user performance monitoring in production with route and device dimensions, while excluding form contents and personal data.
- Revisit the gallery strategy if the image catalogue grows substantially; pagination is sufficient today, but virtualization may be appropriate for hundreds of items.
