import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import SidebarCard from "@/components/SidebarCard";
import OurStoryHero from "@/components/OurStoryHero";
import VisionQuote from "@/components/VisionQuote";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Who we are | Caritas Kampala",
  description:
    "Learn about who we are at Caritas Kampala.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about-us" },
            { label: "WHO WE ARE" }
          ]} />
        </div>

        <OurStoryHero />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fdfbf9]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#b10017] mb-8 text-center lg:text-left">The Journey and Mission of Caritas Kampala</h2>
              <div className="space-y-8 text-lg text-gray-800 leading-loose">
                <p>At Caritas Kampala Charities Department, we are dedicated to alleviating poverty, promoting social justice, and fostering community solidarity within the Kampala Archdiocese. Inspired by the Gospel and Catholic Social Teaching, our work is driven by compassion and love, serving the most vulnerable, including the poor, marginalized groups, persons with disabilities, and orphans, by reaching out with care to help them live fulfilling lives.</p>
                <p>Our department responds to emergencies and disasters, providing vital assistance to affected communities to help them cope with tragedy. We strive to save lives, relieve suffering, and rebuild livelihoods and communities. We serve all people, regardless of gender, sex, religion, or ethnicity.</p>
                <p>We are committed to sustaining vital programs and services for the most needy, such as the elderly, challenged families and children, urban refugees and asylum seekers, and those living with medical and special needs. All these efforts are carried out by energizing Catholic communities and all people of good will to stand in solidarity with their brothers and sisters in the Archdiocese of Kampala.</p>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <SidebarCard />
            </aside>
          </div>
        </section>
        <VisionQuote />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
