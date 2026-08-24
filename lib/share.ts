export type PageSharePayload = {
  url: string;
  title: string;
  description: string;
  image: string | null;
};

export const SHARE_INTRO =
  "Discover the work of Caritas Kampala Charities Office:";

const FALLBACK_DESCRIPTION =
  "Help more people discover the work of the Caritas Kampala Charities Office. Share this page to help connect others with our mission and work.";

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Caritas Kampala | Charities Office",
    description: "Serving communities through compassion, emergency relief, sustainable agriculture, education, and practical support.",
  },
  "/our-programmes": {
    title: "Our Programmes | Caritas Kampala - Charities Office",
    description: "The work of the Charities Department across Kampala, Wakiso, and Mpigi.",
  },
  "/current-appeal": {
    title: "Current Appeal | Caritas Kampala - Charities Office",
    description: "Active emergency and humanitarian appeal highlights supporting families and communities in need.",
  },
  "/get-involved": {
    title: "Get Involved | Caritas Kampala - Charities Office",
    description: "Discover ways to volunteer, partner, and support our community empowerment programs.",
  },
  "/donate": {
    title: "Donate & Support | Caritas Kampala - Charities Office",
    description: "Verified guidance on giving, bank details, and donor options to support our mission.",
  },
  "/about-us": {
    title: "About Us | Caritas Kampala - Charities Office",
    description: "Learn about the mission, history, and team restoring dignity and hope across Kampala.",
  },
  "/about-us/our-story": {
    title: "Our Story | Caritas Kampala - Charities Office",
    description: "Real stories of change, community resilience, and social-pastoral ministry.",
  },
  "/resources/news": {
    title: "News & Articles | Caritas Kampala - Charities Office",
    description: "Latest news, field updates, and articles from Caritas Kampala.",
  },
  "/resources/gallery": {
    title: "Photo Gallery | Caritas Kampala - Charities Office",
    description: "Photo gallery highlighting field interventions and community projects.",
  },
  "/contact-us": {
    title: "Contact Us | Caritas Kampala - Charities Office",
    description: "Get in touch with the Caritas Kampala Charities Office team.",
  },
};

function metaContent(selector: string): string | null {
  return document.querySelector(selector)?.getAttribute("content")?.trim() || null;
}

function absoluteUrl(value: string): string {
  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return value;
  }
}

/** Reads the page the visitor is on so sharing stays correct on every current and future route. */
export function getPageSharePayload(): PageSharePayload {
  if (typeof window === "undefined") {
    return {
      url: "https://www.caritaskampalacharities.org/",
      title: "Caritas Kampala - Charities Office",
      description: FALLBACK_DESCRIPTION,
      image: null,
    };
  }

  const pathname = window.location.pathname;
  const routeFallback = ROUTE_META[pathname];

  const metaTitle = metaContent('meta[property="og:title"]');
  const docTitle = document.title.trim();
  const rawTitle = metaTitle || (docTitle && docTitle !== "Caritas Kampala" ? docTitle : null);

  const title = rawTitle || routeFallback?.title || "Caritas Kampala | Charities Office";

  const metaDesc =
    metaContent('meta[property="og:description"]') ||
    metaContent('meta[name="description"]');

  const description = metaDesc || routeFallback?.description || FALLBACK_DESCRIPTION;

  const imageRaw = metaContent('meta[property="og:image"]');

  return {
    url: window.location.href,
    title,
    description,
    image: imageRaw ? absoluteUrl(imageRaw) : null,
  };
}

export function buildWhatsAppShareText(payload: PageSharePayload): string {
  return `Discover the work of Caritas Kampala Charities Department:\n${payload.title}\n${payload.url}`;
}

export function buildEmailShare(payload: PageSharePayload): { subject: string; body: string } {
  const subject = "Caritas Kampala Charities Department";
  const body = `I thought you might find this page from the Caritas Kampala Charities Department helpful:\n\n${payload.title}\n\n${payload.url}\n\nLearn more about the work of Caritas Kampala Charities Department.`;
  return { subject, body };
}

export function buildXShareText(payload: PageSharePayload): string {
  return `${payload.title}\n${payload.url}`;
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
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(buildXShareText(payload))}`;
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
