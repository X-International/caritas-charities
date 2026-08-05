# State management review

## Overall rating: Clean for the current scope

The application is a public, mostly static content site. Its state is appropriately kept close to the interaction that owns it. There is no authentication session, database-backed server state, dashboard, or cross-page workflow that justifies Redux, Zustand, React Query, or another global store.

## Current state boundaries

| State type | Current owner | Pattern | Assessment |
| --- | --- | --- | --- |
| Static content | Server pages and local data modules | Server-rendered props/imports | Appropriate and indexable |
| Form state | `components/ContactForm.tsx` | Local discriminated submission state plus native form controls | Clear; loading/success/error are mutually exclusive |
| Navigation UI | `components/Navbar.tsx` | Local menu, search, share, focus, and scroll state | Correct scope, but the component is becoming a large interaction boundary |
| Carousel UI | `HeroSlider`, `RelatedNewsCarousel` | Local index, pause/focus, and timers | Appropriate; derived slide data is not duplicated |
| Gallery UI | `app/resources/ClientGallery.tsx` | Local filter, page, lightbox, and focus state; `useMemo` for derived lists | Good separation of source data and view state |
| Integration state | `Map`, `GoogleMap`, `DeferredLocationMap` | Local loading/error/lazy-component state | Correct; failures degrade locally |
| Shared server state | None currently | No client cache/store | Appropriate for repository-owned static content |

## Strengths

- State is colocated with the component that owns the interaction.
- Derived values such as filtered gallery images and related articles are calculated from source data rather than stored separately.
- Functional state updates are used for timer-driven carousel changes, avoiding stale closure bugs.
- External integrations expose local loading/error states instead of leaking provider details through the application.
- The contact form now uses a discriminated state model, making invalid combinations such as `error` without an error message impossible.

## Risks to watch

1. `Navbar.tsx` contains several independent booleans and menu keys. As navigation grows, mutually exclusive overlays could become difficult to reason about. Keep this local for now, but consider a single `activeOverlay` union when another modal or drawer is added.
2. There is no shared cache because there is no client-fetched server data. If news, gallery, or giving data moves to a CMS/API, introduce a typed query layer and cache at that boundary rather than adding ad-hoc `fetch` calls to components.
3. Timer- and observer-driven components need cleanup on unmount. The current carousel intervals, map observer, and visibility observers clean themselves up; preserve that convention.
4. Avoid copying route data into state. Query parameters, selected slugs, and filters should remain URL state or derived values when they need to be shareable.

## Target patterns

- Keep local `useState` for isolated UI controls.
- Use a discriminated union or reducer for workflows with explicit transitions: contact submission, future payment status, or multi-step forms.
- Use URL search parameters for shareable filters/search, as already done for news search.
- Keep server content in server components until the project introduces live CMS data.
- Add a typed server-data/query module before adopting a client cache. Do not add a global store pre-emptively.
- Split `Navbar` into shell, desktop navigation, mobile navigation, search, and share dialog if its interaction logic continues to grow.
