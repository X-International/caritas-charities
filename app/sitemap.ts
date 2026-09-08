import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { newsArticles } from "@/lib/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about-us`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about-us/chaconet-partners`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about-us/our-team`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/appeals`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact-us`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/current-appeal`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/donate`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-involved/charity-shop`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-involved/partnerships`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-involved/volunteer`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/our-programmes`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/resources/events`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/resources/faqs`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/resources/gallery`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/resources/news`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/resources/success-stories`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms-of-use`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/resources/news/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    ...(article.date ? { lastModified: new Date(article.date) } : {}),
  }));

  return [...staticRoutes, ...newsRoutes];
}
