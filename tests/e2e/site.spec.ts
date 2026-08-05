import { expect, test } from "@playwright/test";

test.describe("public site journeys", () => {
  test("homepage exposes primary donation and programme journeys", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Caritas Kampala/i);
    await expect(page.getByRole("link", { name: /donate now/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /see how to help/i })).toBeVisible();
  });

  test("news search returns matching content and a useful empty state", async ({ page }) => {
    await page.goto("/resources/news?search=famine");
    await expect(page.getByText(/showing .* result/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /kotido.*moroto/i })).toBeVisible();

    await page.goto("/resources/news?search=term-that-does-not-exist");
    await expect(page.getByRole("heading", { name: /no matching updates/i })).toBeVisible();
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
    await expect(page.getByRole("status")).toContainText(/could not send/i);
  });

  test("gallery filters and lightbox controls are usable", async ({ page }) => {
    await page.goto("/resources/gallery");
    await expect(page.getByRole("group", { name: /filter gallery/i })).toBeVisible();
    const firstPhoto = page.getByRole("button", { name: /view photo/i }).first();
    await firstPhoto.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });

  test("mobile layouts do not create horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});
