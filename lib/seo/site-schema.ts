import { siteConfig } from "@/lib/site-config";

export const NGO_ORGANIZATION_ID = "https://www.caritaskampalacharities.org/#organization";
export const WEBSITE_ID = "https://www.caritaskampalacharities.org/#website";

export function getOrganizationSchema() {
  return {
    "@type": "NGO",
    "@id": NGO_ORGANIZATION_ID,
    "name": "Caritas Kampala Charity Office",
    "alternateName": ["Charity Office of Caritas Kampala", "Caritas Kampala Charity Office"],
    "url": siteConfig.domain,
    "logo": `${siteConfig.domain}/images/logos/Caritas_Kampala_logo.png`,
    "email": siteConfig.office.email,
    "telephone": siteConfig.office.phones.main,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.office.phones.main,
        "contactType": "customer service",
        "areaServed": "UG",
        "availableLanguage": ["English", "Luganda"]
      },
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.office.phones.appeal,
        "contactType": "donations",
        "areaServed": "UG"
      },
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.office.phones.appealAlternate,
        "contactType": "donations",
        "areaServed": "UG"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://www.caritaskampala.org/#organization",
      "name": "Caritas Kampala",
      "url": "https://www.caritaskampala.org/"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Old Ggaba Road, Nsambya (next to the American Embassy)",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "location": {
      "@type": "Place",
      "name": "Caritas Kampala Charity Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Ggaba Road, Nsambya (next to the American Embassy)",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.office.coordinates.latitude,
        "longitude": siteConfig.office.coordinates.longitude
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kampala"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wakiso"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mpigi"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61592649493991",
      "https://www.instagram.com/charityofficecaritas",
      "https://www.linkedin.com/in/charity-office-caritas-kampala-318713428",
      "https://www.youtube.com/@charityofficecaritaskampala",
      "https://x.com/charityoffmm"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": siteConfig.domain,
    "name": "Caritas Kampala Charity Office",
    "publisher": {
      "@id": NGO_ORGANIZATION_ID
    },
    "inLanguage": "en-UG"
  };
}

export function getRootGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebSiteSchema()]
  };
}
