import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "Our Programmes | Caritas Kampala Charities Office",
  description:
    "Explore the practical programmes supporting vulnerable people and communities across the Archdiocese of Kampala.",
  path: "/our-programmes",
});

const programmes = [
  {
    number: "01",
    id: "emergency-disaster-response",
    title: "Emergency & Disaster Response",
    desc: "Provides emergency relief, preparedness, recovery support, and practical assistance to people and communities affected by disasters, displacement, and other emergencies.",
  },
  {
    number: "02",
    id: "support-for-older-persons",
    title: "Support for Older Persons",
    desc: "Provides visits, essential supplies, health and wellbeing support, and practical care for older people who may be living with hardship, isolation, or limited family support.",
  },
  {
    number: "03",
    id: "family-child-support",
    title: "Family & Child Support",
    desc: "Supports vulnerable children and families through practical assistance, education support, safeguarding, psychosocial care, and referrals to appropriate services.",
  },
  {
    number: "04",
    id: "refugee-asylum-seeker-support",
    title: "Refugee & Asylum Seeker Support",
    desc: "Provides practical assistance, referrals, and other forms of support to refugees and asylum seekers as they navigate displacement and rebuild stability in their lives.",
  },
  {
    number: "05",
    id: "disability-special-needs-support",
    title: "Disability & Special Needs Support",
    desc: "Works with people with disabilities and partner institutions to support accessibility, inclusion, care, skills development, advocacy, and greater participation in community life.",
  },
  {
    number: "06",
    id: "livelihoods-poverty-reduction",
    title: "Livelihoods & Poverty Reduction",
    desc: "Supports individuals and families to strengthen their livelihoods through skills development, income-generating activities, savings initiatives, and other practical pathways toward greater self-reliance.",
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
            { label: "Home", href: "/" },
            { label: "Our Programmes" }
          ]}
          description="Explore the practical programmes supporting vulnerable people and communities across the Archdiocese of Kampala."
        />

        {/* Intro */}
        <section className="site-container py-16 sm:py-20 text-center">
            <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
              Practical Support. Longer-Term Resilience.
            </Heading>
            <div aria-hidden className="w-16 h-px bg-[#b10017] mx-auto mt-6 mb-8 rounded" />
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our programmes respond to immediate needs while helping individuals, families, and communities build greater stability, dignity, and resilience across Kampala, Wakiso, and Mpigi.
            </p>
        </section>

        {/* Programme List */}
        <section className="site-container py-16 sm:py-20 space-y-10">
          {programmes.map((prog) => (
            <Card key={prog.number} id={prog.id} variant="content" className="flex flex-col md:flex-row gap-6 p-6 sm:p-8">
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

        <div className="site-container py-6 sm:py-8">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
