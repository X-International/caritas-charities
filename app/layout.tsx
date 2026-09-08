import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getRootGraphSchema } from "@/lib/seo/site-schema";
import "./globals.css";

const isVercelDeployment = process.env.VERCEL === "1";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caritaskampalacharities.org"),
  title: {
    default: "Caritas Kampala Charity Office | Kampala, Wakiso & Mpigi",
    template: "%s",
  },
  description:
    "The Charity Office of Caritas Kampala provides practical support to vulnerable individuals, families and communities across Kampala, Wakiso and Mpigi, Uganda.",
  applicationName: "Caritas Kampala Charity Office",
  authors: [{ name: "Caritas Kampala Charity Office" }],
  creator: "Caritas Kampala",
  publisher: "Caritas Kampala",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    siteName: "Caritas Kampala Charity Office",
    title: "Caritas Kampala Charity Office | Kampala, Wakiso & Mpigi",
    description:
      "The Charity Office of Caritas Kampala provides practical support to vulnerable individuals, families and communities across Kampala, Wakiso and Mpigi, Uganda.",
    images: [
      {
        url: "/images/og/caritas_kampala_og_fallback.png",
        width: 1200,
        height: 630,
        alt: "Caritas Kampala Charity Office banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caritas Kampala Charity Office | Kampala, Wakiso & Mpigi",
    description:
      "The Charity Office of Caritas Kampala provides practical support to vulnerable individuals, families and communities across Kampala, Wakiso and Mpigi, Uganda.",
    images: ["/images/og/caritas_kampala_og_fallback.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getRootGraphSchema();

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
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        {isVercelDeployment && <Analytics />}
        {isVercelDeployment && <SpeedInsights />}
      </body>
    </html>
  );
}
