import { siteConfig } from "@/lib/site-config";

export interface BreadcrumbItemInput {
  label: string;
  href?: string;
}

export function getBreadcrumbListSchema(breadcrumbs: BreadcrumbItemInput[]) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  // Filter out intermediate non-link grouping entries (e.g., Resources, Get Involved with href="#")
  const validItems = breadcrumbs.filter((item, index) => {
    const isLast = index === breadcrumbs.length - 1;
    const hasValidHref = Boolean(item.href && item.href !== "#" && item.href.trim() !== "");
    return hasValidHref || isLast;
  });

  if (validItems.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": validItems.map((item, index) => {
      const position = index + 1;
      const hasValidHref = Boolean(item.href && item.href !== "#" && item.href.trim() !== "");
      
      const listItem: {
        "@type": "ListItem";
        position: number;
        name: string;
        item?: string;
      } = {
        "@type": "ListItem",
        position,
        name: item.label,
      };

      if (hasValidHref) {
        const canonicalPath = item.href!.startsWith("/") ? item.href! : `/${item.href!}`;
        listItem.item = `${siteConfig.domain}${canonicalPath}`;
      }

      return listItem;
    }),
  };
}
