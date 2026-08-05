# Frontend review

## Overall rating: Good, with a few production polish gaps

The site has a recognizable Caritas visual identity, strong imagery, reusable sections, responsive intent, and a now-tested set of primary journeys. It feels substantially above a basic brochure site. The main remaining quality gap is consistency: page shells, button treatments, content ownership, and third-party states are not yet governed by a small explicit design system.

## Key strengths

- Strong red/beige/teal palette with a clear serif/sans type pairing.
- Reusable navigation, hero, appeal, donation, gallery, and footer components.
- Good semantic foundations: skip link, labels, landmarks, focus rings, empty states, and live status messaging.
- Donation/contact flows now avoid fake payment promises and expose clear fallback contact routes.
- Search, gallery, contact error handling, and mobile overflow are covered by 10 desktop/mobile Playwright journeys.

## Priority UX and design issues

1. **Shared shell consistency:** pages still repeat navbar, breadcrumb, container, and footer composition. A `SiteShell` and `PageHeader` would prevent spacing and accessibility drift.
2. **Navigation density:** `Navbar` is still the largest UI module. Its data is now extracted, but search, desktop menus, mobile drawer, and sharing should become separate components.
3. **Donation confidence:** the site provides giving instructions but cannot yet verify live payment completion. Keep contact-first copy until an official provider is configured.
4. **External integration states:** maps/video need consistent loading, blocked, and unavailable states, especially when public provider keys are absent.
5. **Motion consistency:** several legacy classes still use `transition-all`; replace them with explicit properties as components are touched.
6. **Development console noise:** Next.js 16.3 development mode can emit router-initialization errors during Fast Refresh/navigation even though the production-oriented tests pass. Recheck with a production build/start server before launch.

## High-impact recommendations

- Extract `components/shell/SiteShell.tsx` and standardize page-level spacing.
- Split `Navbar.tsx` into data, desktop navigation, mobile navigation, search, and share dialog modules.
- Move news/gallery/appeal records to typed `lib/content/` modules.
- Add provider-mocked integration tests for contact success, timeout, and retry behavior.
- Run an accessibility scan with axe on homepage, contact, donate, gallery, and news pages.
- Add controlled visual snapshots only after the shell is stable.

## Actions completed in this review

- Added stable mobile/desktop Playwright coverage.
- Fixed a real hydration risk caused by reading `window.location` during render.
- Made search use a native GET form so the URL is the source of truth.
- Added keyboard-accessible map marker behavior.
- Added tab semantics to the Spotlight control.
- Replaced a dead Spotlight story link.
- Improved form placeholders, email spellcheck behavior, and modal semantics.
