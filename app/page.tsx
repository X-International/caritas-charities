import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CurrentCrises from "@/components/CurrentCrises";
import HumanitarianAppeal from "@/components/HumanitarianAppeal";
import CharityShopSection from "@/components/CharityShopSection";
import WhereWeServe from "@/components/WhereWeServe";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Caritas Kampala Charities Office | Serving Kampala, Wakiso & Mpigi",
  description:
    "The Charities Office of Caritas Kampala supports the poor, vulnerable and marginalized across Kampala Archdiocese. Learn about our work and donate today.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main id="main-content" className="flex-1 tab-index-[-1] focus:outline-none">
        <HeroSlider />
        <CurrentCrises />
        <HumanitarianAppeal />
        <CharityShopSection />
        <WhereWeServe />
      </main>
      <Footer />
    </div>
  );
}
