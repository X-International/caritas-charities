# Product analytics plan

## Current maturity: Basic

Vercel Analytics and Speed Insights provide page views and performance signals when the site runs on Vercel. The application now adds a small set of custom events for the actions that represent real visitor intent. No form contents, names, emails, phone numbers, search terms, or payment details are sent.

## Event contract

| Event | Properties | Product question answered |
| --- | --- | --- |
| `cta_click` | `placement`, `destination`, optional `slide` | Which appeals and giving entry points lead visitors onward? |
| `contact_form_submit` | `form` | How often do visitors begin a contact enquiry? |
| `contact_form_result` | `form`, `result` | Are contact attempts succeeding or failing? |
| `donation_method_copy` | `method` | Which offline giving details are most useful? |
| `news_search` | `query_present`, `query_length` | Is search being used, without collecting potentially sensitive search terms? |
| `share_open` | `placement` | How often do visitors show intent to share? |
| `share_click` | `platform` | Which sharing destinations are used? |

Event names and property keys are defined in `lib/analytics.ts`. Keep values low-cardinality and anonymous. Never add contact form values, raw URLs containing query data, account numbers, or donor identifiers.

## Recommended dashboard questions

- What percentage of visits reach the donate or contact journey?
- Which homepage hero slide and CTA are used most often?
- How many contact attempts end in success versus provider error?
- Which giving method is copied most frequently?
- Is news search used, and are there enough results to justify improving it?
- Do mobile and desktop visitors behave differently on these key actions?

## Boundaries

Analytics is not the source of truth for contact delivery, payment reconciliation, or operational uptime. Use the structured contact logs and provider monitoring for those concerns. Do not add session replay, keystroke capture, or broad click tracking without a clear product question and privacy review.
