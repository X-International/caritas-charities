import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caritas - Ending poverty, promoting justice and restoring dignity",
  description:
    "Caritas is a global confederation of over 160 Catholic organisations working in more than 200 countries. Together, we serve the poor and vulnerable, promote justice and peace.",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
