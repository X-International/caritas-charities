# Architecture review and target direction

## Current status: Acceptable for a public content site; problematic as a growing application

This is currently a Next.js App Router website with static content, client-side interaction, maps, gallery/lightbox behavior, external links, and one thin contact API route. It is not yet a full-stack domain application: there is no database, CMS, authentication, payment integration, durable contact store, or internal API layer.

## Problem framing

The current use cases are:

- Explain Caritas Kampala’s mission, programmes, appeals, and charity-home network.
- Publish news and gallery content.
- Help visitors contact the office and find directions.
- Direct visitors to safe, verified giving instructions.

The most important future unknowns are ownership of content, the real contact delivery provider, payment provider, admin roles, audit requirements, and whether multiple dioceses/organizations will use the platform.

## Domain decomposition

| Bounded context | Responsibility | Current evidence | Boundary assessment |
|---|---|---|---|
| Public Organisation Profile | Mission, story, team, partners, programmes | `app/about-us/**`, `app/our-programmes/page.tsx` | Clear read-only content, but content is embedded in page components |
| Appeals & Relief | Current crisis, appeal narrative, help instructions, donation CTA | `app/current-appeal/page.tsx`, `components/CurrentCrises.tsx` | Business-critical content is mixed with presentation markup |
| Giving Information | Bank/mobile details and online-giving status | `components/OtherWaysToSupport.tsx`, `lib/site-config.ts` | Now centralized, but payment execution is not implemented |
| Contact & Enquiries | Contact details and enquiry submission | `app/contact-us/page.tsx`, `components/ContactForm.tsx`, `app/api/contact/route.ts` | Reasonable boundary; delivery provider is an anti-corruption boundary via `CONTACT_FORM_ENDPOINT` |
| Resources & Publishing | News, search, gallery, annual reports, FAQs | `app/resources/**`, `lib/content/news.ts` | Largest future growth area; records now have a route-independent content boundary |
| Location & External Integrations | Mapbox/Google Maps, YouTube, analytics, external directions | `components/Map.tsx`, `components/GoogleMap.tsx`, `app/layout.tsx` | Integrations are component-owned rather than behind adapters |

### Mixed concerns and leaks

- Phone numbers, bank details, coordinates, and copy are duplicated across page/component files; `lib/site-config.ts` now establishes a single source for the core office/giving facts.
- News data contains both domain content and transport/display concerns such as image paths and button labels.
- The contact API currently validates, rate-limits, and forwards in one function. It is acceptable at this size, but should become a use-case/service boundary when persistence or multiple providers appear.
- Map components directly know provider SDKs and destination URLs; this makes provider replacement and testing harder.
- Most pages independently compose `Navbar`, `Footer`, breadcrumbs, containers, and page sections. This is readable today but increases layout drift.

## Overall architecture

The dependency direction is currently mostly one-way: App Router pages compose shared components, and components read local content/config. That is a strength. The main weakness is that domain data is colocated with JSX, so future CMS/API work will require editing presentation files and risks inconsistent contracts.

There is no reason to split this into microservices. The appropriate next stage is a modular monolith inside Next.js with explicit domain modules and an adapter boundary for contact, payments, maps, and publishing.

## API and boundary design

The current contact boundary is `POST /api/contact`:

- Request: `{ name, email, phone?, subject, message, website? }`
- Success: `{ ok: true }`
- Errors: `{ error: string }` with `400`, `403`, `429`, `502`, or `503` status.
- Invariants: required fields, bounded lengths, valid email, same-origin request, honeypot empty, basic request limit.
- External integration: server-only `CONTACT_FORM_ENDPOINT`; the provider is deliberately not exposed to the browser.

This contract should be versioned or wrapped in a named application command before external clients depend on it. If durable enquiries are added, introduce an idempotency key, a persisted status (`received`, `forwarded`, `failed`), retry ownership, and an operator-visible failure path.

## Consistency map

- Public content reads: eventual consistency is acceptable; static generation/CDN caching is appropriate.
- Office and giving facts: strong consistency is important because stale bank details can cause financial harm; keep one owned configuration source and review changes.
- Contact submission: the initial request should be acknowledged only after the provider accepts it. If delivery becomes asynchronous, persist the enquiry and expose a durable retry state.
- Payment execution: must be owned by the payment provider or a dedicated giving context; never model payment state as page copy.
- Analytics: asynchronous and eventually consistent; it must never block core user flows.

## Key structural problems, prioritized

1. Static content, domain facts, and rendering are coupled, making CMS/API migration expensive.
2. External integrations are embedded directly in UI components, with no adapter contract or provider failure model.
3. Contact forwarding has no durable delivery state and uses process-local rate limiting, which does not coordinate across instances.
4. Giving is informational rather than transactional; the interface must not imply payment completion until a verified provider is integrated.
5. Repeated page shell/layout composition will cause accessibility and responsive inconsistencies as pages multiply.

## Short-term recommendations

- Keep `lib/site-config.ts` as the owner of office/giving facts and import it everywhere.
- Move news and gallery records into `lib/content/` with types separate from page rendering.
- Add a `components/SiteShell.tsx` for the shared Navbar/main/Footer composition and a reusable `PageHeader`/`Breadcrumbs` contract.
- Extract contact validation and provider forwarding into `lib/contact/` and leave the route as transport glue.
- Add contract tests for `POST /api/contact`, news filtering, and critical donation/directions links.
- Replace process-local rate limiting with platform middleware or a shared store before multi-instance production traffic.

## Suggested target structure

```text
app/
  (site)/
    about-us/
    current-appeal/
    donate/
    contact-us/
    resources/
  api/
    contact/route.ts
components/
  shell/          # SiteShell, Navbar, Footer, Breadcrumbs
  content/        # NewsCard, GalleryGrid, EmptyState
  appeals/        # AppealHero, AppealSummary, HelpPanel
  giving/         # GivingMethods, PaymentNotice
  contact/        # ContactForm, ContactStatus
  integrations/   # MapView, VideoEmbed
lib/
  config/         # site-config, runtime config
  content/        # news/gallery records and query functions
  contact/        # command type, validation, provider adapter
  giving/         # giving facts and provider contract
  integrations/   # MapProvider, ContactProvider interfaces
types/
  api.ts
  content.ts
```

## Tradeoffs

This keeps one deployable Next.js application and introduces module boundaries only where ownership and failure behavior differ. It avoids premature services, shared-database coupling, and distributed transactions. A separate contact or payment service becomes justified only when independent ownership, compliance, volume, or availability requirements demand it.

## ADR outline

- Decision: evolve toward a modular monolith with domain-owned content/config and adapter-based external integrations.
- Rejected: microservices now; there is no independent scaling, deployment, or ownership pressure.
- Rejected: keep all content inside page JSX; it blocks publishing workflows and makes facts easy to duplicate.
- Follow-up risks: CMS migration, content preview, payment reconciliation, durable enquiry retries, and role-based editorial access need explicit decisions before implementation.
