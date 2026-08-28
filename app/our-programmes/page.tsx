import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { ArrowUpRight } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Our Programmes | Caritas Kampala Charities Office",
  description:
    "Explore the practical programmes supporting vulnerable people and communities across the Archdiocese of Kampala.",
  path: "/our-programmes",
});

interface Programme {
  id: string;
  title: string;
  category: string;
  description: string;
  serves: string;
  locations: string[];
  image: string;
}

const programmes: Programme[] = [
  {
    id: "emergency-disaster-response",
    title: "Emergency & Disaster Response",
    category: "RELIEF & CRISIS",
    description: "Provides emergency relief, preparedness, recovery support, and practical assistance to people and communities affected by disasters, displacement, and other emergencies.",
    serves: "FAMILIES & COMMUNITIES AFFECTED BY EMERGENCIES",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_75.jpg",
  },
  {
    id: "support-for-older-persons",
    title: "Support for Older Persons",
    category: "SENIOR CARE",
    description: "Provides visits, essential supplies, health and wellbeing support, and practical care for older people who may be living with hardship, isolation, or limited family support.",
    serves: "ELDERLY PEOPLE ACROSS THE ARCHDIOCESE",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_84.jpg",
  },
  {
    id: "family-child-support",
    title: "Family & Child Support",
    category: "HOUSEHOLD CARE",
    description: "Supports vulnerable children and families through practical assistance, education support, safeguarding, psychosocial care, and referrals to appropriate services.",
    serves: "FAMILIES & CHILDREN FACING HARDSHIP",
    locations: ["ARCHDIOCESE"],
    image: "/images/Event 01/Caritas_Kampala_03.jpg",
  },
  {
    id: "refugee-asylum-seeker-support",
    title: "Refugee & Asylum Seeker Support",
    category: "HUMANITARIAN AID",
    description: "Provides practical assistance, referrals, and other forms of support to refugees and asylum seekers as they navigate displacement and rebuild stability in their lives.",
    serves: "URBAN REFUGEES & ASYLUM SEEKERS",
    locations: ["KAMPALA"],
    image: "/images/Event 02/Caritas_Kampala_05.jpg",
  },
  {
    id: "disability-special-needs-support",
    title: "Disability & Special Needs Support",
    category: "INCLUSION & CARE",
    description: "Works with people with disabilities and partner institutions to support accessibility, inclusion, care, skills development, advocacy, and greater participation in community life.",
    serves: "PEOPLE WITH DISABILITIES & SPECIAL NEEDS",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_87.jpg",
  },
  {
    id: "livelihoods-poverty-reduction",
    title: "Livelihoods & Poverty Reduction",
    category: "ECONOMIC EMPOWERMENT",
    description: "Supports individuals and families to strengthen their livelihoods through skills development, income-generating activities, savings initiatives, and other practical pathways toward greater self-reliance.",
    serves: "INDIVIDUALS & FAMILIES FACING POVERTY",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_71.jpg",
  },
];

/* ── Programme Card (Matches WhiteCard design from WhereWeServe) ── */
function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Card
      as="article"
      variant="content"
      aria-labelledby={`programme-title-${programme.id}`}
      className="group relative flex flex-col justify-between overflow-hidden h-full min-h-[300px] sm:min-h-[360px] p-5 sm:p-7 md:p-8 focus-within:ring-2 focus-within:ring-caritas-red focus-within:ring-offset-2"
    >
      {/* DEFAULT UNHOVERED STATE */}
      <div className="flex flex-col justify-between h-full w-full z-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest gap-2">
          <span className="truncate">{programme.category}</span>
        </div>

        <div className="my-3 sm:mt-4 sm:mb-5 flex-1">
          <Heading
            level={3}
            variant="subsection"
            color="red"
            id={`programme-title-${programme.id}`}
            className="mb-2.5 sm:mb-3.5 leading-snug"
          >
            {programme.title}
          </Heading>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-sans">
            {programme.description}
          </p>
        </div>

        <div className="pt-3.5 sm:pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">
          <span className="truncate">{programme.serves}</span>
        </div>
      </div>

      {/* HOVER / KEYBOARD FOCUS OVERLAY */}
      <div className="absolute inset-0 z-10 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-gray-900 opacity-0 max-lg:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 motion-reduce:transition-none pointer-events-none max-lg:pointer-events-auto group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
        <Image
          src={programme.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#b10017]/90 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        <div aria-hidden="true" className="relative z-10 flex items-center justify-start text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest">
          <span>{programme.category}</span>
        </div>

        <div aria-hidden="true" className="relative z-10 my-3 sm:mt-4 sm:mb-5 flex-1 space-y-2 sm:space-y-3">
          <Heading level={3} variant="subsection" color="white" className="leading-tight">
            {programme.title}
          </Heading>
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans">
            {programme.description}
          </p>
        </div>

        <div className="relative z-10 pt-3 sm:pt-4 flex items-center justify-center">
          <Button
            href="/donate"
            variant="secondary"
            size="sm"
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
            aria-label={`Support ${programme.title}`}
          >
            SUPPORT
          </Button>
        </div>
      </div>
    </Card>
  );
}

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
        <section className="site-container py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programmes.map((prog) => (
              <ProgrammeCard key={prog.id} programme={prog} />
            ))}
          </div>
        </section>

        <div className="site-container py-6 sm:py-8">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
