import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import OtherWaysToSupport from "@/components/OtherWaysToSupport";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Donate | Caritas Kampala Charities Office",
  description:
    "Support families across Kampala, Wakiso and Mpigi. Give online, by bank transfer, or Mobile Money to the Charities Office of Caritas Kampala.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Donate" }
          ]}
          eyebrow="SUPPORT THE WORK"
          title="Donate"
          description="Your gift supports practical care for vulnerable individuals, families, and communities across the Kampala Archdiocese."
          image="/images/Event 04/Caritas_Kampala_18.jpg"
          imageAlt="Caritas Kampala community support and care"
        />

        <OtherWaysToSupport />
      </main>

      <Footer />
    </div>
  );
}
