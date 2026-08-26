# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> public site journeys >> current appeal page exposes its support actions
- Location: tests/e2e/site.spec.ts:55:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /support this appeal by donating/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /support this appeal by donating/i })

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - region "Top utility bar":
    - strong: Part of Caritas Kampala
    - link "Visit Caritas Kampala Main Website (opens in a new tab)":
      - /url: https://www.caritaskampala.org/
      - text: Main Website
    - button "Share this page": SHARE
    - button "Open search": Search
  - link "Caritas Kampala Homepage":
    - /url: /
    - img "Caritas Kampala Logo"
  - navigation "Main Navigation":
    - link "Home":
      - /url: /
    - button "About Us"
    - link "Our Programmes":
      - /url: /our-programmes
    - button "Resources"
    - button "Get Involved"
    - link "Contact Us":
      - /url: /contact-us
  - link "DONATE":
    - /url: /donate
- main:
  - navigation "Breadcrumb":
    - list:
      - listitem:
        - link "HOME":
          - /url: /
      - listitem: CURRENT APPEAL
  - img "Emergency Appeal for Kotido and Moroto"
  - text: KOTIDO & MOROTO, KARAMOJA
  - paragraph: The famine in Kotido and Moroto has left many families struggling to meet their most basic needs.
  - heading "Emergency Appeal for Kotido and Moroto" [level=1]
  - paragraph: Standing with the people of Karamoja, together with the whole Church in Uganda.
  - separator
  - region "The Situation":
    - heading "The Situation" [level=2]
    - paragraph: Climate change has brought drought to the Karamoja region, and that drought has now become famine in the Kotido and Moroto dioceses. Families across the region are struggling to find enough food, and the need is urgent.
    - paragraph: The government has put aside some funding to help those affected. We acknowledge and appreciate that support. But it is not enough on its own. As a Church, we believe we have a responsibility to stand alongside the government, not replace it, in responding to the needs of our people.
  - region "Our Response":
    - heading "Our Response" [level=2]
    - paragraph: As the Kampala Archdiocese, we are calling on the entire Church in Uganda to come together for the people of Kotido and Moroto. This effort began in July and will continue through September.
    - paragraph: In July, we sent the first batch of support, money and household items, to Caritas Uganda, who then delivered it to families in Kotido and Moroto. Collection continues now through August and September, and we are asking parishes, communities, and individuals across the Archdiocese to take part.
    - heading "We are focused on food and basic household essentials, including:" [level=3]
    - list:
      - listitem: Rice
      - listitem: Posho
      - listitem: Maize
      - listitem: Beans
      - listitem: Sugar
      - listitem: Cooking oil
    - paragraph: Whatever you are able to give, whether food, household items, or a financial contribution, all of it helps. No contribution is too small.
  - region "Open to Everyone":
    - heading "Open to Everyone" [level=2]
    - paragraph: This appeal is not only for Catholics. Caritas does not discriminate based on religion, because hunger affects everyone the same way, regardless of their faith. While the Catholic Church is leading this initiative, the help itself is for anyone in Kotido and Moroto who needs it.
  - paragraph: “For I was hungry and you gave me something to eat.”
  - paragraph: Matthew 25:35
  - paragraph: This is the same passage that guides the wider mission of the Charities Office, and it is why we see responding to hunger, wherever we find it, as central to who we are.
  - complementary "How to support this appeal":
    - text: JULY – SEPTEMBER APPEAL
    - heading "How to Help" [level=3]
    - paragraph:
      - text: The Kampala Archdiocese has designated the
      - strong: Caritas Kampala Office
      - text: "as the collection point for this appeal. Donations of food, essential relief items, and other support materials can be dropped off at:"
    - paragraph:
      - link "Visit the Caritas Kampala website (opens in a new tab)":
        - /url: https://www.caritaskampalacharities.org/
        - text: Caritas Kampala Office
    - paragraph: Old Ggaba Road, Nsambya
    - paragraph: (next to the American Embassy)
    - paragraph: Kampala, Uganda
    - text: DIRECT CONTACT
    - heading "Need More Information?" [level=3]
    - paragraph: Questions about this appeal? Our team is ready to help with donations, collections, and enquiries.
    - separator
    - link "Donation Hotline +256 762 506 906":
      - /url: tel:+256762506906
    - link "Message the appeal team on WhatsApp at +256 792 176 443 (opens in a new tab)":
      - /url: https://wa.me/256792176443
      - text: WhatsApp +256 792 176 443
    - link "Main Office +256 392 176 443":
      - /url: tel:+256392176443
    - link "SUPPORT THIS APPEAL":
      - /url: /donate
    - paragraph: Every contribution brings hope to families affected by famine in Kotido and Moroto.
  - region "Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes.":
    - heading "Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes." [level=2]
    - link "Contact Us to Contribute":
      - /url: /contact-us
    - img "Caritas Kampala field team supporting community development"
  - region "Make a Gift Today":
    - heading "Make a Gift Today" [level=2]
    - paragraph: Every gift, however given, reaches families who need it most. Contact our office to confirm the current official payment route before sending money.
    - link "Confirm Giving Details":
      - /url: /contact-us
- contentinfo "Site Footer":
  - link "Caritas Kampala Homepage":
    - /url: /
    - img "Caritas Kampala logo"
  - paragraph: The Charities Office operates under Caritas Kampala, serving the Kampala Archdiocese through compassion, dignity, and practical support for those who need it most.
  - text: FOLLOW CARITAS KAMPALA
  - img "Facebook — link coming soon"
  - img "Instagram — link coming soon"
  - img "YouTube — link coming soon"
  - img "X — link coming soon"
  - separator
  - heading "ABOUT" [level=3]
  - list:
    - listitem:
      - link "About Us":
        - /url: /about-us
    - listitem:
      - link "Our Team":
        - /url: /about-us/our-team
    - listitem:
      - link "Partners — Chaconet Network":
        - /url: /about-us/chaconet-partners
    - listitem:
      - link "Our Programmes":
        - /url: /our-programmes
  - heading "GET INVOLVED" [level=3]
  - list:
    - listitem:
      - link "Donate":
        - /url: /donate
    - listitem:
      - link "Volunteer":
        - /url: /get-involved/volunteer
    - listitem:
      - link "Charity Shop":
        - /url: /get-involved/charity-shop
  - heading "EXPLORE" [level=3]
  - list:
    - listitem:
      - link "Gallery":
        - /url: /resources/gallery
    - listitem:
      - link "News & Updates":
        - /url: /resources/news
    - listitem:
      - link "Annual Reports":
        - /url: /resources/annual-reports
    - listitem:
      - link "FAQs":
        - /url: /resources/faqs
  - heading "CONTACT & LEGAL" [level=3]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: /contact-us
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy
    - listitem:
      - link "Terms of Use":
        - /url: /terms-of-use
  - separator
  - text: © 2026 Caritas Kampala — Charities Office. All Rights Reserved.
  - link "Visit Main Website (opens in a new tab)":
    - /url: https://www.caritaskampala.org/
    - text: Visit Main Website
- alert
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
> 58  |     await expect(page.getByRole("link", { name: /support this appeal by donating/i })).toBeVisible();
      |                                                                                        ^ Error: expect(locator).toBeVisible() failed
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