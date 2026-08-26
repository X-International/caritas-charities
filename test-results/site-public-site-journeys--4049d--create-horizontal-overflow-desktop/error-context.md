# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> public site journeys >> mobile layouts do not create horizontal overflow
- Location: tests/e2e/site.spec.ts:85:7

# Error details

```
Error: page.evaluate: Execution context was destroyed, most likely because of a navigation
```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - link "Skip to main content" [ref=f5e3] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=f5e4]:
    - region "Top utility bar" [ref=f5e5]:
      - generic [ref=f5e6]:
        - generic [ref=f5e7]:
          - strong [ref=f5e8]: Part of Caritas Kampala
          - generic [ref=f5e9]: "|"
          - link "Visit Caritas Kampala Main Website (opens in a new tab)" [ref=f5e10] [cursor=pointer]:
            - /url: https://www.caritaskampala.org/
            - generic [ref=f5e11]: Main Website
        - generic [ref=f5e14]:
          - button "Share this page" [ref=f5e15] [cursor=pointer]:
            - generic [ref=f5e18]: SHARE
          - button "Open search" [ref=f5e20] [cursor=pointer]:
            - generic [ref=f5e23]: Search
    - generic [ref=f5e24]:
      - link "Caritas Kampala Homepage" [ref=f5e25] [cursor=pointer]:
        - /url: /
        - img "Caritas Kampala Logo" [ref=f5e27]
      - navigation "Main Navigation" [ref=f5e28]:
        - link "Home" [ref=f5e30] [cursor=pointer]:
          - /url: /
        - button "About Us" [ref=f5e33]
        - link "Our Programmes" [ref=f5e38] [cursor=pointer]:
          - /url: /our-programmes
        - button "Resources" [ref=f5e41]
        - button "Get Involved" [ref=f5e46]
        - link "Contact Us" [ref=f5e51] [cursor=pointer]:
          - /url: /contact-us
      - link "DONATE" [ref=f5e54] [cursor=pointer]:
        - /url: /donate
  - main [ref=f5e55]:
    - navigation "Breadcrumb" [ref=f5e57]:
      - list [ref=f5e58]:
        - listitem [ref=f5e59]:
          - link "HOME" [ref=f5e60] [cursor=pointer]:
            - /url: /
        - listitem [ref=f5e61]:
          - generic [ref=f5e62]: /
          - generic [ref=f5e63]: DONATE
    - generic [ref=f5e64]:
      - img "Caritas Kampala donation and support" [ref=f5e66]
      - generic [ref=f5e68]:
        - text: GIVE WITH CONFIDENCE
        - heading "DONATE" [level=1] [ref=f5e69]
        - paragraph [ref=f5e70]: Your gift reaches families across the Kampala Archdiocese. Every contribution counts, whatever its size.
    - generic [ref=f5e72]:
      - generic [ref=f5e73]:
        - heading "Ways to Give" [level=2] [ref=f5e74]
        - paragraph [ref=f5e75]:
          - text: This is the official donation page of the Caritas Kampala Charities Office.
          - link "Visit Caritas Kampala →" [ref=f5e76] [cursor=pointer]:
            - /url: https://www.caritaskampalacharities.org/
      - img "Community members receiving support from Caritas Kampala" [ref=f5e78]
      - generic [ref=f5e79]:
        - generic [ref=f5e80]:
          - generic [ref=f5e85]:
            - heading "Give Online" [level=3] [ref=f5e86]
            - paragraph [ref=f5e87]: For secure online giving instructions, contact our team. We will confirm the current official payment route before you send money.
          - link [ref=f5e89] [cursor=pointer]:
            - /url: /contact-us
        - generic [ref=f5e93]:
          - generic [ref=f5e98]:
            - heading "Bank Transfer" [level=3] [ref=f5e99]
            - paragraph [ref=f5e100]: Send your gift directly to our account. Centenary Bank Entebbe Road Branch Account No.
            - generic [ref=f5e101]: "3010309657"
            - paragraph [ref=f5e102]: Caritas Kampala
          - button [ref=f5e104] [cursor=pointer]
        - generic [ref=f5e109]:
          - generic [ref=f5e114]:
            - heading "Mobile Money" [level=3] [ref=f5e115]
            - generic [ref=f5e116]:
              - paragraph [ref=f5e117]: Give directly using Mobile Money.
              - generic [ref=f5e118]:
                - button "Copy mobile number +256 762 506 906" [ref=f5e119]:
                  - generic [ref=f5e120]: +256 762 506 906
                - button "Copy mobile number +256 792 176 443" [ref=f5e124]:
                  - generic [ref=f5e125]: +256 792 176 443
              - paragraph [ref=f5e129]: "Reference: \"Caritas Cause\""
          - button [ref=f5e131] [cursor=pointer]
    - generic [ref=f5e138]:
      - generic [ref=f5e141]:
        - heading "“Whatever you did for one of the least of these brothers and sisters of mine, you did for me.”" [level=2] [ref=f5e142]
        - paragraph [ref=f5e143]: — Matthew 25:40.
      - img "Caritas Kampala community support" [ref=f5e145]
    - region [ref=f5e147]:
      - generic [ref=f5e148]:
        - generic [ref=f5e152]:
          - heading "Make a Gift Today" [level=2] [ref=f5e153]
          - paragraph [ref=f5e154]: Every gift, however given, reaches families who need it most. Contact our office to confirm the current official payment route before sending money.
        - link [ref=f5e156] [cursor=pointer]:
          - /url: /contact-us
  - contentinfo "Site Footer" [ref=f5e160]:
    - generic [ref=f5e161]:
      - generic [ref=f5e162]:
        - generic [ref=f5e163]:
          - link "Caritas Kampala Homepage" [ref=f5e164] [cursor=pointer]:
            - /url: /
            - img "Caritas Kampala logo" [ref=f5e165]
          - paragraph [ref=f5e166]: The Charities Office operates under Caritas Kampala, serving the Kampala Archdiocese through compassion, dignity, and practical support for those who need it most.
        - generic [ref=f5e167]:
          - generic [ref=f5e168]: FOLLOW CARITAS KAMPALA
          - generic "Social channels coming soon" [ref=f5e170]:
            - img "Facebook — link coming soon" [ref=f5e171]
            - img "Instagram — link coming soon" [ref=f5e174]
            - img "YouTube — link coming soon" [ref=f5e179]
            - img "X — link coming soon" [ref=f5e182]
      - separator [ref=f5e185]
      - generic [ref=f5e186]:
        - generic [ref=f5e187]:
          - heading "ABOUT" [level=3] [ref=f5e188]
          - list [ref=f5e189]:
            - listitem [ref=f5e190]:
              - link "About Us" [ref=f5e191] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=f5e192]:
              - link "Our Team" [ref=f5e193] [cursor=pointer]:
                - /url: /about-us/our-team
            - listitem [ref=f5e194]:
              - link "Partners — Chaconet Network" [ref=f5e195] [cursor=pointer]:
                - /url: /about-us/chaconet-partners
            - listitem [ref=f5e196]:
              - link "Our Programmes" [ref=f5e197] [cursor=pointer]:
                - /url: /our-programmes
        - generic [ref=f5e198]:
          - heading "GET INVOLVED" [level=3] [ref=f5e199]
          - list [ref=f5e200]:
            - listitem [ref=f5e201]:
              - link "Donate" [ref=f5e202] [cursor=pointer]:
                - /url: /donate
            - listitem [ref=f5e203]:
              - link "Volunteer" [ref=f5e204] [cursor=pointer]:
                - /url: /get-involved/volunteer
            - listitem [ref=f5e205]:
              - link "Charity Shop" [ref=f5e206] [cursor=pointer]:
                - /url: /get-involved/charity-shop
        - generic [ref=f5e207]:
          - heading "EXPLORE" [level=3] [ref=f5e208]
          - list [ref=f5e209]:
            - listitem [ref=f5e210]:
              - link "Gallery" [ref=f5e211] [cursor=pointer]:
                - /url: /resources/gallery
            - listitem [ref=f5e212]:
              - link "News & Updates" [ref=f5e213] [cursor=pointer]:
                - /url: /resources/news
            - listitem [ref=f5e214]:
              - link "Annual Reports" [ref=f5e215] [cursor=pointer]:
                - /url: /resources/annual-reports
            - listitem [ref=f5e216]:
              - link "FAQs" [ref=f5e217] [cursor=pointer]:
                - /url: /resources/faqs
        - generic [ref=f5e218]:
          - heading "CONTACT & LEGAL" [level=3] [ref=f5e219]
          - list [ref=f5e220]:
            - listitem [ref=f5e221]:
              - link "Contact Us" [ref=f5e222] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=f5e223]:
              - link "Privacy Policy" [ref=f5e224] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=f5e225]:
              - link "Terms of Use" [ref=f5e226] [cursor=pointer]:
                - /url: /terms-of-use
      - separator [ref=f5e227]
      - generic [ref=f5e228]:
        - generic [ref=f5e229]: © 2026 Caritas Kampala — Charities Office. All Rights Reserved.
        - link "Visit Main Website (opens in a new tab)" [ref=f5e231] [cursor=pointer]:
          - /url: https://www.caritaskampala.org/
          - generic [ref=f5e232]: Visit Main Website
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
  67  |     await page.getByLabel("Name *").fill("Test Visitor");
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
> 101 |       const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      |                                   ^ Error: page.evaluate: Execution context was destroyed, most likely because of a navigation
  102 |       expect(overflow, route).toBe(false);
  103 |     }
  104 |   });
  105 | });
  106 | 
```