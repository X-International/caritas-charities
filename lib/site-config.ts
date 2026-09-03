/**
 * Public site configuration is kept in one module so contact and donation
 * details do not drift between pages. Secrets and provider credentials do
 * not belong here; they remain server/environment configuration.
 */
export const siteConfig = {
  domain: "https://www.caritaskampalacharities.org",
  office: {
    name: "Caritas Kampala Main Office",
    address: ["Old Ggaba Road, Nsambya", "(next to the American Embassy)", "Kampala, Uganda"],
    phones: {
      appeal: "+256 762 506 906",
      appealAlternate: "+256 792 176 443",
      main: "+256 392 176 443",
    },
    email: "charityofficecaritaskampala@gmail.com",
    coordinates: { latitude: 0.299230886593831 as number, longitude: 32.593433862503 as number },
  },
  giving: {
    bank: {
      name: "Centenary Bank",
      branch: "Kabalagala Branch",
      accountNumber: "3100127591",
      accountName: "Caritas Kampala",
    },
    onlineStatus: "contact-required" as const,
  },
} as const;
