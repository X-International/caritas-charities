# Emergency Appeals — Developer Guide

The Emergency Appeals system for the Charity Office of Caritas Kampala is date-driven. Emergency appeals are registered in a single centralized data source and automatically transition from **ACTIVE** to **CONCLUDED** based on their configured ISO timestamps.

Do not create appeal-specific date conditions or hardcoded expiry logic in React components. The lifecycle system automatically manages homepage placement, archive listing under Emergency Appeals (`/appeals`), and detail page state transitions.

---

## 1. Actual File Locations

- **CENTRAL APPEAL DATA:** [lib/content/appeals.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/content/appeals.ts)
- **STATUS & DATE HELPER:** [lib/appeals-lifecycle.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/appeals-lifecycle.ts)
- **REACT LIFECYCLE HOOK:** [lib/useAppealsState.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/useAppealsState.ts)
- **HOMEPAGE APPEAL SECTION:** [components/CurrentCrises.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/components/CurrentCrises.tsx)
- **EMERGENCY APPEALS ARCHIVE PAGE:** [app/appeals/page.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/app/appeals/page.tsx) & [app/appeals/AppealsListClient.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/app/appeals/AppealsListClient.tsx)
- **KARAMOJA DETAIL PAGE:** [app/current-appeal/page.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/app/current-appeal/page.tsx) & [app/current-appeal/CurrentAppealClient.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/app/current-appeal/CurrentAppealClient.tsx)
- **NAVIGATION CONFIGURATION:** [components/navigation/nav-data.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/components/navigation/nav-data.ts) & [components/Footer.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/components/Footer.tsx)
- **DEVELOPMENT SIMULATION OVERRIDE:** `DEV_APPEAL_NOW_OVERRIDE` in [lib/appeals-lifecycle.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/appeals-lifecycle.ts)

---

## 2. Emergency Appeal Data Schema

Every appeal in `emergencyAppeals` ([lib/content/appeals.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/content/appeals.ts)) uses the `EmergencyAppeal` interface:

```ts
export interface EmergencyAppeal {
  id: string;              // Unique identifier e.g. "karamoja-kotido-moroto-2026"
  slug: string;            // URL slug e.g. "current-appeal" or "gulu-floods-2027"
  title: string;           // Full campaign title e.g. "Emergency Appeal for Kotido and Moroto"
  shortTitle?: string;     // Short location/subhead e.g. "Kotido & Moroto, Karamoja"
  location: string;        // Target region e.g. "Kotido & Moroto, Karamoja"
  startAt: string;         // ISO timestamp with Kampala offset e.g. "2026-07-01T00:00:00+03:00"
  endAt: string;           // ISO timestamp with Kampala offset e.g. "2026-10-01T00:00:00+03:00"
  image: string;           // Local image path e.g. "/images/current appeal/Caritas_Kampala_Current_Appeal.jpg"
  homepageSummary: string; // Summary shown on active homepage card
  summary: string;         // Summary shown on concluded/archive cards
  periodLabel: string;     // Human-readable campaign period e.g. "July – September 2026"
  priority: number;        // Priority weight (higher number = higher active priority)
  detailHref: string;      // Permanent URL route to the detail page e.g. "/current-appeal"
}
```

---

## 3. Date Format & Timezone Precision

All dates must be specified as full ISO 8601 strings with explicit East Africa Time / Kampala offset (`+03:00`).

```ts
startAt: "2026-07-01T00:00:00+03:00",
endAt:   "2026-10-01T00:00:00+03:00"
```

### Boundary Meaning:
- `2026-09-30T23:59:59+03:00` (1 second before `endAt`) → **ACTIVE**
- `2026-10-01T00:00:00+03:00` (Exact `endAt` boundary) → **CONCLUDED**

The system converts ISO timestamps into UTC epoch milliseconds at runtime. The transition occurs at the exact same real-world instant regardless of visitor location or Vercel server timezone.

---

## 4. What the Lifecycle Handles Automatically

When an appeal is registered in `emergencyAppeals`:

### WHEN ACTIVE:
- **Homepage:** Featured in the top `Current Appeal` section with urgent red background (`bg-[#b10017]`) and `See How to Help` CTA.
- **Archive Page (`/appeals`):** Listed under **Current Appeals** with a bright red `ACTIVE APPEAL` badge.
- **Detail Page:** Displays active drop-off instructions, collection points, active fundraising sidebar, and `SUPPORT THIS APPEAL` CTA.

### WHEN CONCLUDED:
- **Homepage:** Automatically changes section title to **Recent Emergency Response**, switches background to Core Pillars cream (`bg-[#f4efe6]`), displays `APPEAL CONCLUDED` badge, and updates CTA to `VIEW APPEAL & RESPONSE`.
- **Archive Page (`/appeals`):** Automatically leaves *Current Appeals* and enters **Past Appeals & Responses**.
- **Detail Page:** Page remains permanently accessible. Header shows `APPEAL CONCLUDED` badge; copy transitions to historical tense; active drop-off instructions are removed; sidebar presents historical response overview and primary CTA switches to `SUPPORT OUR ONGOING WORK` pointing to `/donate`.

---

## 5. Multiple Active Appeals Selection & Sorting

- **Homepage Featured Appeal Selection:**
  1. Searches for `ACTIVE` appeals (`now >= startAt` && `now < endAt`).
  2. If multiple active appeals exist, picks the one with the highest `priority`. If tied, picks the most recent `startAt`.
  3. If NO active appeals exist, picks the most recently concluded appeal (`endAt` descending) and presents it as `Recent Emergency Response`.
- **Archive Page (`/appeals`):**
  - **Current Appeals:** Displays all active appeals.
  - **Past Appeals & Responses:** Displays all concluded appeals sorted by `endAt` descending (newest conclusion first).

---

## 6. Never Delete Concluded Appeals

**Never delete a concluded appeal from `emergencyAppeals` when a new appeal starts.** Concluded appeals remain as permanent historical documentation in **Past Appeals & Responses** and protect existing bookmarks, SEO, and canonical links.

---

## 7. Adding a New Emergency Appeal

When adding a new emergency appeal to the website:

1. **Obtain Campaign Information:**
   - Title & short location
   - Start timestamp (`startAt`) and conclusion timestamp (`endAt`) with `+03:00` offset
   - Period label (e.g. `"November – December 2026"`)
   - Priority weight (e.g. `200` to feature above an existing `100` priority appeal)
   - Campaign image
   - Active homepage summary & archive summary
   - Detail page text (situation, response, essentials box, open to everyone section)
   - How to help / drop-off instructions & contact numbers
   - Campaign poster image & videos (if available)

2. **Add Central Data Record:**
   Open `lib/content/appeals.ts` and add the new object to the `emergencyAppeals` array.

3. **Create Permanent Detail Page:**
   Create a new route (e.g. `app/appeals/gulu-floods/page.tsx` and client component `GuluFloodsClient.tsx`).

4. **Prepare Both ACTIVE and CONCLUDED Content States:**
   - Use `useAppealsState()` hook to query appeal status dynamically.
   - Build active state view (urgent giving sidebar, drop-off instructions, present-tense response).
   - Build concluded state view (`APPEAL CONCLUDED` badge, past-tense narrative, historical sidebar, `SUPPORT OUR ONGOING WORK` CTA linking to `/donate`).

5. **Test Lifecycle States with Development Override:**
   Follow Section 8 below.

6. **Reset Simulation & Run Checks:**
   Reset `DEV_APPEAL_NOW_OVERRIDE` to `null` and run `npx tsc --noEmit` and `npm run build`.

---

## 8. Testing an Appeal Before Deployment

Use the safe development-only date simulation in `lib/appeals-lifecycle.ts`:

1. Open [lib/appeals-lifecycle.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/appeals-lifecycle.ts).
2. Set `DEV_APPEAL_NOW_OVERRIDE` to an ACTIVE test timestamp (e.g. `"2026-09-30T23:59:59+03:00"`).
3. Start local dev server (`npm run dev`) and inspect `/`, `/appeals`, and the appeal detail page.
4. Set `DEV_APPEAL_NOW_OVERRIDE` to a CONCLUDED test timestamp (e.g. `"2026-10-01T00:01:00+03:00"`).
5. Inspect `/`, `/appeals`, and the detail page to verify the concluded state.
6. **IMPORTANT:** Reset `DEV_APPEAL_NOW_OVERRIDE` to `null` before finishing.

*Production builds automatically ignore `DEV_APPEAL_NOW_OVERRIDE` via `process.env.NODE_ENV === "development"` guard.*

---

## 9. Generic Non-Production Appeal Template

*(EXAMPLE ONLY — DO NOT ADD THIS RECORD TO PRODUCTION DATA)*

```ts
{
  id: "example-emergency-appeal-2027",
  slug: "example-appeal",
  title: "Emergency Relief Appeal for Flood Response",
  shortTitle: "Northern Region Relief",
  location: "Gulu & Amuru, Uganda",
  startAt: "2027-04-01T00:00:00+03:00",
  endAt: "2027-06-01T00:00:00+03:00",
  image: "/images/appeals/example-relief.jpg",
  homepageSummary: "Severe flooding has displaced families across Gulu and Amuru. The Charity Office is mobilizing emergency food and shelter supplies.",
  summary: "The Charity Office joined Caritas Uganda and local partners in delivering flood relief items to displaced families in Gulu and Amuru.",
  periodLabel: "April – May 2027",
  priority: 200,
  detailHref: "/appeals/example-appeal",
}
```

---

## 10. Instructions for an AI Coding Assistant

When asked to add a new emergency appeal to this repository:

1. **Read this document (`docs/EMERGENCY_APPEALS.md`) first.**
2. **Inspect existing files:** [lib/content/appeals.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/content/appeals.ts), [lib/appeals-lifecycle.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/appeals-lifecycle.ts), and [app/current-appeal/CurrentAppealClient.tsx](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/app/current-appeal/CurrentAppealClient.tsx).
3. **Do not create new date logic or component-level conditional dates.**
4. Add the new record to `emergencyAppeals` array in [lib/content/appeals.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/content/appeals.ts).
5. Ensure timestamps include the `+03:00` Kampala offset.
6. Preserve previous appeals in `emergencyAppeals` (do not delete or overwrite Karamoja).
7. Create or configure the permanent detail page route.
8. Prepare BOTH active and concluded content variants.
9. Verify homepage selection and `/appeals` listing.
10. Test ACTIVE and CONCLUDED states using `DEV_APPEAL_NOW_OVERRIDE` in [lib/appeals-lifecycle.ts](file:///run/media/stuart/Shared/Caritas%20Kampala/Website/caritas-charities/lib/appeals-lifecycle.ts).
11. **Reset `DEV_APPEAL_NOW_OVERRIDE` to `null`.**
12. Run `npx tsc --noEmit` and `npm run build` to verify correctness.
13. Report all files changed and QA results clearly.
