import { expect, test } from "@playwright/test";

test.describe("Search functionality & ranking tests", () => {
  test("Navbar search panel toggles, focuses input, handles Escape, and submits", async ({ page }) => {
    await page.goto("/");

    // Click search toggle button
    const searchToggle = page.getByRole("button", { name: /open search/i });
    await searchToggle.click();

    // Verify search input is visible
    const searchInput = page.getByRole("textbox", { name: /search website/i });
    await expect(searchInput).toBeVisible();

    // Verify Escape closes search
    await page.keyboard.press("Escape");
    await expect(searchInput).not.toBeVisible();

    // Open search again, fill and submit via Enter
    await searchToggle.click();
    await expect(searchInput).toBeVisible();
    await searchInput.fill("volunteer");
    await page.keyboard.press("Enter");

    // Should navigate to /search?q=volunteer
    await page.waitForURL(/\/search\?q=volunteer/i, { timeout: 8000 });
    await expect(page.getByRole("heading", { name: /search results/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /volunteer with us/i })).toBeVisible();
  });

  test("Key search queries return appropriate top-ranked results", async ({ page }) => {
    const testCases: {
      query: string;
      expectedTitle: RegExp;
      expectedHrefPattern: RegExp;
    }[] = [
      {
        query: "Kotido",
        expectedTitle: /kotido.*moroto|emergency appeal for kotido/i,
        expectedHrefPattern: /\/(current-appeal|resources\/news\/kotido-moroto-famine-relief-drive)/,
      },
      {
        query: "Moroto",
        expectedTitle: /kotido.*moroto|current.*appeal|emergency appeal/i,
        expectedHrefPattern: /\/(current-appeal|resources\/news\/kotido-moroto-famine-relief-drive)/,
      },
      {
        query: "famine",
        expectedTitle: /famine|kotido.*moroto|current.*appeal/i,
        expectedHrefPattern: /\/(current-appeal|resources\/news\/kotido-moroto-famine-relief-drive)/,
      },
      {
        query: "volunteer",
        expectedTitle: /volunteer with us/i,
        expectedHrefPattern: /\/get-involved\/volunteer/,
      },
      {
        query: "charity shop",
        expectedTitle: /charity shop/i,
        expectedHrefPattern: /\/get-involved\/charity-shop/,
      },
      {
        query: "Chaconet",
        expectedTitle: /chaconet/i,
        expectedHrefPattern: /\/about-us\/chaconet-partners/,
      },
      {
        query: "refugees",
        expectedTitle: /refugee.*asylum|refugee.*seeker/i,
        expectedHrefPattern: /\/our-programmes/,
      },
      {
        query: "disability",
        expectedTitle: /disability.*special needs/i,
        expectedHrefPattern: /\/our-programmes/,
      },
      {
        query: "annual report",
        expectedTitle: /annual reports/i,
        expectedHrefPattern: /\/resources\/annual-reports/,
      },
    ];

    for (const { query, expectedTitle, expectedHrefPattern } of testCases) {
      await page.goto(`/search?q=${encodeURIComponent(query)}`);

      // Verify results count appears
      await expect(
        page.getByText(/found \d+ result/i),
        `Results count missing for query: "${query}"`
      ).toBeVisible({ timeout: 8000 });

      // Verify the expected top result is present
      const topLink = page.getByRole("link", { name: expectedTitle }).first();
      await expect(topLink, `Top result missing for query: "${query}"`).toBeVisible({ timeout: 5000 });

      // Verify the link href matches expected route
      const href = await topLink.getAttribute("href");
      expect(href, `Wrong href for query "${query}": got ${href}`).toMatch(expectedHrefPattern);
    }
  });

  test("Case insensitivity and whitespace handling — KOTIDO search", async ({ page }) => {
    // URL-encoded leading/trailing spaces + uppercase
    await page.goto("/search?q=%20%20KOTIDO%20%20");
    await expect(page.getByText(/found \d+ result/i)).toBeVisible({ timeout: 8000 });
    // Top result should be current appeal or Kotido news article
    await expect(
      page.getByRole("link", { name: /kotido.*moroto|emergency appeal for kotido|current emergency appeal/i }).first()
    ).toBeVisible();
  });

  test("No results state handles non-matching query cleanly", async ({ page }) => {
    await page.goto("/search?q=xyznonexistentterm12345");
    await expect(page.getByRole("heading", { name: /no results found/i })).toBeVisible();
    await expect(page.getByText(/no results found\. try a different search term\./i)).toBeVisible();
  });

  test("Responsive search — submit via click on desktop, tablet, and mobile", async ({ page }) => {
    const viewports = [
      { name: "Desktop", width: 1280, height: 800 },
      { name: "Tablet", width: 768, height: 1024 },
      { name: "Mobile", width: 375, height: 667 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");

      const searchToggle = page.getByRole("button", { name: /open search/i });
      await expect(searchToggle, `Search toggle not visible on ${vp.name}`).toBeVisible();
      await searchToggle.click();

      const searchInput = page.getByRole("textbox", { name: /search website/i });
      await expect(searchInput, `Search input not visible on ${vp.name}`).toBeVisible();

      await searchInput.fill("Chaconet");

      // Submit via button click
      const submitBtn = page.getByRole("button", { name: /submit search/i });
      await submitBtn.click();

      await page.waitForURL(/\/search\?q=Chaconet/i, { timeout: 8000 });
      await expect(
        page.getByRole("link", { name: /chaconet/i }).first(),
        `Chaconet result not found on ${vp.name}`
      ).toBeVisible();
    }
  });
});
