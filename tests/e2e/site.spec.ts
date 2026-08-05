import { expect, test } from "@playwright/test";

test.describe("public site journeys", () => {
  test("all public routes render successfully", async ({ page }) => {
    const routes = [
      "/",
      "/about-us",
      "/about-us/chaconet-partners",
      "/about-us/our-story",
      "/about-us/our-team",
      "/contact-us",
      "/current-appeal",
      "/donate",
      "/get-involved",
      "/our-programmes",
      "/privacy-policy",
      "/resources/annual-reports",
      "/resources/faqs",
      "/resources/gallery",
      "/resources/news",
      "/resources/news/kotido-moroto-famine-relief-drive",
      "/terms-of-use",
    ];

    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("body")).not.toContainText(/application error|internal server error/i);
    }
  });

  test("homepage exposes primary donation and programme journeys", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Caritas Kampala/i);
    await expect(page.getByRole("heading", { name: /serving with compassion/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /donate today/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /next slide/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /current appeal/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /see how to help families/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /our core pillars of support/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /support emergency & disaster response/i }).first()).toBeVisible();
  });

  test("news search returns matching content and a useful empty state", async ({ page }) => {
    await page.goto("/resources/news?search=famine");
    await expect(page.getByText(/showing .* result/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /kotido.*moroto/i })).toBeVisible();

    await page.goto("/resources/news?search=term-that-does-not-exist");
    await expect(page.getByRole("heading", { name: /no matching updates/i })).toBeVisible();
  });

  test("current appeal page exposes its support actions", async ({ page }) => {
    await page.goto("/current-appeal");
    await expect(page.getByRole("heading", { name: /emergency appeal for kotido and moroto/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /support this appeal by donating/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /message the appeal team on whatsapp/i })).toBeVisible();
  });

  test("contact form reports a provider failure without losing user trust", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "Contact service is not configured" }) });
    });
    await page.goto("/contact-us");
    await page.getByLabel("Name *").fill("Test Visitor");
    await page.getByLabel("Email Address *").fill("visitor@example.com");
    await page.getByLabel("Subject *").selectOption("general");
    await page.getByLabel("Message *").fill("A test enquiry");
    await page.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByRole("status")).toContainText(/temporarily unavailable|could not send/i);
  });

  test("gallery filters and lightbox controls are usable", async ({ page }) => {
    await page.goto("/resources/gallery");
    await expect(page.getByRole("group", { name: /filter gallery/i })).toBeVisible();
    const firstPhoto = page.getByRole("button", { name: /view photo/i }).first();
    await firstPhoto.click();
    await expect(page.locator(".yarl__root")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(".yarl__root")).toHaveCount(0);
  });

  test("mobile layouts do not create horizontal overflow", async ({ page }) => {
    const routes = [
      "/",
      "/about-us",
      "/contact-us",
      "/current-appeal",
      "/donate",
      "/get-involved",
      "/our-programmes",
      "/resources/gallery",
      "/resources/news",
      "/resources/news/kotido-moroto-famine-relief-drive",
    ];

    for (const route of routes) {
      await page.goto(route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflow, route).toBe(false);
    }
  });
});
