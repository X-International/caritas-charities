# Design Style Guide — Caritas Kampala Charities Office

This document serves as the official design style guide and system documentation for the Caritas Kampala Charities Office web application. Its purpose is to document the visual identity, color system, typography scale, spacing rules, border-radius token system, component patterns, and the formal Button component system implemented across the codebase so future development remains visually consistent and aligned with established standards.

---

## 1. BRAND OVERVIEW & CONFIRMED DOMAIN

The visual identity of the Caritas Kampala Charities Office website is **warm, dignified, editorial, and faith-grounded**. As a Catholic charitable organization operating under Caritas Kampala within the Archdiocese of Kampala, the design reflects compassion, transparency, and respect for the people and communities served. 

The visual language balances high-contrast primary red (`#b10017`) with warm off-white and cream background tones (`#f4efe6`), dark editorial text, traditional serif display typography (Athelas / Georgia), and clean, modern sans-serif body text (Inter). Every interface element prioritizes accessibility, clear typography, generous spacing, and non-paternalistic visual representations of humanitarian work.

- **Confirmed Official Domain:** `https://www.caritaskampalacharities.org/`

---

## 2. COLOR PALETTE

### Core System Colors (Source of Truth)

| Token Name | Hex Code | CSS Variable / Tailwind Theme | Common Usage |
|:---|:---|:---|:---|
| **Primary Red** | `#b10017` | `--caritas-red` / `caritas-red` | Primary CTA buttons, hero red headers, main section titles, active navigation highlights, focus rings, primary icons. |
| **Dark Red (Hover)** | `#8e0a20` | `--caritas-dark-red` / `caritas-dark-red` | Standardized hover state for primary red buttons, deep gradient overlays, footer gradient bottom. |
| **Caritas Beige** | `#f4efe6` | `--caritas-beige` / `caritas-beige` | Standardized background for all cards (`DonateOnlineCard`, `LatestUpdates`, `GetInvolved` cards), news detail sidebars, and 404 page background. |
| **Caritas Teal** | `#006b5d` | `--caritas-teal` / `caritas-teal` | Spotlight section container background (`SpotlightSection.tsx`), category badge accents. |
| **Caritas Blue** | `#38a3ca` | `--caritas-blue` / `caritas-blue` | Accent utility token. |
| **Dark Utility Bar** | `#111111` | N/A | Top utility bar background (`Navbar.tsx`). |
| **Dark Background** | `#171717` | `--foreground` | Default page body text color, dark mode text fallback. |
| **Pure White** | `#ffffff` | `--background` | Main page background, card surfaces, white button variants. |

### Category Color Tokens

Category colors are centrally defined as theme tokens in `app/globals.css` and available as Tailwind utility classes:

- **Emergency Appeal:** `#b10017` (`var(--category-emergency)` / `bg-category-emergency`)
- **Announcement:** `#7a5b1d` (`var(--category-announcement)` / `bg-category-announcement`)
- **Partnership / General News:** `#0f6d67` (`var(--category-partnership)` / `bg-category-partnership`)

---

## 3. TYPOGRAPHY

### Font Families

The typography system combines a traditional serif font for headings with a clean sans-serif font for body text and navigation.

- **Serif (Headings & Display):** `Athelas` (loaded via custom `@font-face` from `/fonts/Athelas Regular/Athelas Regular.ttf`) with fallback `Georgia, "Times New Roman", serif`. Applied using the utility class `.font-serif`.
- **Sans-Serif (Body & UI):** `Inter` with fallback `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Applied by default on `body` and via `.font-sans`.
- **Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Applied via `.font-mono`.

### Type Scale & Hierarchy

| Level / Context | CSS / Tailwind Classes | Font Family | Example Location |
|:---|:---|:---|:---|
| **Banner Hero H1** | `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight` | Serif (`font-serif`) | `DonateHero.tsx`, `app/our-programmes/page.tsx` |
| **Article H1** | `text-3xl sm:text-4xl lg:text-[44px] leading-[1.15]` | Serif (`font-serif`) | `app/resources/news/[slug]/page.tsx` |
| **Section H2** | `text-2xl sm:text-3xl md:text-4xl font-extrabold` or `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b10017]` | Serif (`font-serif`) | `LatestUpdates.tsx`, `SpotlightSection.tsx` |
| **Card H3** | `text-xl sm:text-2xl font-bold text-[#b10017]` or `text-lg font-bold leading-snug` | Serif (`font-serif`) | `WhereWeServe.tsx`, `LatestUpdates.tsx` |
| **Hero Subtitle** | `text-base sm:text-lg text-red-100 font-light leading-relaxed` | Sans-Serif (`font-sans`) | `DonateHero.tsx`, `ContactHero.tsx` |
| **Article Lead / Body** | `text-[16px] sm:text-[17px] leading-[1.7] text-[#4f4f4f]` or `text-sm sm:text-base text-gray-700 leading-relaxed` | Sans-Serif (`font-sans`) | `resources/news/[slug]/page.tsx`, `app/about-us/page.tsx` |
| **Caption / Category Tag** | `text-[#585858] uppercase tracking-[0.18em] text-[11px] sm:text-xs font-semibold` | Sans-Serif (`font-sans`) | `LatestUpdates.tsx`, `NewsHero.tsx` |
| **Main Nav Label** | `text-sm font-bold uppercase tracking-wider` | Sans-Serif (`font-sans`) | `components/Navbar.tsx` |
| **Utility Bar Label** | `text-[11px] font-medium tracking-wide uppercase` | Sans-Serif (`font-sans`) | `components/Navbar.tsx` |
| **Primary Button Text** | `text-xs sm:text-sm font-bold uppercase tracking-wider` | Sans-Serif (`font-sans`) | `Button.tsx` (`variant="primary"`) |

---

## 4. SPACING & LAYOUT

### Container Max Width & Breakpoints

Layout containers are configured in `app/globals.css` via the `.site-container` class and `max-w-7xl` utility:

- **Max Width:** `--site-max-width: 80rem` (`1280px`).
- **Breakpoints:** `xs` (30rem / 480px), `sm` (40rem / 640px), `md` (48rem / 768px), `lg` (64rem / 1024px), `xl` (80rem / 1280px), `2xl` (96rem / 1536px).

### Responsive Container Padding Scale

```css
.site-container {
  width: 100%;
  max-width: var(--site-max-width);
  margin-inline: auto;
  padding-inline: 1rem; /* < 640px */
}
@media (min-width: 640px) { .site-container { padding-inline: 1.5rem; } }
@media (min-width: 1024px) { .site-container { padding-inline: 2rem; } }
@media (min-width: 1280px) { .site-container { padding-inline: 2.5rem; } }
@media (min-width: 1536px) { .site-container { padding-inline: 3rem; } }
```

---

## 5. BORDER RADIUS TOKEN SYSTEM

Ad-hoc border-radius values (`rounded-3xl`, `rounded-2xl`, `rounded-xl`, `rounded-full`) have been consolidated into 4 semantic radius tokens defined in `app/globals.css`:

| Token Name | Radius Value | Utility Class | Primary Usage |
|:---|:---|:---|:---|
| **`--radius-card`** | `1.5rem` (`24px`) | `rounded-card` | Major content cards, feature callouts, appeal banners (`DonateOnlineCard`, `LatestUpdates`, `SpotlightSection`). |
| **`--radius-subcard`** | `1.0rem` (`16px`) | `rounded-subcard` | Nested sub-cards, photo media containers, sidebars, modal dialog windows (`SidebarCard`, `ShareModal`). |
| **`--radius-input`** | `0.75rem` (`12px`) | `rounded-input` | Form text fields, textareas, select boxes, copy-link bar (`ContactForm.tsx`, `ShareModal.tsx`). |
| **`--radius-pill`** | `9999px` | `rounded-pill` | Buttons (`Button.tsx`), category tags, circular icon backdrops, carousel dots. |

### Intentional Layout Exceptions

1. **Hero Split Banners:** Banners (`OurStoryHero`, `ContactHero`, `DonateHero`) use asymmetric top/bottom or left/right rounding (`rounded-t-2xl sm:rounded-t-4xl lg:rounded-r-4xl` / `rounded-b-2xl sm:rounded-b-4xl lg:rounded-l-4xl`) to handle responsive transitions between mobile stacked blocks and desktop split panels.
2. **Where We Serve Cards:** `WhereWeServe.tsx` uses custom responsive curve `rounded-2xl sm:rounded-[28px]`.
3. **Compact Micro-UI Triggers:** Compact navigation dropdown items and mobile menu toggles use `rounded-md` (6px) or `rounded-sm` (4px).

---

## 6. BUTTON COMPONENT SYSTEM (`components/ui/Button.tsx`)

All interactive buttons and CTA links across the codebase are built using the centralized `Button` component located at `components/ui/Button.tsx`.

### Component Properties

```typescript
export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
```

### Variants

- **`primary` (Red Pill Button):** Deep red (`#b10017`) background, white text, hover transition to `#8e0a20`. Standard CTA for primary site actions (e.g. "DONATE", "Confirm Giving Details").
- **`secondary` (White/Contrast Button):** White background, red (`#b10017`) text, hover transition to light gray (`#f3f4f6`). Designed for high-contrast visibility on dark/red background panels (e.g. `SidebarCard`, `SpotlightSection`, `LatestUpdates`).
- **`outline` (Border Button):** Transparent background, red border (`border-[#b10017]`), red text, hover transition to solid red with white text.
- **`text` (Text Link Button):** Red text with hover underline effect and optional icon. Used for inline action links.

### Sizes

- **`sm`:** Compact padding (`px-4 py-2 text-[11px] sm:text-xs min-h-9`). Used for small inline triggers and map popups.
- **`md`:** Standard padding (`px-6 py-3 text-xs sm:text-sm min-h-11`). Default size used for navigation and standard cards.
- **`lg`:** Generous padding (`px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm min-h-12 sm:min-h-14`). Used for hero section CTAs and main contact submission buttons.

### Interactive States

- **Default:** Accessible touch targets with cursor pointer.
- **Hover:** Smooth background/color transition.
- **Focus-Visible:** High-visibility focus ring (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- **Disabled:** `disabled:opacity-50 disabled:pointer-events-none`.
- **Loading:** Displays an inline SVG spinner (`isLoading={true}`) and automatically disables interactions.

---

## 7. CARD COMPONENT SYSTEM (`components/ui/Card.tsx`)

All standard content cards and informational blocks across the codebase are built using the centralized `Card` component located at `components/ui/Card.tsx`.

### Component Properties

```typescript
export type CardVariant = "content" | "info";

export interface CardProps {
  variant?: CardVariant;   // Default: "content"
  as?: React.ElementType;  // Default: "div"
  className?: string;
  children: React.ReactNode;
}
```

### Variants

- **`content` (White Surface Card):** White background (`bg-white`), subcard radius (`rounded-subcard` / 16px), subtle border (`border border-gray-100`), shadow with hover elevation (`shadow-sm hover:shadow-md transition-shadow`), and responsive padding (`p-6 sm:p-8`). Used for news updates, carousel items, FAQ items, team profiles, and programme cards.
- **`info` (Beige Surface Card):** Warm beige background (`bg-caritas-beige` / `#f4efe6`), subcard radius (`rounded-subcard` / 16px), warm neutral border (`border border-[#e8dfd1]`), and responsive padding (`p-6 sm:p-8`). Used for informational callouts, partner category summaries, help sections, and article detail sidebars.

### Layout & Truncation Guidelines

- **Flex Layout:** When rendering cards in a grid with fixed-position footers or action icons, pass `className="flex flex-col justify-between"` and wrap body content in a `flex-1` container.
- **Text Truncation:** Card description paragraphs in grids MUST enforce `line-clamp-3` (or `line-clamp-2` for compact carousels) to prevent varying content lengths from misaligning footer dividers across the grid row.

### Code Examples

```tsx
/* Standard Content Card (News Update) */
<Card variant="content" className="flex flex-col justify-between">
  <div>
    <div className="flex justify-between items-center text-xs font-semibold text-gray-600 mb-3">
      <span className="bg-[#f4efe6] text-[#b10017] font-bold px-2.5 py-0.5 rounded text-[10px] uppercase">NEWS</span>
      <span>10.07.2026</span>
    </div>
    <h3 className="text-lg font-bold font-serif text-gray-900 mb-3">Title</h3>
    <p className="text-xs text-gray-700 line-clamp-3">Description...</p>
  </div>
  <div className="pt-4 border-t border-gray-100 flex justify-end">
    <Link href="..." className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">→</Link>
  </div>
</Card>

/* Informational Callout Card */
<Card variant="info" className="space-y-3">
  <h2 className="text-xl font-serif font-bold text-[#b10017]">Volunteer With Us</h2>
  <p className="text-sm text-gray-900">Assist in logistics, food packaging, and community outreach.</p>
</Card>
```

---

## 8. COMPONENT LIBRARY

### 1. Parent Utility Bar
- **Description:** Dark black (`#111111`) top bar displaying `"Part of Caritas Kampala"` link, search trigger, and share modal trigger.
- **Used In:** All pages via `Navbar.tsx`.

### 2. Main Navigation Bar & Mobile Drawer
- **Description:** Sticky white navigation header (`components/Navbar.tsx`) with logo, top-level navigation, and `<Button href="/donate">DONATE</Button>`. On mobile (`<1024px`), collapses into a drawer menu with accordions.
- **Used In:** All pages via `Navbar.tsx`.

### 3. Mega-Menu Dropdowns
- **Description:** Flyout panels for "About Us", "Resources", and "Get Involved" on desktop navigation.
- **Used In:** `Navbar.tsx` via `components/navigation/nav-data.ts`.

### 4. Red Panel Page Header
- **Description:** Hero banner featuring a deep Caritas red (`#b10017`) panel, light red breadcrumbs, bold Athelas serif page title in white, and optional subtitle.
- **Used In:** `DonateHero.tsx`, `OurStoryHero.tsx`, `ContactHero.tsx`, `VolunteerPage`, `CharityShopPage`.

### 5. Footer Component
- **Description:** Full-width footer (`components/Footer.tsx`) with standardized red gradient (`linear-gradient(to bottom, #b10017 200px, #8e0a20 100%)`). Contains official logo, mission statement, 4 navigation columns, social triggers, copyright line, and link to parent Archdiocese site.
- **Used In:** All pages via `Footer.tsx`.

---

## 9. CONTENT & TONE QUICK REFERENCE

| Guideline | Standard Requirement | Incorrect Example | Correct Example |
|:---|:---|:---|:---|
| **Official Domain** | Confirmed domain: **`https://www.caritaskampalacharities.org/`** | `http://caritaskampala.org/charities` | `https://www.caritaskampalacharities.org/` |
| **Organizational Name** | Use **"Caritas Kampala Charities Office"** or **"Charities Office"**. Never "Charities Department". | *"Caritas Kampala Charities Department"* | *"Caritas Kampala Charities Office"* |
| **Parent Relation** | The Charities Office operates **under** Caritas Kampala, serving the Archdiocese of Kampala. | *"Caritas Kampala is a subsidiary of our department."* | *"The Charities Office operates under Caritas Kampala."* |
| **Tone & Voice** | Warm, dignified, respectful, and faith-grounded. Avoid pitying or sensationalist language. | *"Pity the poor helpless victims..."* | *"Standing alongside families facing hardship with dignity and compassion."* |
| **Cliché Avoidance** | Avoid generic brochure phrases. | *"Empowering the voiceless / Transforming lives."* | *"Restoring dignity and providing practical community support."* |
| **Punctuation Rule** | Do not use em dashes (`—`) in body text; use commas or spaced hyphens. | *"Our mission—serving families—is ongoing."* | *"Our mission, serving families, is ongoing."* |

---

## 10. INCONSISTENCIES RESOLUTION STATUS

All visual and architectural inconsistencies identified in earlier codebase audits have been resolved:

1. **Footer Red Hex Hardcoding — RESOLVED:** `components/Footer.tsx` updated to use standardized `--caritas-red` (`#b10017`) and `--caritas-dark-red` (`#8e0a20`) tokens.
2. **Multiple Warm Neutral Hexes — RESOLVED:** Standardized all warm background cards (`DonateOnlineCard`, `VisionQuote`, `GetInvolvedPage`, `404 NotFound`, and news detail cards) to `--caritas-beige` (`#f4efe6`).
3. **Primary Red Hover Variations — RESOLVED:** Consolidated all primary red button hover states to `#8e0a20`.
4. **Inline News Category Colors — RESOLVED:** Replaced inline hex codes with CSS variables (`--category-emergency`, `--category-announcement`, `--category-partnership`) and Tailwind utility classes (`bg-category-emergency`, etc.).
5. **Inline Button Styling — RESOLVED:** Built a formal `<Button>` component system (`components/ui/Button.tsx`) and refactored button instances across the application to use it.
6. **Ad-Hoc Border-Radius Variations — RESOLVED:** Defined 4 semantic radius tokens (`rounded-card`, `rounded-subcard`, `rounded-input`, `rounded-pill`) in `globals.css` and applied them consistently across all components.
7. **Ad-Hoc Card Variations & Footer Misalignment — RESOLVED:** Built a central `<Card>` component system (`components/ui/Card.tsx`) with `content` (white) and `info` (beige) variants, enforced consistent `line-clamp-3` text truncation, and refactored card instances across all content pages.

