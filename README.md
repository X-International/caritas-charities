# Caritas Kampala (Charities Office Website)

The official public web platform for **Caritas Kampala, Charity Office** — the socio-pastoral arm of the Roman Catholic Archdiocese of Kampala. The website presents the organization's mission, emergency appeals, development programmes, news updates, photo galleries, annual reports, contact details, and guidance for donor support and volunteering.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**, the platform combines static site generation for performance and SEO with interactive client components and serverless API handlers.

---

## 🌟 Key Features

- **Programmes & Appeals:** Showcases current humanitarian appeals, sustainable agriculture, education, healthcare, and community empowerment initiatives.
- **Interactive News & Lightbox Gallery:** Searchable news directory with full article views and a responsive image gallery lightbox using `yet-another-react-lightbox`.
- **Interactive Location Mapping:** Mapbox GL integration with Google Maps fallback for displaying organizational centers and target service areas.
- **Secure Contact Pipeline:** Contact form powered by a Next.js Server Route with same-origin checking, input validation, honeypot anti-spam, and in-memory rate limiting.
- **Automated SEO & Accessibility:** Dynamic sitemap generation via `next-sitemap`, accessibility-first components (`eslint-plugin-jsx-a11y`), semantic HTML structure, and strict Content Security Policy (CSP) headers.
- **E2E Smoke Testing:** Comprehensive desktop and mobile cross-browser test suite powered by Playwright.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI & Styling:** React 19, Tailwind CSS 4, Lucide React
- **Language:** TypeScript 5
- **Maps:** Mapbox GL (`mapbox-gl`, `react-map-gl`) with Google Maps API fallback
- **Media & Lightbox:** Yet Another React Lightbox
- **Testing:** Playwright (`@playwright/test`)
- **Analytics & Observability:** Vercel Analytics (`@vercel/analytics`), Vercel Speed Insights (`@vercel/speed-insights`)
- **Sitemap Generator:** `next-sitemap`

---

## 📋 Prerequisites

- **Node.js**: v22.0.0 or higher
- **Package Manager**: npm v10.0.0 or higher

---

## 🚀 Local Setup & Development

1. **Clone the repository and install dependencies:**
   ```bash
   git clone <repository-url>
   cd caritas-charities
   npm ci
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   *(Optionally edit `.env.local` to add map credentials or contact endpoint URL)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

> [!NOTE]
> The site runs gracefully without map credentials. If Mapbox or Google Maps credentials are absent, location sections fallback to an informative fallback state.

---

## ⚙️ Environment Configuration

Configuration keys are managed via `.env.local` for local development and hosting provider environment variables in deployment environments.

| Variable | Required | Type | Description |
| --- | --- | --- | --- |
| `CONTACT_FORM_ENDPOINT` | For live messaging | Server-only | HTTP POST endpoint to forward validated contact form submissions to. Must **not** begin with `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Optional | Browser-public | Origin-restricted Mapbox access token for interactive map rendering. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Browser-public | Origin-restricted Google Maps API key for the legacy map fallback component. |

> [!CAUTION]
> Never commit `.env.local` or secret keys to source control. Ensure browser-public variables (`NEXT_PUBLIC_*`) are restricted by production HTTP origin and provider API quota.

---

## 💻 Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `npm run dev` | `next dev --webpack` | Starts the Next.js development server with Webpack. |
| `npm run build` | `next build --webpack` | Builds the application for production and generates `sitemap.xml` via `postbuild`. |
| `npm run start` | `next start` | Serves the production build locally. |
| `npm run lint` | `eslint` | Runs ESLint to check for code quality and accessibility issues. |
| `npx tsc --noEmit` | `npx tsc --noEmit` | Executes TypeScript type checking across the project without emitting output files. |
| `npm run test:e2e` | `playwright test` | Executes Playwright desktop and mobile end-to-end smoke test suite. |

---

## 🗺️ Main Routes & Site Structure

```
├── /                                   # Homepage with hero, appeals, programmes, and updates
├── /about-us                           # About Caritas Kampala overview
│   ├── /about-us/our-story             # Organizational history & mission background
│   ├── /about-us/our-team              # Leadership & staff directory
│   └── /about-us/chaconet-partners     # Partner organization network
├── /our-programmes                     # Core thematic development & aid programmes
├── /current-appeal                     # Active emergency & humanitarian appeal highlights
├── /get-involved                       # Volunteering, partnerships, and community involvement
├── /donate                             # Guidance on giving, bank details, and verified donor options
├── /resources                          # Resources index
│   ├── /resources/news                 # Searchable news repository
│   ├── /resources/news/[slug]          # Individual news articles
│   ├── /resources/gallery              # Filterable photo gallery with lightbox viewer
│   ├── /resources/faqs                 # Frequently asked questions
│   └── /resources/annual-reports       # Annual reporting and downloadable documents
├── /contact-us                         # Office location, map, and contact enquiry form
├── /privacy-policy                     # Privacy statement and data handling policy
├── /terms-of-use                       # Terms of use and legal disclaimer
└── /api                                # Server API Routes
    ├── POST /api/contact               # Contact form validation & external dispatch handler
    └── GET /api/health                 # Health check probe endpoint for deployment monitoring
```

---

## 🔒 Contact Submission & Security Model

The contact form dispatches POST requests to `/api/contact`. The endpoint enforces strict operational & security boundaries:

- **Origin Enforcement:** Verifies same-origin request header.
- **Payload Constraints:** Enforces `application/json` Content-Type and a strict 16 KB body payload limit.
- **Input Validation & Sanitization:** Validates required contact fields.
- **Anti-Spam Honeypot:** Rejects bot submissions populating hidden honeypot fields.
- **Rate Limiting:** Employs an in-memory rate limiter (10 submissions per minute per IP address).
- **Forwarding Pipeline:** Dispatches validated enquiries to `CONTACT_FORM_ENDPOINT` with an 8-second timeout, returning a unique request ID for diagnostic logging.

---

## 📚 Technical Documentation Map

For detailed architectural decisions, security models, and code quality audits, refer to the project documentation specs:

| Specification | Description |
| --- | --- |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Domain boundaries, component design, and target system architecture. |
| [TESTING.md](TESTING.md) | Test strategy, Playwright e2e configuration, and coverage priorities. |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Environment setup, CI/CD pipeline, releases, and rollbacks. |
| [OBSERVABILITY.md](OBSERVABILITY.md) | Request tracing, diagnostic IDs, error handling, and Vercel analytics. |
| [API_REVIEW.md](API_REVIEW.md) | Analysis of endpoint security, payloads, and backend interface design. |
| [RELIABILITY_REVIEW.md](RELIABILITY_REVIEW.md) | System resilience, fault isolation, and timeout strategies. |
| [AUTH_SECURITY_REVIEW.md](AUTH_SECURITY_REVIEW.md) | Security posture, identity, and access management evaluation. |
| [ACCESSIBILITY_REVIEW.md](ACCESSIBILITY_REVIEW.md) | WCAG accessibility findings, keyboard navigation, and ARIA support. |
| [PERFORMANCE_REVIEW.md](PERFORMANCE_REVIEW.md) | Web Vitals performance benchmarks and optimization strategies. |
| [FRONTEND_REVIEW.md](FRONTEND_REVIEW.md) | Design system, visual UX, and component structure audit. |
| [CODE_QUALITY_REVIEW.md](CODE_QUALITY_REVIEW.md) | Maintainability, code patterns, and linting guidelines. |
| [STATE_MANAGEMENT_REVIEW.md](STATE_MANAGEMENT_REVIEW.md) | State scope boundaries and data fetching patterns. |
| [ANALYTICS.md](ANALYTICS.md) | Product telemetry, analytics events, and user privacy boundaries. |
| [COST_EFFICIENCY_REVIEW.md](COST_EFFICIENCY_REVIEW.md) | Hosting resource optimization and caching efficiency. |
| [caritas-charities-threat-model.md](caritas-charities-threat-model.md) | Comprehensive threat model analysis and mitigation measures. |
| [security_best_practices_report.md](security_best_practices_report.md) | Security auditing recommendations and implementation status. |

---

## 📌 Scope & Current Limitations

- **Content Storage:** Articles, team bios, and gallery metadata are statically maintained within the codebase (`lib/content/`). Content updates require code changes and redeployment.
- **Financial Processing:** The `/donate` page provides verified banking instructions and guidance; direct payment processing is intentionally delegated outside the app.
- **No Direct Database / User Accounts:** The platform contains no user authentication, admin backend, or database.
- **Contact State:** Contact submissions are forwarded to the configured external delivery endpoint (`CONTACT_FORM_ENDPOINT`) and are not stored locally in a database.

