import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "Our Programmes | Caritas Kampala Charities Office",
  description:
    "Explore the practical programmes supporting vulnerable people and communities across Kampala Archdiocese.",
  path: "/our-programmes",
});

interface Programme {
  id: string;
  title: string;
  category: string;
  description: string[];
  serves: string;
  locations: string[];
  image: string;
}

const programmes: Programme[] = [
  {
    id: "emergency-disaster-response",
    title: "Emergency & Disaster Response",
    category: "RELIEF & CRISIS",
    description: [
      "Provides immediate assistance to families and communities affected by disasters, fires, and other emergencies, including the rapid deployment of emergency supplies such as food, water, and medical aid, urgent rescue and evacuation operations, and essential support services to address urgent needs and stabilize the affected populations, while also integrating Anticipatory Action strategies to prepare for and mitigate the impact of future crises in Kampala Archdiocese. This activity involves proactive measures such as early warning systems, risk assessment, and community preparedness initiatives to reduce vulnerability and enhance resilience before disasters occur.",
    ],
    serves: "FAMILIES & COMMUNITIES AFFECTED BY EMERGENCIES",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_75.jpg",
  },
  {
    id: "support-for-the-elderly",
    title: "Support for the Elderly",
    category: "SENIOR CARE",
    description: [
      "Charity Caritas Kampala Office is dedicated to offering continuous and meaningful support to the elderly members of the community within the Archdiocese. Their practical activities include visiting elderly homes to provide companionship and emotional support, distributing essential items such as food, clothing, and hygiene supplies to ensure they meet their basic needs, and organizing health and wellness programs, including medical check-ups and health education. Additionally, the organization facilitates social gatherings and recreational activities to promote social inclusion and mental well-being. Through these ongoing efforts, Caritas Kampala aims to uphold the dignity and improve the quality of life for the elderly, ensuring they feel cared for and valued in their later years.",
    ],
    serves: "OLDER PERSONS ACROSS THE ARCHDIOCESE",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_84.jpg",
  },
  {
    id: "family-child-support",
    title: "Family & Child Support",
    category: "HOUSEHOLD CARE",
    description: [
      "We are dedicated to supporting families and children facing hardship by providing essential assistance to help stabilize households in need. Our programs focus on addressing immediate needs such as food, education, shelter, medical and psychosocial support, while also promoting long-term resilience and self-sufficiency.",
      "As part of our commitment to safeguarding vulnerable children, we hold a Child Safeguarding role under Caritas Kampala. In this capacity, we implement strict safeguarding policies and conduct regular training to ensure the safety and well-being of all children involved in our programs. Activities include child protection awareness campaigns, establishing safe reporting mechanisms, conducting thorough background checks on staff and volunteers, and offering psychosocial support to children who have experienced abuse or neglect. Our goal is to create a secure environment where children can thrive, free from harm and exploitation.",
    ],
    serves: "FAMILIES & CHILDREN FACING HARDSHIP",
    locations: ["ARCHDIOCESE"],
    image: "/images/Event 01/Caritas_Kampala_03.jpg",
  },
  {
    id: "refugee-asylum-seeker-support",
    title: "Refugee & Asylum Seeker Support",
    category: "HUMANITARIAN AID",
    description: [
      "Provides comprehensive practical assistance to both urban refugees and asylum seekers. This includes support to access to safe housing and shelter, nutritious food, medical support, vocational training and skills development, as well as protection services such as legal aid and advocacy. These efforts aim to address their immediate needs while promoting their dignity, safety, and long-term resilience within both host and urban refugee communities.",
    ],
    serves: "REFUGEES & ASYLUM SEEKERS",
    locations: ["KAMPALA"],
    image: "/images/Event 02/Caritas_Kampala_05.jpg",
  },
  {
    id: "disability-special-needs-support",
    title: "Disability & Special Needs Support",
    category: "INCLUSION & CARE",
    description: [
      "In close collaboration with our Chaconet partners, providing comprehensive assistance through a variety of activities such as personalized care, therapeutic services, accessible facilities, skill development programs, advocacy, emotional support, community integration, and awareness campaigns to empower individuals living with disabilities and special medical needs. Our goal is to foster independence, enhance quality of life, and promote inclusivity for all.",
    ],
    serves: "PEOPLE WITH DISABILITIES & SPECIAL NEEDS",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_87.jpg",
  },
  {
    id: "poverty-alleviation-livelihoods",
    title: "Poverty Alleviation & Livelihoods",
    category: "ECONOMIC EMPOWERMENT",
    description: [
      "Caritas Kampala Charity Office plays a vital role in collaborating with individuals and families to develop and implement sustainable livelihood strategies. Through comprehensive support such as skills training, microfinance initiatives, income-generating activities, and community empowerment programs, we aim to uplift vulnerable populations, foster economic independence, and create lasting positive change. Our dedicated efforts are focused on breaking the cycle of poverty and promoting social and economic resilience within communities.",
    ],
    serves: "INDIVIDUALS & FAMILIES FACING POVERTY",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_71.jpg",
  },
];

/* ── Horizontal Programme Card (Matches Core Pillars styling & interactions) ── */
function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Card
      id={programme.id}
      as="article"
      variant="content"
      aria-labelledby={`programme-title-${programme.id}`}
      className="group relative flex flex-col justify-between overflow-hidden h-auto w-full p-6 sm:p-8 md:p-10 focus-within:ring-2 focus-within:ring-caritas-red focus-within:ring-offset-2 transition-shadow duration-300"
    >
      {/* DEFAULT UNHOVERED STATE */}
      <div className="flex flex-col justify-between h-full w-full z-0">
        <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest gap-2">
          <span>{programme.category}</span>
          <span className="hidden sm:inline-block text-gray-500 font-semibold">{programme.serves}</span>
        </div>

        <div className="my-4 sm:my-5 flex-1 max-w-4xl">
          <Heading
            level={3}
            variant="subsection"
            color="red"
            id={`programme-title-${programme.id}`}
            className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-[26px] leading-snug"
          >
            {programme.title}
          </Heading>
          <div className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-gray-800 leading-relaxed font-sans">
            {programme.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 flex sm:hidden items-center justify-between text-[11px] font-bold text-gray-600 uppercase tracking-widest">
          <span className="truncate">{programme.serves}</span>
        </div>
      </div>

      {/* DESKTOP HOVER / KEYBOARD FOCUS OVERLAY (Only active on hover-capable devices) */}
      <div className="absolute inset-0 z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-gray-900 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 motion-reduce:transition-none pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
        <Image
          src={programme.image}
          alt=""
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#b10017]/90 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        <div aria-hidden="true" className="relative z-10 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest gap-2">
          <span>{programme.category}</span>
          <span className="hidden sm:inline-block text-amber-300 font-bold tracking-wider">{programme.serves}</span>
        </div>

        <div aria-hidden="true" className="relative z-10 my-4 sm:my-5 flex-1 max-w-4xl space-y-3 sm:space-y-4">
          <Heading level={3} variant="subsection" color="white" className="text-xl sm:text-2xl lg:text-[26px] leading-snug">
            {programme.title}
          </Heading>
          <div className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-white/95 leading-relaxed font-sans">
            {programme.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="relative z-10 pt-4 border-t border-white/20 flex sm:hidden items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-300">
          <span className="truncate">{programme.serves}</span>
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
          description="Explore the practical programmes supporting vulnerable people and communities across Kampala Archdiocese."
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

        {/* Programme List Section - Matching Core Pillars Background */}
        <section className="py-16 sm:py-20 bg-[#f4efe6] relative overflow-hidden">
          <div className="site-container">
            <div className="flex flex-col gap-6 sm:gap-8">
              {programmes.map((prog) => (
                <ProgrammeCard key={prog.id} programme={prog} />
              ))}
            </div>
          </div>
        </section>

        <div className="site-container py-12 sm:py-16">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
