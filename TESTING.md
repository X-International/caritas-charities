# Testing strategy

## Current maturity: Adequate foundation after this change

Before this change the repository had no unit, integration, component, or end-to-end tests. The new Playwright suite covers the highest-risk public journeys without pretending that static copy needs exhaustive tests.

## Priority model

- **E2E:** navigation, search, contact submission states, gallery/lightbox, mobile overflow, and donation guidance.
- **Integration:** `/api/contact` validation, origin rejection, honeypot behavior, rate limiting, provider timeout, and provider response mapping.
- **Unit:** pure content filtering, contact contract parsing, URL/configuration helpers, and any future appeal state transitions.
- **Visual/accessibility:** run mobile/desktop smoke checks in CI; add targeted screenshots only for the shell, hero, contact form, and donation guidance.

## Highest-risk uncovered areas

1. Contact provider success and timeout behavior against a controlled test double.
2. Provider-side donation/payment destination verification.
3. Map failure/loading behavior when Mapbox credentials are absent or the provider is unavailable.
4. Keyboard navigation through desktop mega menus, mobile drawer, share dialog, and carousel controls.
5. Content regressions when news/gallery data moves from source files to a CMS.

## Running tests

```bash
npm run test:e2e
npm run test:e2e -- --project=mobile
```

The suite uses the installed Chrome channel and starts a local Next.js server on port 3100. In CI, traces and screenshots are retained for failures.

## Practical next additions

- Add route-level tests with a mocked contact provider before enabling real contact delivery.
- Add an accessibility scan for key pages with `axe-playwright` if the project’s dependency policy allows it.
- Add a small visual regression set after the site shell is stabilized.
- Add tests for every verified giving destination once official payment links are configured.
