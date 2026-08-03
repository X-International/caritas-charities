import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import OurStoryHero from "@/components/OurStoryHero";

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
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                WHO WE ARE
              </li>
            </ol>
          </nav>
        </div>

        <OurStoryHero />

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif text-[#b10017] mb-8">The Journey and Mission of Caritas Kampala</h2>
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p>At Caritas Kampala Charities Department, we are dedicated to alleviating poverty, promoting social justice, and fostering community solidarity within the Kampala Archdiocese. Inspired by the Gospel and Catholic Social Teaching, our work is driven by compassion and love, serving the most vulnerable, including the poor, marginalized groups, persons with disabilities, and orphans, by reaching out with care to help them live fulfilling lives.</p>
              <p>Our department responds to emergencies and disasters, providing vital assistance to affected communities to help them cope with tragedy. We strive to save lives, relieve suffering, and rebuild livelihoods and communities. We serve all people, regardless of gender, sex, religion, or ethnicity.</p>
              <p>We are committed to sustaining vital programs and services for the most needy, such as the elderly, challenged families and children, urban refugees and asylum seekers, and those living with medical and special needs. All these efforts are carried out by energizing Catholic communities and all people of good will to stand in solidarity with their brothers and sisters in the Archdiocese of Kampala.</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
