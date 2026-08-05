/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.caritaskampalacharities.me/",
  generateRobotsTxt: true,
  autoLastmod: false,
  changefreq: "weekly",
  exclude: ["/api/*", "/apple-icon.png", "/icon.png"],
};

module.exports = config;
