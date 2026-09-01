import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Text } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Our Team | Caritas Kampala’s Charity Office",
  description:
    "Meet the people behind the Charity Office, under Caritas Kampala, serving vulnerable people and communities across Kampala Archdiocese.",
  path: "/about-us/our-team",
});

interface TeamMember {
  name: string;
  role: string;
  category: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rev. Fr. Peter Musumba",
    role: "Director, Caritas Kampala",
    category: "LEADERSHIP",
    image: "/images/Team/Fr_Peter_Musumba_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Rev. Fr. Peter Musumba",
  },
  {
    name: "Mr. Patrick Njala",
    role: "Charity Office Coordinator",
    category: "PROGRAMME LEADERSHIP",
    image: "/images/Team/Njala_Patrick_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Mr. Patrick Njala",
  },
  {
    name: "Ms. Rose Salaama",
    role: "Technical Advisor",
    category: "TECHNICAL ADVISORY",
    image: "/images/Team/rose.png",
    alt: "Portrait of Ms. Rose Salaama",
  },
  {
    name: "Ms. Margaret Kisakye",
    role: "Social Worker",
    category: "SOCIAL CARE TEAM",
    image: "/images/Team/Margaret_Kisakye_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Margaret Kisakye",
  },
  {
    name: "Ms. Penina Nawajje",
    role: "Charity Shop Coordinator",
    category: "CHARITY SHOP",
    image: "/images/Team/Penina_Nawajje_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Penina Nawajje",
  },
  {
    name: "Ms. Kobutungi Proscovia",
    role: "Charity Office Administrator",
    category: "ADMINISTRATION",
    image: "/images/Team/Kobutungi_Proscovia_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Kobutungi Proscovia",
  },
  {
    name: "Ms. Bridget Atuhairwe",
    role: "Digital Communications Officer",
    category: "COMMUNICATIONS",
    image: "/images/Team/Bridget_Atuhairwe_Caritas Kampala.jpg",
    alt: "Portrait of Ms. Bridget Atuhairwe",
  },
  {
    name: "Ms. Margaux Gilbert",
    role: "Charity Office Representative – Europe",
    category: "EUROPE REPRESENTATION",
    image: "/images/Team/gilbert.png",
    alt: "Portrait of Ms. Margaux Gilbert",
  },
  {
    name: "Ms. Nansubuga Catherine Kevin",
    role: "Social Worker",
    category: "SOCIAL CARE TEAM",
    image: "/images/Team/kevin.png",
    alt: "Portrait of Ms. Nansubuga Catherine Kevin",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f3]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHeader
          title="Our Team"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Our Team" },
          ]}
          description="Meet the people leading and carrying out the work of the Charity Office."
        />

        {/* Team Content Section */}
        <section
          aria-labelledby="team-section-title"
          className="bg-[#f9f6f3] pt-12 sm:pt-16 lg:pt-18 pb-16 sm:pb-20 lg:pb-24"
        >
          <div className="site-container max-w-3xl space-y-4 text-center">
            <Heading id="team-section-title" level={2} variant="section" color="red">
              Dedicated to Serving With Compassion
            </Heading>
            <Text size="lg" color="muted" className="leading-relaxed">
              Our team is committed to supporting vulnerable people, strengthening communities, and advancing the mission of the Charity Office.
            </Text>
          </div>

          <div className="site-container mt-10 sm:mt-12">
            <ul
              role="list"
              aria-label="Caritas Kampala Team Members"
              className="flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8"
            >
              {teamMembers.map((member, i) => (
                <li
                  key={i}
                  className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] xl:w-[calc(25%-21px)] max-w-sm flex flex-col bg-white rounded-[20px] border-[3px] border-[#dfd3c4] overflow-hidden"
                >
                  {/* Portrait Image Area (1:1 Square matching 800x800 images) */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#ebe4d9]">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-6 pb-6 sm:pb-7 flex flex-col flex-1 text-left bg-white justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2 font-sans block">
                        {member.category}
                      </span>
                      <h3 className="font-serif font-bold text-[#b10017] text-[22px] sm:text-[21px] leading-tight mb-1.5 text-left">
                        {member.name}
                      </h3>
                    </div>
                    <p className="font-sans text-[14px] sm:text-sm text-gray-600 leading-normal text-left mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
