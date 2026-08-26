import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const isVercelDeployment = process.env.VERCEL === "1";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caritaskampalacharities.org"),
  title: {
    default: "Caritas Kampala Charities Office | Serving Kampala, Wakiso & Mpigi",
    // Route metadata already uses the public-facing "| Caritas Kampala" suffix.
    template: "%s",
  },
  description:
    "The Charities Office of Caritas Kampala supports the poor, vulnerable and marginalized across the Kampala Archdiocese. Learn about our work and donate today.",
  applicationName: "Caritas Kampala",
  authors: [{ name: "Caritas Kampala" }],
  creator: "Caritas Kampala",
  publisher: "Caritas Kampala",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    siteName: "Caritas Kampala Charities Office",
    title: "Caritas Kampala Charities Office | Serving Kampala, Wakiso & Mpigi",
    description:
      "The Charities Office of Caritas Kampala supports the poor, vulnerable and marginalized across the Kampala Archdiocese. Learn about our work and donate today.",
    images: [
      {
        url: "/images/current%20appeal/Caritas_Kampala_Current_Appeal.jpg",
        width: 1280,
        height: 932,
        alt: "Caritas Kampala humanitarian appeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caritas Kampala Charities Office | Serving Kampala, Wakiso & Mpigi",
    description:
      "The Charities Office of Caritas Kampala supports the poor, vulnerable and marginalized across the Kampala Archdiocese. Learn about our work and donate today.",
    images: ["/images/current%20appeal/Caritas_Kampala_Current_Appeal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicons/android-chrome-512x512.png?v=2", sizes: "512x512", type: "image/png" },
      { url: "/favicons/android-chrome-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicons/android-chrome-512x512.png?v=2",
    apple: [
      { url: "/favicons/android-chrome-512x512.png?v=2", sizes: "512x512", type: "image/png" },
      { url: "/favicons/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicons/site.webmanifest?v=2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://www.caritaskampalacharities.org/#organization",
      "name": "Caritas Kampala Charities Office",
      "alternateName": "Caritas Kampala",
      "url": "https://www.caritaskampalacharities.org/",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Caritas Kampala",
        "url": "https://www.caritaskampala.org/"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Ggaba Road, Nsambya (next to the American Embassy)",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      },
      "telephone": "+256 762 506 906"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.caritaskampalacharities.org/#website",
      "url": "https://www.caritaskampalacharities.org/",
      "name": "Caritas Kampala Charities Office",
      "publisher": {
        "@id": "https://www.caritaskampalacharities.org/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        {children}
        {isVercelDeployment && <Analytics />}
        {isVercelDeployment && <SpeedInsights />}
      </body>
    </html>
  );
}
