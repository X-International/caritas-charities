import { siteConfig } from "@/lib/site-config";
import { NGO_ORGANIZATION_ID } from "./site-schema";

export interface NewsArticleSchemaOptions {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
}

export function getNewsArticleSchema({
  title,
  description,
  slug,
  image,
  datePublished,
}: NewsArticleSchemaOptions) {
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.domain}${image.startsWith("/") ? image : `/${image}`}`;

  const canonicalUrl = `${siteConfig.domain}/resources/news/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": [imageUrl],
    "datePublished": datePublished,
    "inLanguage": "en-UG",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "author": {
      "@type": "Organization",
      "@id": NGO_ORGANIZATION_ID,
      "name": "Caritas Kampala Charity Office",
      "url": siteConfig.domain
    },
    "publisher": {
      "@type": "NGO",
      "@id": NGO_ORGANIZATION_ID,
      "name": "Caritas Kampala Charity Office",
      "url": siteConfig.domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.domain}/images/logos/Caritas_Kampala_logo.png`
      }
    }
  };
}

export interface VideoObjectOptions {
  name: string;
  description: string;
  videoId: string;
  uploadDate?: string;
}

export function getVideoObjectSchema({
  name,
  description,
  videoId,
  uploadDate = "2025-11-14",
}: VideoObjectOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    "uploadDate": uploadDate,
    "embedUrl": `https://www.youtube-nocookie.com/embed/${videoId}`,
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "inLanguage": "en-UG",
    "publisher": {
      "@type": "NGO",
      "@id": NGO_ORGANIZATION_ID,
      "name": "Caritas Kampala Charity Office"
    }
  };
}

export interface EventSchemaOptions {
  title: string;
  description: string;
  dateStr: string;
  timeString?: string;
  location: string;
  image?: string;
  url?: string;
}

export function getEventSchema({
  title,
  description,
  dateStr,
  location,
  image,
  url = `${siteConfig.domain}/resources/events`,
}: EventSchemaOptions) {
  const imageUrl = image
    ? (image.startsWith("http") ? image : `${siteConfig.domain}${image.startsWith("/") ? image : `/${image}`}`)
    : `${siteConfig.domain}/images/logos/Caritas_Kampala_logo.png`;

  // Standardize ISO 8601 date in Kampala time (UTC+3)
  const isoStartDate = `${dateStr}T09:00:00+03:00`;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": title,
    "description": description,
    "startDate": isoStartDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": location,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Ggaba Road, Nsambya",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    },
    "image": [imageUrl],
    "url": url,
    "organizer": {
      "@type": "NGO",
      "@id": NGO_ORGANIZATION_ID,
      "name": "Caritas Kampala Charity Office",
      "url": siteConfig.domain
    }
  };
}
