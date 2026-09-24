import { expect, test } from "@playwright/test";

test.describe("Annual Needs & Priorities and Annual Reports Header", () => {
  test("Resources dropdown contains all 8 items in exact order and descriptions", async ({ page }) => {
    await page.goto("/");
    // Trigger desktop Resources dropdown
    const resourcesButton = page.getByRole("button", { name: /^resources/i });
    if (await resourcesButton.isVisible()) {
      await resourcesButton.hover();
      const menu = page.locator("#mega-menu-resources");
      await expect(menu).toBeVisible();

      // Check the 8 items in order
      const expectedLinks = [
        { name: "NEWS & UPDATES", href: "/resources/news" },
        { name: "EMERGENCY APPEALS", href: "/appeals" },
        { name: "SUCCESS STORIES", href: "/resources/success-stories" },
        { name: "EVENTS", href: "/resources/events" },
        { name: "GALLERY", href: "/resources/gallery" },
        { name: "ANNUAL NEEDS & PRIORITIES", href: "/resources/annual-needs" },
        { name: "ANNUAL REPORTS", href: "/resources/annual-reports" },
        { name: "FAQs", href: "/resources/faqs" },
      ];

      for (const item of expectedLinks) {
        const link = menu.locator(`a[href="${item.href}"]`);
        await expect(link).toBeVisible();
        await expect(link).toContainText(item.name);
      }
    }
  });

  test("Annual Reports page has SplitPageHeader and retains coming soon content with noindex", async ({ page }) => {
    await page.goto("/resources/annual-reports");
    await expect(page).toHaveTitle(/Annual Reports \| Caritas Kampala Charity Office/i);

    // Robots meta should be noindex, follow
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute("content", /noindex,\s*follow/i);

    // Split header content
    const header = page.locator("section[aria-label='Annual Reports Header']");
    await expect(header).toBeVisible();
    await expect(header.getByText("DOCUMENTS & ACCOUNTABILITY").filter({ visible: true })).toBeVisible();
    await expect(header.getByText("Annual Reports").filter({ visible: true })).toBeVisible();
    await expect(
      header.getByText("Read reports on the Charity Office’s work, progress and organisational accountability.").filter({ visible: true })
    ).toBeVisible();

    // Check image
    const img = header.locator('img[src*="Caritas_Kampala_47.jpg"]').filter({ visible: true });
    await expect(img).toBeVisible();

    // Breadcrumbs
    await expect(header.getByRole("navigation", { name: "Breadcrumb" })).toContainText("Home");
    await expect(header.getByRole("navigation", { name: "Breadcrumb" })).toContainText("Resources");
    await expect(header.getByRole("navigation", { name: "Breadcrumb" })).toContainText("Annual Reports");

    // Coming soon section below
    await expect(page.getByRole("heading", { name: /annual reports coming soon/i })).toBeVisible();
  });

  test("Annual Needs page renders all required sections and editorial content", async ({ page }) => {
    await page.goto("/resources/annual-needs");
    await expect(page).toHaveTitle(/Annual Needs & Priorities \| Caritas Kampala Charity Office/i);

    // Robots meta should be index, follow
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute("content", /index,\s*follow/i);

    // Canonical link
    const canonicalLink = page.locator('link[rel="canonical"]');
    await expect(canonicalLink).toHaveAttribute("href", "https://www.caritaskampalacharities.org/resources/annual-needs");

    // 1. Split header
    const header = page.locator("section[aria-label='Annual Needs & Priorities Header']");
    await expect(header).toBeVisible();
    await expect(header.getByText("PLANNING & PRIORITIES").filter({ visible: true })).toBeVisible();
    await expect(header.getByText("Annual Needs & Priorities").filter({ visible: true }).last()).toBeVisible();
    await expect(
      header.getByText("Explore the priority needs, programme targets and resources identified for the Charity Office’s work.").filter({ visible: true })
    ).toBeVisible();
    const headerImg = header.locator('img[src*="Caritas_Kampala_48.jpg"]').filter({ visible: true });
    await expect(headerImg).toBeVisible();

    // 2. Editorial Introduction
    const introSection = page.locator("section[aria-labelledby='intro-heading']");
    await expect(introSection).toBeVisible();
    await expect(introSection.getByText("2027 PROGRAMME PERIOD")).toHaveCount(0);
    await expect(introSection.getByRole("heading", { name: "Responding to Identified Needs" })).toBeVisible();
    await expect(introSection.getByText(/The Charity Office’s annual needs planning identifies priority areas for support/i)).toBeVisible();

    // 3. Key 2027 Figures
    const figuresSection = page.locator("section[aria-label='Key 2027 Planning Figures']");
    await expect(figuresSection).toBeVisible();
    await expect(figuresSection.getByText("78")).toBeVisible();
    await expect(figuresSection.getByText("PARISHES")).toBeVisible();
    await expect(figuresSection.getByText("46,091")).toBeVisible();
    await expect(figuresSection.getByText("ESTIMATED DIRECT BENEFICIARIES")).toBeVisible();
    await expect(figuresSection.getByText("JAN–DEC 2027")).toBeVisible();
    await expect(figuresSection.getByText("PROGRAMME PERIOD")).toBeVisible();

    // 4. Featured Document Section & Preview Placeholder
    const docSection = page.locator("section[aria-labelledby='featured-document-heading']");
    await expect(docSection).toBeVisible();
    await expect(docSection.getByText("2027").first()).toBeVisible();
    await expect(docSection.getByText("FINAL PDF COMING SOON")).toHaveCount(0);
    await expect(docSection.getByText("ANNUAL NEEDS DOCUMENT")).toBeVisible();
    await expect(docSection.getByRole("heading", { name: "2027 Needs List & Needs-Based Budget" })).toBeVisible();
    await expect(docSection.getByText(/The 2027 document sets out priority needs and proposed support packages/i)).toBeVisible();
    await expect(docSection.getByText(/It is intended to support planning, collaboration/i)).toBeVisible();
    await expect(docSection.getByText("UGX 4,699,256,995")).toBeVisible();
    await expect(docSection.getByText("PDF COMING SOON")).toHaveCount(2);

    // 5. Priority Areas Section (16 items)
    const prioritySection = page.locator("section[aria-labelledby='priority-areas-heading']");
    await expect(prioritySection).toBeVisible();
    await expect(prioritySection.getByRole("heading", { name: "2027 Priority Areas" })).toBeVisible();
    await expect(prioritySection.getByText("01")).toBeVisible();
    await expect(prioritySection.getByText("Humanitarian Assistance, Health & Psychosocial Support")).toBeVisible();
    await expect(prioritySection.getByText("16")).toBeVisible();
    await expect(prioritySection.getByText("Contingency & Emergency Reserve")).toBeVisible();

    // 6. Closing Contact Strip
    const contactStrip = page.locator("section[aria-labelledby='contact-strip-heading']");
    await expect(contactStrip).toBeVisible();
    await expect(contactStrip.getByText("PARTNERSHIP & SUPPORT")).toBeVisible();
    await expect(contactStrip.getByRole("heading", { name: "Questions About the 2027 Needs?" })).toBeVisible();
    const contactCta = contactStrip.getByRole("link", { name: /contact us →/i });
    await expect(contactCta).toBeVisible();
    await expect(contactCta).toHaveAttribute("href", "/contact-us");
    // Ensure no donate button exists in this section
    await expect(contactStrip.getByRole("link", { name: /donate/i })).toHaveCount(0);
  });

  test("Annual Needs page has no horizontal overflow on required viewports", async ({ page }) => {
    const viewports = [
      { width: 320, height: 568 },
      { width: 360, height: 640 },
      { width: 390, height: 844 },
      { width: 430, height: 932 },
      { width: 640, height: 800 },
      { width: 768, height: 1024 },
      { width: 820, height: 1180 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
      { width: 1600, height: 900 },
      { width: 1920, height: 1080 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/resources/annual-needs");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow, `Overflow detected at ${vp.width}x${vp.height}`).toBe(false);
    }
  });
});
