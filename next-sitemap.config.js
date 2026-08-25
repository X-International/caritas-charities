/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.caritaskampalacharities.org/",
  generateRobotsTxt: true,
  autoLastmod: false,
  changefreq: "weekly",
  exclude: ["/api/*", "/resources", "/_not-found", "/apple-icon.png", "/icon.png"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_not-found"],
      },
    ],
  },
};

module.exports = config;
