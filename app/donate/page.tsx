import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DonateHero from "@/components/DonateHero";
import OtherWaysToSupport from "@/components/OtherWaysToSupport";
import DonateCalloutBanner from "@/components/DonateCalloutBanner";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "Donate | Caritas Kampala Charities Office",
  description:
    "Support families across Kampala, Wakiso and Mpigi. Give online, by bank transfer, or Mobile Money to the Charities Office of Caritas Kampala.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "DONATE" }
          ]} />
        </div>

        <DonateHero />

        <OtherWaysToSupport />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateCalloutBanner />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
