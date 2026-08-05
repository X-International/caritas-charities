import { track } from "@vercel/analytics";

export const ANALYTICS_EVENTS = {
  ctaClick: "cta_click",
  contactFormSubmit: "contact_form_submit",
  contactFormResult: "contact_form_result",
  donationMethodCopy: "donation_method_copy",
  newsSearch: "news_search",
  shareOpen: "share_open",
  shareClick: "share_click",
} as const;

type AnalyticsValue = string | number | boolean | null | undefined;

/** Keep product analytics explicit and free of form contents or identifiers. */
export function trackEvent(event: string, properties?: Record<string, AnalyticsValue>) {
  if (typeof window === "undefined") return;
  track(event, properties);
}
