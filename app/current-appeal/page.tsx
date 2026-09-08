import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentAppealClient from "./CurrentAppealClient";
import { buildPageMetadata } from "@/lib/metadata-utils";
import { getVideoObjectSchema } from "@/lib/seo/schemas";

export const metadata = buildPageMetadata({
  title: "Kotido & Moroto Famine Appeal | Caritas Kampala Charity Office",
  description:
    "Read about the Caritas Kampala emergency response supporting families affected by severe food insecurity in Kotido and Moroto, Karamoja.",
  path: "/current-appeal",
  image: "/images/current%20appeal/Caritas_Kampala_Current_Appeal_details.jpg",
});

export default function CurrentAppealPage() {
  const videoSchemas = [
    getVideoObjectSchema({
      videoId: "VzuIYOEmBwc",
      name: "7 August 2026 Emergency Famine Relief Launch for Kotido & Moroto",
      description:
        "A small act of kindness can become a meal, hope, and a reason for someone to smile. Caritas Kampala Archdiocese is organizing emergency relief for Karamoja.",
      uploadDate: "2026-08-07",
    }),
    getVideoObjectSchema({
      videoId: "7OwjO4ZO3v4",
      name: "Flagging Off Food Consignment for Karamoja Relief",
      description:
        "Flagging off the second consignment of emergency food supplies and aid from Kampala for Kotido and Moroto families in Karamoja.",
      uploadDate: "2026-08-07",
    }),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <CurrentAppealClient />
      </main>

      <Footer />
    </div>
  );
}
