import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CurrentCrises from "@/components/CurrentCrises";
import LatestUpdates from "@/components/LatestUpdates";
import HumanitarianAppeal from "@/components/HumanitarianAppeal";
import SpotlightSection from "@/components/SpotlightSection";
import WhereWeAre from "@/components/WhereWeAre";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 space-y-4">
        <HeroSlider />
        <CurrentCrises />
        <LatestUpdates />
        <HumanitarianAppeal />
        <SpotlightSection />
        <WhereWeAre />
      </main>
      <Footer />
    </div>
  );
}
