# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> public site journeys >> contact form reports a provider failure without losing user trust
- Location: tests/e2e/site.spec.ts:62:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Name *')
    - waiting for "http://127.0.0.1:3000/contact-us" navigation to finish...
    - navigated to "http://127.0.0.1:3000/contact-us"

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - link "Skip to main content" [ref=f1e3] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=f1e4]:
    - region "Top utility bar" [ref=f1e5]:
      - generic [ref=f1e6]:
        - generic [ref=f1e7]:
          - strong [ref=f1e8]: Part of Caritas Kampala
          - generic [ref=f1e9]: "|"
          - link "Visit Caritas Kampala Main Website (opens in a new tab)" [ref=f1e10] [cursor=pointer]:
            - /url: https://www.caritaskampala.org/
            - generic [ref=f1e11]: Main Website
        - generic [ref=f1e14]:
          - button "Share this page" [ref=f1e15] [cursor=pointer]:
            - generic [ref=f1e18]: SHARE
          - button "Open search" [ref=f1e20] [cursor=pointer]:
            - generic [ref=f1e23]: Search
    - generic [ref=f1e24]:
      - link "Caritas Kampala Homepage" [ref=f1e25] [cursor=pointer]:
        - /url: /
        - img "Caritas Kampala Logo" [ref=f1e27]
      - navigation "Main Navigation" [ref=f1e28]:
        - link "Home" [ref=f1e30] [cursor=pointer]:
          - /url: /
        - button "About Us" [ref=f1e33]
        - link "Our Programmes" [ref=f1e38] [cursor=pointer]:
          - /url: /our-programmes
        - button "Resources" [ref=f1e41]
        - button "Get Involved" [ref=f1e46]
        - link "Contact Us" [ref=f1e51] [cursor=pointer]:
          - /url: /contact-us
      - link "DONATE" [ref=f1e55] [cursor=pointer]:
        - /url: /donate
  - main [ref=f1e56]:
    - navigation "Breadcrumb" [ref=f1e58]:
      - list [ref=f1e59]:
        - listitem [ref=f1e60]:
          - link "HOME" [ref=f1e61] [cursor=pointer]:
            - /url: /
        - listitem [ref=f1e62]:
          - generic [ref=f1e63]: /
          - generic [ref=f1e64]: CONTACT US
    - generic [ref=f1e65]:
      - img "Caritas Kampala community outreach" [ref=f1e67]
      - generic [ref=f1e69]:
        - text: WE'D LIKE TO HEAR FROM YOU
        - heading "CONTACT US" [level=1] [ref=f1e70]
        - paragraph [ref=f1e71]: Whether you have a question, want to support our current appeal, or would like to get involved, we're here to help.
    - generic [ref=f1e74]:
      - generic [ref=f1e75]:
        - generic [ref=f1e76]:
          - heading "Visit & Call Us" [level=2] [ref=f1e77]
          - paragraph [ref=f1e78]: Our main office location and direct phone lines.
        - generic [ref=f1e84]:
          - paragraph [ref=f1e85]: Caritas Kampala Main Office
          - generic [ref=f1e86]:
            - paragraph [ref=f1e87]: Old Ggaba Road, Nsambya
            - paragraph [ref=f1e88]: (next to the American Embassy)
            - paragraph [ref=f1e89]: Kampala, Uganda
          - link "Get directions" [ref=f1e90] [cursor=pointer]:
            - /url: https://www.google.com/maps/dir/?api=1&destination=0.299230886593831,32.593433862503
        - generic [ref=f1e97]:
          - paragraph [ref=f1e98]: Direct Contact Lines
          - generic [ref=f1e99]:
            - link "Call Appeal Line at +256 762 506 906" [ref=f1e100] [cursor=pointer]:
              - /url: tel:+256762506906
              - generic [ref=f1e101]: "Appeal Line:"
              - generic [ref=f1e102]: +256 762 506 906
            - link "Message Appeal Line (Alt) on WhatsApp at +256 792 176 443" [ref=f1e103] [cursor=pointer]:
              - /url: https://wa.me/256792176443
              - generic [ref=f1e104]: "Appeal Line (Alt):"
              - generic [ref=f1e105]: +256 792 176 443
            - link "Call Main Office at +256 392 176 443" [ref=f1e106] [cursor=pointer]:
              - /url: tel:+256392176443
              - generic [ref=f1e107]: "Main Office:"
              - generic [ref=f1e108]: +256 392 176 443
      - generic [ref=f1e109]:
        - generic [ref=f1e110]:
          - heading "Send Us a Message" [level=2] [ref=f1e111]
          - paragraph [ref=f1e112]: Fill out the form below and we'll get back to you as soon as possible.
        - generic [ref=f1e113]:
          - generic [ref=f1e114]:
            - generic [ref=f1e115]:
              - generic [ref=f1e116]: Name*
              - textbox "Name" [ref=f1e117]:
                - /placeholder: e.g. Maria Namuli
            - generic [ref=f1e118]:
              - generic [ref=f1e119]: Email Address*
              - textbox "Email Address" [ref=f1e120]:
                - /placeholder: e.g. jane@example.com…
          - generic [ref=f1e121]:
            - generic [ref=f1e122]: Phone Number(optional)
            - textbox "Phone Number(optional)" [ref=f1e123]:
              - /placeholder: e.g. +256 700 000 000
          - generic [ref=f1e124]:
            - generic [ref=f1e125]: Subject*
            - combobox "Subject" [ref=f1e126]:
              - option "Select a subject..." [disabled] [selected]
              - option "General Enquiry"
              - option "Donations & Giving"
              - option "Partnerships"
              - option "Media & Press"
              - option "Something Else"
          - generic [ref=f1e127]:
            - generic [ref=f1e128]: Message*
            - textbox "Message" [ref=f1e129]:
              - /placeholder: How can we help you?…
          - generic [ref=f1e130]:
            - button "Send Message" [ref=f1e131] [cursor=pointer]
            - paragraph [ref=f1e132]: By submitting this form, you agree to be contacted about your enquiry.
  - region "Caritas Kampala Office Location Map" [ref=f1e133]:
    - generic "Loading map" [ref=f1e135]
  - contentinfo "Site Footer" [ref=f1e136]:
    - generic [ref=f1e137]:
      - generic [ref=f1e138]:
        - generic [ref=f1e139]:
          - link "Caritas Kampala Homepage" [ref=f1e140] [cursor=pointer]:
            - /url: /
            - img "Caritas Kampala logo" [ref=f1e141]
          - paragraph [ref=f1e142]: The Charities Office operates under Caritas Kampala, serving the Kampala Archdiocese through compassion, dignity, and practical support for those who need it most.
        - generic [ref=f1e143]:
          - generic [ref=f1e144]: FOLLOW CARITAS KAMPALA
          - generic "Social channels coming soon" [ref=f1e146]:
            - img "Facebook — link coming soon" [ref=f1e147]
            - img "Instagram — link coming soon" [ref=f1e150]
            - img "YouTube — link coming soon" [ref=f1e155]
            - img "X — link coming soon" [ref=f1e158]
      - separator [ref=f1e161]
      - generic [ref=f1e162]:
        - generic [ref=f1e163]:
          - heading "ABOUT" [level=3] [ref=f1e164]
          - list [ref=f1e165]:
            - listitem [ref=f1e166]:
              - link "About Us" [ref=f1e167] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=f1e168]:
              - link "Our Team" [ref=f1e169] [cursor=pointer]:
                - /url: /about-us/our-team
            - listitem [ref=f1e170]:
              - link "Partners — Chaconet Network" [ref=f1e171] [cursor=pointer]:
                - /url: /about-us/chaconet-partners
            - listitem [ref=f1e172]:
              - link "Our Programmes" [ref=f1e173] [cursor=pointer]:
                - /url: /our-programmes
        - generic [ref=f1e174]:
          - heading "GET INVOLVED" [level=3] [ref=f1e175]
          - list [ref=f1e176]:
            - listitem [ref=f1e177]:
              - link "Donate" [ref=f1e178] [cursor=pointer]:
                - /url: /donate
            - listitem [ref=f1e179]:
              - link "Volunteer" [ref=f1e180] [cursor=pointer]:
                - /url: /get-involved/volunteer
            - listitem [ref=f1e181]:
              - link "Charity Shop" [ref=f1e182] [cursor=pointer]:
                - /url: /get-involved/charity-shop
        - generic [ref=f1e183]:
          - heading "EXPLORE" [level=3] [ref=f1e184]
          - list [ref=f1e185]:
            - listitem [ref=f1e186]:
              - link "Gallery" [ref=f1e187] [cursor=pointer]:
                - /url: /resources/gallery
            - listitem [ref=f1e188]:
              - link "News & Updates" [ref=f1e189] [cursor=pointer]:
                - /url: /resources/news
            - listitem [ref=f1e190]:
              - link "Annual Reports" [ref=f1e191] [cursor=pointer]:
                - /url: /resources/annual-reports
            - listitem [ref=f1e192]:
              - link "FAQs" [ref=f1e193] [cursor=pointer]:
                - /url: /resources/faqs
        - generic [ref=f1e194]:
          - heading "CONTACT & LEGAL" [level=3] [ref=f1e195]
          - list [ref=f1e196]:
            - listitem [ref=f1e197]:
              - link "Contact Us" [ref=f1e198] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=f1e199]:
              - link "Privacy Policy" [ref=f1e200] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=f1e201]:
              - link "Terms of Use" [ref=f1e202] [cursor=pointer]:
                - /url: /terms-of-use
      - separator [ref=f1e203]
      - generic [ref=f1e204]:
        - generic [ref=f1e205]: © 2026 Caritas Kampala — Charities Office. All Rights Reserved.
        - link "Visit Main Website (opens in a new tab)" [ref=f1e207] [cursor=pointer]:
          - /url: https://www.caritaskampala.org/
          - generic [ref=f1e208]: Visit Main Website
```

# Test source

```ts
  1   | import { expect, test } from "@playwright/test";
  2   | 
  3   | test.describe("public site journeys", () => {
  4   |   test("all public routes render successfully", async ({ page }) => {
  5   |     const routes = [
  6   |       "/",
  7   |       "/about-us",
  8   |       "/about-us/chaconet-partners",
  9   |       "/about-us/our-story",
  10  |       "/about-us/our-team",
  11  |       "/contact-us",
  12  |       "/current-appeal",
  13  |       "/donate",
  14  |       "/get-involved",
  15  |       "/our-programmes",
  16  |       "/privacy-policy",
  17  |       "/resources/annual-reports",
  18  |       "/resources/faqs",
  19  |       "/resources/gallery",
  20  |       "/resources/news",
  21  |       "/resources/news/kotido-moroto-famine-relief-drive",
  22  |       "/search",
  23  |       "/terms-of-use",
  24  |     ];
  25  | 
  26  |     for (const route of routes) {
  27  |       const response = await page.goto(route);
  28  |       expect(response?.status(), route).toBe(200);
  29  |       await expect(page.locator("body")).not.toContainText(/application error|internal server error/i);
  30  |     }
  31  |   });
  32  | 
  33  |   test("homepage exposes primary donation and programme journeys", async ({ page }) => {
  34  |     await page.goto("/");
  35  |     await expect(page).toHaveTitle(/Caritas Kampala/i);
  36  |     await expect(page.getByRole("heading", { name: /serving with compassion/i })).toBeVisible();
  37  |     await expect(page.getByRole("link", { name: /donate today/i })).toBeVisible();
  38  |     await expect(page.getByRole("button", { name: /next slide/i })).toBeVisible();
  39  |     await expect(page.getByRole("heading", { name: /current appeal/i })).toBeVisible();
  40  |     await expect(page.getByRole("link", { name: /see how to help families/i })).toBeVisible();
  41  |     await expect(page.getByRole("heading", { name: /our core pillars of support/i })).toBeVisible();
  42  |     await expect(page.getByRole("link", { name: /support emergency & disaster response/i }).first()).toBeVisible();
  43  |   });
  44  | 
  45  |   test("news search returns matching content and a useful empty state", async ({ page }) => {
  46  |     await page.goto("/resources/news?search=famine");
  47  |     // Updated result text: "Showing X news article(s) matching ..."
  48  |     await expect(page.getByText(/showing .* news article/i)).toBeVisible();
  49  |     await expect(page.getByRole("link", { name: /kotido.*moroto/i })).toBeVisible();
  50  | 
  51  |     await page.goto("/resources/news?search=term-that-does-not-exist");
  52  |     await expect(page.getByRole("heading", { name: /no matching updates/i })).toBeVisible();
  53  |   });
  54  | 
  55  |   test("current appeal page exposes its support actions", async ({ page }) => {
  56  |     await page.goto("/current-appeal");
  57  |     await expect(page.getByRole("heading", { name: /emergency appeal for kotido and moroto/i })).toBeVisible();
  58  |     await expect(page.getByRole("link", { name: /support this appeal by donating/i })).toBeVisible();
  59  |     await expect(page.getByRole("link", { name: /message the appeal team on whatsapp/i })).toBeVisible();
  60  |   });
  61  | 
  62  |   test("contact form reports a provider failure without losing user trust", async ({ page }) => {
  63  |     await page.route("**/api/contact", async (route) => {
  64  |       await route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "Contact service is not configured" }) });
  65  |     });
  66  |     await page.goto("/contact-us");
> 67  |     await page.getByLabel("Name *").fill("Test Visitor");
      |                                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  68  |     await page.getByLabel("Email Address *").fill("visitor@example.com");
  69  |     await page.getByLabel("Subject *").selectOption("general");
  70  |     await page.getByLabel("Message *").fill("A test enquiry");
  71  |     await page.getByRole("button", { name: /send message/i }).click();
  72  |     await expect(page.getByRole("status")).toContainText(/temporarily unavailable|could not send/i);
  73  |   });
  74  | 
  75  |   test("gallery filters and lightbox controls are usable", async ({ page }) => {
  76  |     await page.goto("/resources/gallery");
  77  |     await expect(page.getByRole("group", { name: /filter gallery/i })).toBeVisible();
  78  |     const firstPhoto = page.getByRole("button", { name: /view photo/i }).first();
  79  |     await firstPhoto.click();
  80  |     await expect(page.locator(".yarl__root")).toBeVisible();
  81  |     await page.keyboard.press("Escape");
  82  |     await expect(page.locator(".yarl__root")).toHaveCount(0);
  83  |   });
  84  | 
  85  |   test("mobile layouts do not create horizontal overflow", async ({ page }) => {
  86  |     const routes = [
  87  |       "/",
  88  |       "/about-us",
  89  |       "/contact-us",
  90  |       "/current-appeal",
  91  |       "/donate",
  92  |       "/get-involved",
  93  |       "/our-programmes",
  94  |       "/resources/gallery",
  95  |       "/resources/news",
  96  |       "/resources/news/kotido-moroto-famine-relief-drive",
  97  |     ];
  98  | 
  99  |     for (const route of routes) {
  100 |       await page.goto(route);
  101 |       const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  102 |       expect(overflow, route).toBe(false);
  103 |     }
  104 |   });
  105 | });
  106 | 
```