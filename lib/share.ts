export type PageSharePayload = {
  url: string;
  title: string;
  description: string;
  image: string | null;
};

export const SHARE_INTRO =
  "Share the work of the Charity Office and help more people discover our mission and the difference we make.";

const FALLBACK_DESCRIPTION =
  "Share the work of the Charity Office and help more people discover our mission and the difference we make.";

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Caritas Kampala’s Charity Office | Serving Kampala, Wakiso & Mpigi",
    description: "The Charity Office of Caritas Kampala supports the poor, vulnerable and marginalized across Kampala Archdiocese. Learn about our work and donate today.",
  },
  "/our-programmes": {
    title: "Our Programmes | Caritas Kampala’s Charity Office",
    description: "Explore the programmes run by Caritas Kampala's Charity Office, supporting families, the elderly, refugees and people with disabilities across Kampala, Wakiso and Mpigi.",
  },
  "/current-appeal": {
    title: "Current Appeal: Famine in Kotido & Moroto | Caritas Kampala",
    description: "Drought has brought famine to Karamoja. Learn how to support our emergency relief drive for families in Kotido and Moroto.",
  },
  "/get-involved": {
    title: "Get Involved | Caritas Kampala’s Charity Office",
    description: "Volunteer or shop our Charity Shop. Discover the ways you can support the Charity Office's work in Kampala, Wakiso and Mpigi.",
  },
  "/get-involved/volunteer": {
    title: "Volunteer With Us | Caritas Kampala’s Charity Office",
    description: "See how you can offer your time and skills to support the Charity Office's work across Kampala Archdiocese.",
  },
  "/get-involved/charity-shop": {
    title: "Charity Shop | Caritas Kampala’s Charity Office",
    description: "Shop or donate goods to support the work of the Charity Office. Every purchase helps families across the Archdiocese.",
  },
  "/get-involved/partnerships": {
    title: "Partnerships | Caritas Kampala’s Charity Office",
    description: "Partner with us to support vulnerable communities in Kampala Archdiocese through expertise, resources, and collaboration.",
  },
  "/donate": {
    title: "Donate | Caritas Kampala’s Charity Office",
    description: "Support families across Kampala, Wakiso and Mpigi. Give online, by bank transfer, or Mobile Money to the Charity Office of Caritas Kampala.",
  },
  "/about-us": {
    title: "About Us | Caritas Kampala’s Charity Office",
    description: "Learn about the mission, vision and values of the Charity Office, part of Caritas Kampala, serving Kampala Archdiocese.",
  },
  "/about-us/our-team": {
    title: "Our Team | Caritas Kampala’s Charity Office",
    description: "Meet the leadership and team behind the Charity Office at Caritas Kampala.",
  },
  "/about-us/chaconet-partners": {
    title: "Chaconet Partners | Caritas Kampala’s Charity Office",
    description: "The Charity Office works within Chaconet, a network of nine charity homes across Kampala Archdiocese.",
  },
  "/resources": {
    title: "Resources | Caritas Kampala’s Charity Office",
    description: "Explore news, photo gallery, publications, and FAQs from the Charity Office of Caritas Kampala.",
  },
  "/resources/news": {
    title: "News & Updates | Caritas Kampala’s Charity Office",
    description: "The latest updates and stories from the work of the Charity Office across Kampala Archdiocese.",
  },
  "/resources/news/kotido-moroto-famine-relief-drive": {
    title: "Kotido & Moroto Famine Relief Drive Mobilizes Parishes | Caritas Kampala’s Charity Office",
    description: "Parishes across Kampala Archdiocese are collecting food and relief items for families facing famine in Kotido and Moroto.",
  },
  "/resources/news/charities-office-launches-new-website": {
    title: "The Charity Office Launches Its New Website | Caritas Kampala’s Charity Office",
    description: "A dedicated online home for the Charity Office, bringing together our work, programmes, network, news, and ways to get involved.",
  },
  "/resources/news/breakfast-meeting-world-day-of-poor": {
    title: "Charity Office Marks World Day of the Poor with Breakfast Meeting | Caritas Kampala’s Charity Office",
    description: "The Charity Office, under Caritas Kampala, brought together charity homes, partners, beneficiaries and members of the wider community for its first Breakfast Meeting in commemoration of the World Day of the Poor.",
  },
  "/resources/gallery": {
    title: "Gallery | Caritas Kampala’s Charity Office",
    description: "Photos from the Charity Office's programmes, events and community work across Kampala Archdiocese.",
  },
  "/resources/annual-reports": {
    title: "Annual Reports | Caritas Kampala’s Charity Office",
    description: "Annual impact reviews and financial accountability reports from the Charity Office of Caritas Kampala.",
  },
  "/resources/faqs": {
    title: "FAQs | Caritas Kampala’s Charity Office",
    description: "Answers to common questions about donation drop-offs, volunteering, and supporting the Charity Office of Caritas Kampala.",
  },
  "/contact-us": {
    title: "Contact Us | Caritas Kampala’s Charity Office",
    description: "Get in touch with the Charity Office of Caritas Kampala. Find our address, phone number, and location in Nsambya, Kampala.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Caritas Kampala’s Charity Office",
    description: "How the Charity Office collects, uses, and protects your information.",
  },
  "/terms-of-use": {
    title: "Terms of Use | Caritas Kampala’s Charity Office",
    description: "The terms governing use of this website.",
  },
};

const CANONICAL_ORIGIN = "https://www.caritaskampalacharities.org";

function metaContent(selector: string): string | null {
  return document.querySelector(selector)?.getAttribute("content")?.trim() || null;
}

function absoluteUrl(value: string): string {
  try {
    return new URL(value, CANONICAL_ORIGIN).href;
  } catch {
    return value;
  }
}

export function getCleanTitle(title: string): string {
  let cleaned = title
    .replace(/\s*\|\s*Caritas Kampala’s Charity Office/gi, "")
    .replace(/\s*\|\s*Caritas Kampala/gi, "")
    .replace(/^Caritas Kampala’s Charity Office\s*\|\s*/gi, "")
    .trim();

  return cleaned || "Caritas Kampala’s Charity Office";
}

function resolveCanonicalUrl(pathname: string): string {
  if (typeof document !== "undefined") {
    const canonicalHref = document.querySelector('link[rel="canonical"]')?.getAttribute("href")?.trim();
    if (canonicalHref) {
      try {
        return new URL(canonicalHref, CANONICAL_ORIGIN).href;
      } catch {
        // Fall back to origin + pathname below
      }
    }
    const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute("content")?.trim();
    if (ogUrl) {
      try {
        return new URL(ogUrl, CANONICAL_ORIGIN).href;
      } catch {
        // Fall back to origin + pathname below
      }
    }
  }
  const cleanPath = pathname && pathname !== "" ? (pathname.startsWith("/") ? pathname : `/${pathname}`) : "/";
  return `${CANONICAL_ORIGIN}${cleanPath}`;
}

/** Reads the page the visitor is on so sharing stays correct on every current and future route. */
export function getPageSharePayload(): PageSharePayload {
  if (typeof window === "undefined") {
    return {
      url: `${CANONICAL_ORIGIN}/`,
      title: "Caritas Kampala’s Charity Office",
      description: FALLBACK_DESCRIPTION,
      image: null,
    };
  }

  const pathname = window.location.pathname;
  const routeFallback = ROUTE_META[pathname];

  const metaTitle = metaContent('meta[property="og:title"]');
  const docTitle = document.title.trim();
  const rawTitle = metaTitle || (docTitle && docTitle !== "Caritas Kampala" ? docTitle : null);

  const title = rawTitle || routeFallback?.title || "Caritas Kampala’s Charity Office";

  const metaDesc =
    metaContent('meta[property="og:description"]') ||
    metaContent('meta[name="description"]');

  const description = metaDesc || routeFallback?.description || FALLBACK_DESCRIPTION;

  const imageRaw = metaContent('meta[property="og:image"]');

  return {
    url: resolveCanonicalUrl(pathname),
    title,
    description,
    image: imageRaw ? absoluteUrl(imageRaw) : null,
  };
}

export function buildWhatsAppShareText(payload: PageSharePayload): string {
  const cleanTitle = getCleanTitle(payload.title);
  return `Discover the work of the Charity Office of Caritas Kampala: ${cleanTitle}\n${payload.url}`;
}

export function buildEmailShare(payload: PageSharePayload): { subject: string; body: string } {
  const cleanTitle = getCleanTitle(payload.title);
  const subject = `Discover: ${cleanTitle} | Caritas Kampala’s Charity Office`;
  const body = `I thought you might be interested in this page from the Charity Office of Caritas Kampala:\n\n${payload.title}\n${payload.url}`;
  return { subject, body };
}

export function buildXShareText(payload: PageSharePayload): string {
  const cleanTitle = getCleanTitle(payload.title);
  return `Discover the work of the Charity Office of Caritas Kampala: ${cleanTitle}`;
}

export type SharePlatform = "whatsapp" | "facebook" | "email" | "linkedin" | "x" | "copy" | "native";

export function getShareDestinationUrl(platform: Exclude<SharePlatform, "copy" | "native">, payload: PageSharePayload): string {
  const encodedUrl = encodeURIComponent(payload.url);

  switch (platform) {
    case "whatsapp":
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(buildWhatsAppShareText(payload))}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "x":
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(buildXShareText(payload))}&url=${encodedUrl}`;
    case "email": {
      const { subject, body } = buildEmailShare(payload);
      return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }
}

export function canUseNativeShare(): boolean {
  return typeof navigator !== "undefined" && typeof navigator.share === "function";
}

export async function copyPageUrl(url: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    try {
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      return ok;
    } catch {
      return false;
    }
  }
}

export async function nativeSharePage(payload: PageSharePayload): Promise<"shared" | "cancelled" | "unavailable"> {
  if (!canUseNativeShare()) return "unavailable";

  try {
    await navigator.share({
      title: payload.title,
      text: `${SHARE_INTRO}\n${payload.title}`,
      url: payload.url,
    });
    return "shared";
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return "cancelled";
    }
    return "unavailable";
  }
}
