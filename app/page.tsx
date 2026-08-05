import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CurrentCrises from "@/components/CurrentCrises";
import HumanitarianAppeal from "@/components/HumanitarianAppeal";
import WhereWeServe from "@/components/WhereWeServe";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caritas Kampala | Ending poverty, promoting justice, restoring dignity",
  description:
    "Caritas Kampala's Charities Department serves the Archdiocese through compassion, dignity, and practical support for those who need it most.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main id="main-content" className="flex-1 space-y-4 tab-index-[-1] focus:outline-none">
        <HeroSlider />
        <CurrentCrises />
        <HumanitarianAppeal />
        <WhereWeServe />
      </main>
      <Footer />
    </div>
  );
}
