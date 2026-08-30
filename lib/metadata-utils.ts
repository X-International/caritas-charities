import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  robots?: Metadata["robots"];
};

export const DEFAULT_OG_IMAGE = "/images/current%20appeal/Caritas_Kampala_Current_Appeal.jpg";

/**
 * Helper to build complete, consistent, robust page metadata for Next.js App Router.
 * Automatically generates title, description, canonical URL, OpenGraph, and Twitter tags
 * using the confirmed production domain.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  robots = { index: true, follow: true },
}: BuildMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.domain}${canonicalPath}`;

  const ogImageObj = {
    url: image.startsWith("http") ? image : `${siteConfig.domain}${image.startsWith("/") ? image : `/${image}`}`,
    width: 1280,
    height: 932,
    alt: title,
  };

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots,
    openGraph: {
      type,
      locale: "en_UG",
      url: canonicalUrl,
      siteName: "Caritas Kampala’s Charity Office",
      title,
      description,
      images: [ogImageObj],
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageObj.url],
    },
  };
}
