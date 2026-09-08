import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import SplitPageHeader from "@/components/SplitPageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { ArrowRight } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Charity Programmes in Kampala | Caritas Kampala Charity Office",
  description:
    "Explore Caritas Kampala Charity Office programmes supporting families, older persons, refugees, people with disabilities and communities across Kampala, Wakiso and Mpigi.",
  path: "/our-programmes",
});

interface Programme {
  id: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  linkHref?: string;
}

/* ── Reordered Programmes Array (Humanitarian Relief → Family → Elderly → Refugees → Disability → Livelihoods → Charity Shop) ── */
const programmes: Programme[] = [
  {
    id: "emergency-disaster-response",
    title: "Emergency & Disaster Response",
    description: [
      "Provides immediate assistance to families and communities affected by disasters, fires, and other emergencies, including the rapid deployment of emergency supplies such as food, water, and medical aid, urgent rescue and evacuation operations, and essential support services to address urgent needs and stabilize the affected populations, while also integrating Anticipatory Action strategies to prepare for and mitigate the impact of future crises in Kampala Archdiocese.",
      "This activity involves proactive measures such as early warning systems, risk assessment, and community preparedness initiatives to reduce vulnerability and enhance resilience before disasters occur.",
      "This approach combines immediate relief with practical preparedness, helping communities respond more effectively when emergencies occur."
    ],
    image: "/images/Miscellany/Caritas_Kampala_42.jpg",
    imageAlt: "Caritas emergency food and relief distribution in Kampala",
  },
  {
    id: "family-child-support",
    title: "Family & Child Support",
    description: [
      "We are dedicated to supporting families and children facing hardship by providing essential assistance to help stabilize households in need. Our programs focus on addressing immediate needs such as food, education, shelter, medical and psychosocial support, while also promoting long-term resilience and self-sufficiency.",
      "As part of our commitment to safeguarding vulnerable children, we hold a Child Safeguarding role under Caritas Kampala. In this capacity, we implement strict safeguarding policies and conduct regular training to ensure the safety and well-being of all children involved in our programs. Activities include child protection awareness campaigns, establishing safe reporting mechanisms, conducting thorough background checks on staff and volunteers, and offering psychosocial support to children who have experienced abuse or neglect. Our goal is to create a secure environment where children can thrive, free from harm and exploitation."
    ],
    image: "/images/Miscellany/Caritas_Kampala_22.jpg",
    imageAlt: "Support and empowerment for families and children",
  },
  {
    id: "support-for-the-elderly",
    title: "Support for the Elderly",
    description: [
      "Charity Caritas Kampala Office is dedicated to offering continuous and meaningful support to the elderly members of the community within the Archdiocese. Their practical activities include visiting elderly homes to provide companionship and emotional support, distributing essential items such as food, clothing, and hygiene supplies to ensure they meet their basic needs, and organizing health and wellness programs, including medical check-ups and health education.",
      "Additionally, the organization facilitates social gatherings and recreational activities to promote social inclusion and mental well-being. Through these ongoing efforts, Caritas Kampala aims to uphold the dignity and improve the quality of life for the elderly, ensuring they feel cared for and valued in their later years.",
      "The focus throughout is on dignity, wellbeing and helping older persons remain connected to the people and communities around them."
    ],
    image: "/images/Event 02/Caritas_Kampala_89.jpg",
    imageAlt: "Care and companionship for elderly residents at Nalukolongo home",
  },
  {
    id: "refugee-asylum-seeker-support",
    title: "Refugee & Asylum Seeker Support",
    description: [
      "Provides comprehensive practical assistance to both urban refugees and asylum seekers. This includes support to access to safe housing and shelter, nutritious food, medical support, vocational training and skills development, as well as protection services such as legal aid and advocacy.",
      "These efforts aim to address their immediate needs while promoting their dignity, safety, and long-term resilience within both host and urban refugee communities.",
      "Support addresses immediate needs while helping individuals and families work towards greater stability, dignity and self-reliance."
    ],
    image: "/images/Miscellany/Caritas_Kampala_24.jpg",
    imageAlt: "Community outreach and support for urban refugees in Kampala",
  },
  {
    id: "disability-special-needs-support",
    title: "Disability & Special Needs Support",
    description: [
      "In close collaboration with our Chaconet partners, providing comprehensive assistance through a variety of activities such as personalized care, therapeutic services, accessible facilities, skill development programs, advocacy, emotional support, community integration, and awareness campaigns to empower individuals living with disabilities and special medical needs.",
      "Our goal is to foster independence, enhance quality of life, and promote inclusivity for all.",
      "This work promotes greater independence, dignity and meaningful participation in family and community life."
    ],
    image: "/images/Miscellany/Caritas_Kampala_39.jpg",
    imageAlt: "Specialized care and mobility support for persons with disabilities",
  },
  {
    id: "poverty-alleviation-livelihoods",
    title: "Poverty Alleviation & Livelihoods",
    description: [
      "Caritas Kampala Charity Office plays a vital role in collaborating with individuals and families to develop and implement sustainable livelihood strategies. Through comprehensive support such as skills training, microfinance initiatives, income-generating activities, and community empowerment programs, we aim to uplift vulnerable populations, foster economic independence, and create lasting positive change.",
      "Our dedicated efforts are focused on breaking the cycle of poverty and promoting social and economic resilience within communities.",
      "The aim is to strengthen household resilience and create practical pathways towards greater economic stability and self-reliance."
    ],
    image: "/images/Miscellany/Caritas_Kampala_23.jpg",
    imageAlt: "Livelihood skills training and community economic empowerment",
  },
  {
    id: "second-hand-charity-shop",
    title: "Second Hand Charity Shop",
    description: [
      "Discover the Second Hand Charity Shop at Caritas Kampala in Nsambya - a heartfelt initiative to support those in need. Operated by the Charity Office, our shop raises vital funds for charity work by selling donated clothes and items at affordable prices.",
      "These donations from parish communities across Kampala Archdiocese help us empower the vulnerable and make a lasting impact in our community. Your support and donations of materials in good condition make this possible!"
    ],
    image: "/images/Miscellany/Caritas_Kampala_84.jpg",
    imageAlt: "Second Hand Charity Shop at Caritas Kampala in Nsambya",
    linkHref: "/get-involved/charity-shop",
  },
];

/* ── Refined Editorial Programme Card ── */
function ProgrammeCard({ programme, index }: { programme: Programme; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={programme.id}
      aria-labelledby={`programme-title-${programme.id}`}
      className={`bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-[#efe3d2] shadow-sm overflow-hidden flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* ── Image Column ── */}
      <div className="w-full lg:w-[43%] relative aspect-[16/9] lg:aspect-auto min-h-0 lg:min-h-[350px] overflow-hidden shrink-0">
        <Image
          src={programme.image}
          alt={programme.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 43vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Content Column ── */}
      <div className="w-full lg:w-[57%] px-5 py-6 sm:p-7 lg:px-[42px] lg:py-[38px] flex flex-col justify-between flex-1">
        <div className="flex-1">
          {/* Programme Title */}
          <Heading
            level={3}
            variant="subsection"
            color="red"
            id={`programme-title-${programme.id}`}
            className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[30px] font-serif font-bold text-[#b10017] leading-tight mb-3.5 lg:mb-4"
          >
            {programme.title}
          </Heading>

          {/* Text Content */}
          <div className="space-y-3 sm:space-y-[14px] text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#38332c] leading-[1.6] sm:leading-[1.6] lg:leading-[1.62] font-sans">
            {programme.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Footer Action anchored at bottom */}
        <div className="mt-auto pt-6 border-t border-[#efe3d2] flex items-center justify-end">
          <Link
            href={programme.linkHref || "/resources/success-stories"}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b10017] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b10017] rounded"
          >
            <span>See Impact Stories</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function OurProgrammesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our Programmes" }
          ]}
          eyebrow="OUR WORK"
          title="Our Programmes"
          description="Practical programmes supporting families, older persons, refugees, people with disabilities and communities across Kampala, Wakiso and Mpigi."
          image="/images/Miscellany/Caritas_Kampala_42.jpg"
          imageAlt="Caritas Kampala programmes serving communities in Kampala, Wakiso and Mpigi"
          imagePositionDesktop="left 35%"
          imagePositionTablet="center 35%"
          imagePositionMobile="center 40%"
        />

        {/* Programme List Section */}
        <section className="pt-10 sm:pt-12 lg:pt-[72px] pb-16 lg:pb-24 bg-[#ebe3d7] relative overflow-hidden" aria-labelledby="programmes-heading">
          <div className="site-container">
            {/* Section Header */}
            <div className="text-center mb-9 sm:mb-10 lg:mb-11 max-w-[840px] mx-auto">
              <Heading level={2} variant="section" color="red" id="programmes-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.625rem] leading-tight max-w-none mx-auto whitespace-normal lg:whitespace-nowrap">
                Empowering Families, Building Lasting Hope
              </Heading>
              <p className="mt-3.5 sm:mt-4 lg:mt-5 text-base sm:text-lg text-[#4d4338] leading-relaxed font-normal max-w-[760px] mx-auto">
                We respond to immediate needs while supporting individuals, families and communities across Kampala, Wakiso and Mpigi to build greater stability and dignity.
              </p>
            </div>

            {/* Clean Editorial Cards List */}
            <div className="flex flex-col gap-6 sm:gap-[28px] lg:gap-[32px]">
              {programmes.map((prog, index) => (
                <ProgrammeCard key={prog.id} programme={prog} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Related Link Section */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="site-container text-center max-w-2xl mx-auto space-y-2">
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              Want to see these programmes in action? Read real accounts in our{" "}
              <Link href="/resources/success-stories" className="text-[#b10017] hover:underline font-semibold">
                Success Stories
              </Link>
              , or learn how to{" "}
              <Link href="/get-involved/volunteer" className="text-[#b10017] hover:underline font-semibold">
                volunteer
              </Link>{" "}
              and explore{" "}
              <Link href="/get-involved/partnerships" className="text-[#b10017] hover:underline font-semibold">
                partnerships
              </Link>
              .
            </p>
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




