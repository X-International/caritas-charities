export type AppealStatus = "active" | "concluded" | "upcoming";

export interface EmergencyAppeal {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  location: string;
  startAt: string; // ISO string with timezone offset e.g. "2026-07-01T00:00:00+03:00"
  endAt: string;   // ISO string with timezone offset e.g. "2026-10-01T00:00:00+03:00"
  image: string;
  homepageSummary: string;
  summary: string;
  periodLabel: string;
  priority: number;
  detailHref: string;
}

// Add future emergency appeals here.
// Status and homepage/archive placement are derived automatically from startAt/endAt timestamps.
// See docs/EMERGENCY_APPEALS.md for complete developer instructions.
export const emergencyAppeals: EmergencyAppeal[] = [
  {
    id: "karamoja-kotido-moroto-2026",
    slug: "current-appeal",
    title: "Emergency Appeal for Kotido and Moroto",
    shortTitle: "Kotido & Moroto, Karamoja",
    location: "Kotido & Moroto, Karamoja",
    startAt: "2026-07-01T00:00:00+03:00",
    endAt: "2026-10-01T00:00:00+03:00",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal.jpg",
    homepageSummary:
      "Climate change has driven drought and famine across Kotido and Moroto dioceses. The government has provided some relief, but it isn't enough. From July through September, the Archdiocese is collecting food such as posho, maize flour, rice, beans, and cooking oil to send to families in Karamoja. Every contribution counts, whatever its size.",
    summary:
      "The Charity Office joined the wider Church in Uganda in responding to families affected by famine in Kotido and Moroto. View the original appeal and documented response from the campaign.",
    periodLabel: "July – September 2026",
    priority: 100,
    detailHref: "/current-appeal",
  },
];
