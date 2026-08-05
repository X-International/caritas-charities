# Code quality and maintainability review

## Overall rating: Needs Improvement

The codebase is readable enough for a small site and has a consistent visual vocabulary, but long-term maintenance will become expensive if new features continue to be added directly inside large page/component files. The highest-risk areas are the 1,119-line `components/Navbar.tsx`, duplicated page-shell patterns, static content mixed with JSX, and commented/dead code.

## Top maintainability risks

### 1. Oversized components

`components/Navbar.tsx` owns navigation data, desktop mega menus, mobile navigation, search, share modal, focus management, scroll locking, keyboard handling, and routing. A change to one concern requires reasoning about all of them.

Recommended split:

```text
components/navigation/
  nav-data.ts
  DesktopNavigation.tsx
  MobileNavigation.tsx
  SearchForm.tsx
  ShareDialog.tsx
  Navbar.tsx
```

### 2. Page markup owns domain data

News, appeal, office, and giving facts are mixed with Tailwind-heavy markup. This causes duplicated phone numbers, coordinates, payment details, and copy. A single source for core office/giving facts now exists in [`lib/site-config.ts`](/run/media/stuart/Shared/caritas-charities/lib/site-config.ts).

Next step: move news/gallery records and appeal content into `lib/content/` with typed query functions.

### 3. Repeated page shell composition

Many pages independently render `Navbar`, breadcrumb containers, `main`, and `Footer`. This makes spacing, metadata, and accessibility behavior easy to drift.

Recommended refactor: add `components/shell/SiteShell.tsx` and `components/shell/PageHeader.tsx`.

### 4. Third-party integrations are coupled to UI

`components/Map.tsx` and `components/GoogleMap.tsx` directly construct provider URLs, SDK instances, and failure behavior. Provider replacement or testing requires editing UI components.

Recommended refactor: expose a small `LocationProvider`/`MapView` adapter and keep provider-specific code under `components/integrations/`.

### 5. Dead and commented-out code

Removed dead commented form markup from `app/contact-us/page.tsx` and dead social-link markup from `components/Footer.tsx`. Comments should explain non-obvious decisions, not preserve replaced implementations.

### 6. Inconsistent navigation patterns

The navbar had a non-functional `href="#"` for menu entries without destinations. It now renders those entries as non-link content instead of fake navigation.

### 7. Contact route mixes transport, validation, throttling, and provider forwarding

`app/api/contact/route.ts` is acceptable at current scale, but it will become difficult to test and evolve once persistence, retries, or multiple providers are introduced.

Recommended split:

```text
lib/contact/
  contract.ts
  validate-contact.ts
  contact-provider.ts
app/api/contact/route.ts  # HTTP adapter only
```

## High-impact fixes applied

- Centralized office coordinates and giving facts.
- Removed dead commented implementations.
- Removed fake `href="#"` navigation.
- Added typed architecture documentation in `ARCHITECTURE.md`.
- Kept external integrations and contact forwarding identified as explicit future adapter boundaries.

## Recommended order of work

1. Split `Navbar.tsx` into navigation, search, and share-dialog components.
2. Create `SiteShell` and standardize page layout.
3. Move news/gallery/appeal content into typed `lib/content` modules.
4. Extract contact validation and provider forwarding into a testable application module.
5. Add component and route tests for search, contact submission, navigation, and giving links.
6. Only consider a CMS or separate service when content ownership, audit, or traffic requirements justify it.
