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
  title: "Caritas Kampala Charity Office | Kampala, Wakiso & Butambala",
  description:
    "The Charity Office of Caritas Kampala provides practical support to vulnerable individuals, families and communities across Kampala, Wakiso and Butambala, Uganda.",
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
