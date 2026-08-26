# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> public site journeys >> all public routes render successfully
- Location: tests/e2e/site.spec.ts:4:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://127.0.0.1:3000/resources/gallery", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=f12e1]:
  - generic [ref=f12e2]:
    - link "Skip to main content" [ref=f12e3] [cursor=pointer]:
      - /url: "#main-content"
    - banner [ref=f12e4]:
      - region "Top utility bar" [ref=f12e5]:
        - generic [ref=f12e6]:
          - generic [ref=f12e7]:
            - strong [ref=f12e8]: Part of Caritas Kampala
            - generic [ref=f12e9]: "|"
            - link "Visit Caritas Kampala Main Website (opens in a new tab)" [ref=f12e10] [cursor=pointer]:
              - /url: https://www.caritaskampala.org/
              - generic [ref=f12e11]: Main Website
          - generic [ref=f12e14]:
            - button "Share this page" [ref=f12e15] [cursor=pointer]:
              - generic [ref=f12e18]: SHARE
            - button "Open search" [ref=f12e20] [cursor=pointer]:
              - generic [ref=f12e23]: Search
      - generic [ref=f12e24]:
        - link "Caritas Kampala Homepage" [ref=f12e25] [cursor=pointer]:
          - /url: /
          - img "Caritas Kampala Logo" [ref=f12e27]
        - navigation "Main Navigation" [ref=f12e28]:
          - link "Home" [ref=f12e30] [cursor=pointer]:
            - /url: /
          - button "About Us" [ref=f12e33]
          - link "Our Programmes" [ref=f12e38] [cursor=pointer]:
            - /url: /our-programmes
          - button "Resources" [ref=f12e41]
          - button "Get Involved" [ref=f12e46]
          - link "Contact Us" [ref=f12e51] [cursor=pointer]:
            - /url: /contact-us
        - link "DONATE" [ref=f12e54] [cursor=pointer]:
          - /url: /donate
    - main [ref=f12e55]:
      - generic [ref=f12e57]:
        - navigation "Breadcrumb" [ref=f12e58]:
          - list [ref=f12e59]:
            - listitem [ref=f12e60]:
              - link "HOME" [ref=f12e61] [cursor=pointer]:
                - /url: /
            - listitem [ref=f12e62]: /
            - listitem [ref=f12e63]:
              - link "RESOURCES" [ref=f12e64] [cursor=pointer]:
                - /url: /resources/news
            - listitem [ref=f12e65]: /
            - listitem [ref=f12e66]: FAQS
        - heading "Frequently Asked Questions" [level=1] [ref=f12e67]
        - paragraph [ref=f12e68]: Clear answers to help you get involved, contribute, and support our mission.
      - generic [ref=f12e69]:
        - generic [ref=f12e70]:
          - heading "Where is the collection point for donation items?" [level=2] [ref=f12e71]
          - paragraph [ref=f12e72]: All physical items (food, clothing, household goods) can be dropped off directly at the Caritas Kampala Office on Old Ggaba Road, Nsambya (next to the American Embassy), Kampala, Uganda.
        - generic [ref=f12e73]:
          - heading "Does Caritas assist people regardless of religion?" [level=2] [ref=f12e74]
          - paragraph [ref=f12e75]: Yes. Caritas Kampala serves everyone in need without discrimination based on religion, ethnicity, gender, or political affiliation.
        - generic [ref=f12e76]:
          - heading "How can I make a financial contribution?" [level=2] [ref=f12e77]
          - paragraph [ref=f12e78]: You can make a direct bank transfer or mobile money donation. Contact our offices or visit our Contact Us page for direct lines.
        - generic [ref=f12e79]:
          - heading "Can I volunteer with Caritas Kampala?" [level=2] [ref=f12e80]
          - paragraph [ref=f12e81]: Yes! We welcome volunteers across our parish networks, youth initiatives, and emergency relief distribution teams.
    - contentinfo "Site Footer" [ref=f12e82]:
      - generic [ref=f12e83]:
        - generic [ref=f12e84]:
          - generic [ref=f12e85]:
            - link "Caritas Kampala Homepage" [ref=f12e86] [cursor=pointer]:
              - /url: /
              - img "Caritas Kampala logo" [ref=f12e87]
            - paragraph [ref=f12e88]: The Charities Office operates under Caritas Kampala, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.
          - generic [ref=f12e89]:
            - generic [ref=f12e90]: FOLLOW CARITAS KAMPALA
            - generic "Social channels coming soon" [ref=f12e92]:
              - img "Facebook — link coming soon" [ref=f12e93]
              - img "Instagram — link coming soon" [ref=f12e96]
              - img "YouTube — link coming soon" [ref=f12e101]
              - img "X — link coming soon" [ref=f12e104]
        - separator [ref=f12e107]
        - generic [ref=f12e108]:
          - generic [ref=f12e109]:
            - heading "ABOUT" [level=3] [ref=f12e110]
            - list [ref=f12e111]:
              - listitem [ref=f12e112]:
                - link "About Us" [ref=f12e113] [cursor=pointer]:
                  - /url: /about-us
              - listitem [ref=f12e114]:
                - link "Our Team" [ref=f12e115] [cursor=pointer]:
                  - /url: /about-us/our-team
              - listitem [ref=f12e116]:
                - link "Partners — Chaconet Network" [ref=f12e117] [cursor=pointer]:
                  - /url: /about-us/chaconet-partners
              - listitem [ref=f12e118]:
                - link "Our Programmes" [ref=f12e119] [cursor=pointer]:
                  - /url: /our-programmes
          - generic [ref=f12e120]:
            - heading "GET INVOLVED" [level=3] [ref=f12e121]
            - list [ref=f12e122]:
              - listitem [ref=f12e123]:
                - link "Donate" [ref=f12e124] [cursor=pointer]:
                  - /url: /donate
              - listitem [ref=f12e125]:
                - link "Volunteer" [ref=f12e126] [cursor=pointer]:
                  - /url: /get-involved/volunteer
              - listitem [ref=f12e127]:
                - link "Charity Shop" [ref=f12e128] [cursor=pointer]:
                  - /url: /get-involved/charity-shop
          - generic [ref=f12e129]:
            - heading "EXPLORE" [level=3] [ref=f12e130]
            - list [ref=f12e131]:
              - listitem [ref=f12e132]:
                - link "Gallery" [ref=f12e133] [cursor=pointer]:
                  - /url: /resources/gallery
              - listitem [ref=f12e134]:
                - link "News & Updates" [ref=f12e135] [cursor=pointer]:
                  - /url: /resources/news
              - listitem [ref=f12e136]:
                - link "Annual Reports" [ref=f12e137] [cursor=pointer]:
                  - /url: /resources/annual-reports
              - listitem [ref=f12e138]:
                - link "FAQs" [ref=f12e139] [cursor=pointer]:
                  - /url: /resources/faqs
          - generic [ref=f12e140]:
            - heading "CONTACT & LEGAL" [level=3] [ref=f12e141]
            - list [ref=f12e142]:
              - listitem [ref=f12e143]:
                - link "Contact Us" [ref=f12e144] [cursor=pointer]:
                  - /url: /contact-us
              - listitem [ref=f12e145]:
                - link "Privacy Policy" [ref=f12e146] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=f12e147]:
                - link "Terms of Use" [ref=f12e148] [cursor=pointer]:
                  - /url: /terms-of-use
        - separator [ref=f12e149]
        - generic [ref=f12e150]:
          - generic [ref=f12e151]: © 2026 Caritas Kampala — Charities Office. All Rights Reserved.
          - link "Visit Main Website (opens in a new tab)" [ref=f12e153] [cursor=pointer]:
            - /url: https://www.caritaskampala.org/
            - generic [ref=f12e154]: Visit Main Website
  - button "Open Next.js Dev Tools" [ref=f12e162] [cursor=pointer]
  - alert [ref=f12e166]
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
> 27  |       const response = await page.goto(route);
      |                                   ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
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
  101 |       const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  102 |       expect(overflow, route).toBe(false);
  103 |     }
  104 |   });
  105 | });
  106 | 
```