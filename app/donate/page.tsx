import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateHero from "@/components/DonateHero";
import OtherWaysToSupport from "@/components/OtherWaysToSupport";
import DonateCalloutBanner from "@/components/DonateCalloutBanner";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "Donate & Support | Caritas Kampala",
  description:
    "Support Caritas Kampala's emergency relief campaigns, orphanages, and food security programmes.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                DONATE
              </li>
            </ol>
          </nav>
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
