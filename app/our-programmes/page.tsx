import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Our Programmes | Caritas Kampala Charities Office",
  description:
    "Explore the programmes of the Caritas Kampala Charities Office, supporting families, children, elderly people, refugees, people with disabilities, and communities facing poverty across the Kampala Archdiocese.",
  path: "/our-programmes",
});

const programmes = [
  {
    number: "01",
    title: "Emergency & Disaster Response",
    desc: "Provides immediate assistance to families and communities affected by disasters, fires, and other emergencies, including emergency supplies, medical assistance, rescue and evacuation support, and other essential services. The programme also promotes Anticipatory Action through early warning systems, risk assessment, and community preparedness to help communities reduce vulnerability and build resilience before crises occur.",
  },
  {
    number: "02",
    title: "Support for the Elderly",
    desc: "Provides continuous and meaningful support to elderly members of the community through visits, companionship, essential supplies, health and wellness activities, medical check-ups, health education, and social activities that promote dignity, inclusion, and quality of life.",
  },
  {
    number: "03",
    title: "Family & Child Support",
    desc: "Supports families and children facing hardship through assistance with food, education, shelter, medical care, and psychosocial support while promoting long-term resilience and self-sufficiency. The Charities Office also supports child safeguarding through protection awareness, safe reporting mechanisms, staff and volunteer screening, and psychosocial support for vulnerable children.",
  },
  {
    number: "04",
    title: "Refugee & Asylum Seeker Support",
    desc: "Provides practical assistance to urban refugees and asylum seekers, including support with safe housing, food, medical care, vocational training, skills development, legal assistance, and protection services while promoting dignity, safety, and long-term resilience.",
  },
  {
    number: "05",
    title: "Disability & Special Needs Support",
    desc: "In collaboration with Chaconet partners, provides personalized care, therapeutic services, accessible facilities, skills development, advocacy, emotional support, community integration, and awareness activities that promote independence, dignity, inclusion, and a better quality of life.",
  },
  {
    number: "06",
    title: "Poverty Alleviation & Livelihoods",
    desc: "Works with individuals and families to develop sustainable livelihood opportunities through skills training, microfinance initiatives, income-generating activities, and community empowerment programmes that promote economic independence and help break the cycle of poverty.",
  },
];

export default function OurProgrammesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Our Programmes"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "OUR PROGRAMMES" }
          ]}
          description="We serve with compassion through programmes that respond to need, promote dignity, and help communities build a better future."
        />

        {/* Intro */}
        <section className="site-container py-16 sm:py-20 text-center">
            <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
              Making a Difference in Our Community
            </Heading>
            <div aria-hidden className="w-16 h-px bg-[#b10017] mx-auto mt-6 mb-8 rounded" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Through a range of impactful programmes, Caritas Kampala Charities Office works alongside communities to respond to needs, promote dignity, and build a better future for all.
            </p>
        </section>

        {/* Programme List */}
        <section className="site-container py-16 sm:py-20 space-y-10">
          {programmes.map((prog) => (
            <Card key={prog.number} variant="content" className="flex flex-col md:flex-row gap-6 p-6 sm:p-8">
              {/* Image */}
              <div className="w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Programme Image</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <Heading level={3} className="text-lg font-bold text-[#b10017] font-serif">
                  {prog.title}
                </Heading>
                <p className="text-gray-700 leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            </Card>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#b10017] text-white py-16 sm:py-20">
          <div className="site-container text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Together, We Can Make a Difference
            </Heading>
            <p className="text-lg text-white/90 leading-relaxed">
              Your support helps us reach people facing hardship and build stronger, more resilient communities across the Kampala Archdiocese.
            </p>
            <div className="pt-4">
              <Button href="/donate" variant="secondary" size="lg">
                SUPPORT OUR WORK
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
