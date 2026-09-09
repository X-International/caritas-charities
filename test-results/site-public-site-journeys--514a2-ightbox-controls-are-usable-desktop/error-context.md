# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> public site journeys >> gallery filters and lightbox controls are usable
- Location: tests/e2e/site.spec.ts:74:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:3101/resources/gallery
Call log:
  - navigating to "http://127.0.0.1:3101/resources/gallery", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: 127.0.0.1
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
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
  9   |       "/about-us/our-team",
  10  |       "/contact-us",
  11  |       "/current-appeal",
  12  |       "/donate",
  13  |       "/get-involved/partnerships",
  14  |       "/our-programmes",
  15  |       "/privacy-policy",
  16  |       "/resources/annual-reports",
  17  |       "/resources/faqs",
  18  |       "/resources/gallery",
  19  |       "/resources/news",
  20  |       "/resources/news/kotido-moroto-famine-relief-drive",
  21  |       "/search",
  22  |       "/terms-of-use",
  23  |     ];
  24  | 
  25  |     for (const route of routes) {
  26  |       const response = await page.goto(route);
  27  |       expect(response?.status(), route).toBe(200);
  28  |       await expect(page.locator("body")).not.toContainText(/application error|internal server error/i);
  29  |     }
  30  |   });
  31  | 
  32  |   test("homepage exposes primary donation and programme journeys", async ({ page }) => {
  33  |     await page.goto("/");
  34  |     await expect(page).toHaveTitle(/Caritas Kampala/i);
  35  |     await expect(page.getByRole("heading", { name: /serving with compassion/i })).toBeVisible();
  36  |     await expect(page.getByRole("link", { name: /donate today/i })).toBeVisible();
  37  |     await expect(page.getByRole("button", { name: /next slide/i })).toBeVisible();
  38  |     await expect(page.getByRole("heading", { name: /current appeal/i })).toBeVisible();
  39  |     await expect(page.getByRole("link", { name: /see how to help families/i })).toBeVisible();
  40  |     await expect(page.getByRole("heading", { name: /our core pillars of support/i })).toBeVisible();
  41  |     await expect(page.getByRole("link", { name: /support emergency & disaster response/i }).first()).toBeVisible();
  42  |   });
  43  | 
  44  |   test("news search returns matching content and a useful empty state", async ({ page }) => {
  45  |     await page.goto("/resources/news?search=famine");
  46  |     // Updated result text: "Showing X news article(s) matching ..."
  47  |     await expect(page.getByText(/showing .* news article/i)).toBeVisible();
  48  |     await expect(page.getByRole("link", { name: /kotido.*moroto/i })).toBeVisible();
  49  | 
  50  |     await page.goto("/resources/news?search=term-that-does-not-exist");
  51  |     await expect(page.getByRole("heading", { name: /no matching updates/i })).toBeVisible();
  52  |   });
  53  | 
  54  |   test("current appeal page exposes its support actions", async ({ page }) => {
  55  |     await page.goto("/current-appeal");
  56  |     await expect(page.getByRole("heading", { name: /emergency appeal for kotido and moroto/i })).toBeVisible();
  57  |     await expect(page.getByRole("link", { name: /support this appeal by donating/i })).toBeVisible();
  58  |     await expect(page.getByRole("link", { name: /message the appeal team on whatsapp/i })).toBeVisible();
  59  |   });
  60  | 
  61  |   test("contact form reports a provider failure without losing user trust", async ({ page }) => {
  62  |     await page.route("**/api/contact", async (route) => {
  63  |       await route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "Contact service is not configured" }) });
  64  |     });
  65  |     await page.goto("/contact-us");
  66  |     await page.getByLabel("Name *").fill("Test Visitor");
  67  |     await page.getByLabel("Email Address *").fill("visitor@example.com");
  68  |     await page.getByLabel("Subject *").selectOption("general");
  69  |     await page.getByLabel("Message *").fill("A test enquiry");
  70  |     await page.getByRole("button", { name: /send message/i }).click();
  71  |     await expect(page.getByRole("status")).toContainText(/temporarily unavailable|could not send/i);
  72  |   });
  73  | 
  74  |   test("gallery filters and lightbox controls are usable", async ({ page }) => {
> 75  |     await page.goto("/resources/gallery");
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:3101/resources/gallery
  76  |     await expect(page.getByRole("group", { name: /filter gallery/i })).toBeVisible();
  77  |     const firstPhoto = page.getByRole("button", { name: /view photo/i }).first();
  78  |     await firstPhoto.click();
  79  |     await expect(page.locator(".yarl__root")).toBeVisible();
  80  |     await page.keyboard.press("Escape");
  81  |     await expect(page.locator(".yarl__root")).toHaveCount(0);
  82  |   });
  83  | 
  84  |   test("mobile layouts do not create horizontal overflow", async ({ page }) => {
  85  |     const routes = [
  86  |       "/",
  87  |       "/about-us",
  88  |       "/contact-us",
  89  |       "/current-appeal",
  90  |       "/donate",
  91  |       "/get-involved/partnerships",
  92  |       "/our-programmes",
  93  |       "/resources/gallery",
  94  |       "/resources/news",
  95  |       "/resources/news/kotido-moroto-famine-relief-drive",
  96  |     ];
  97  | 
  98  |     for (const route of routes) {
  99  |       await page.goto(route);
  100 |       const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  101 |       expect(overflow, route).toBe(false);
  102 |     }
  103 |   });
  104 | });
  105 | 
```