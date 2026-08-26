import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Our Team | Caritas Kampala Charities Office",
  description:
    "Meet the people behind the Charities Office, under Caritas Kampala, serving vulnerable people and communities across the Archdiocese of Kampala.",
  path: "/about-us/our-team",
});

const teamMembers = [
  {
    name: "Rev. Fr. Peter Musumba",
    role: "Director, Caritas Kampala",
    image: "/images/Team/Fr_Peter_Musumba_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Rev. Fr. Peter Musumba"
  },
  {
    name: "Mr. Patrick Njala",
    role: "Charities Office Coordinator",
    image: "/images/Team/Njala_Patrick_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Mr. Patrick Njala"
  },
  {
    name: "Ms. Rose Salaama",
    role: "Technical Advisor",
    image: "/images/Team/placeholder_Caritas_Kampala_Charities_OfficeNjala_Patrick_Caritas_Kampala_Charities_Office.jpg",
    alt: "Photograph not currently available for Ms. Rose Salaama"
  },
  {
    name: "Ms. Margaret Kisakye",
    role: "Social Worker",
    image: "/images/Team/Margaret_Kisakye_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Margaret Kisakye"
  },
  {
    name: "Ms. Penina Nawajje",
    role: "Social Worker",
    image: "/images/Team/Penina_Nawajje_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Penina Nawajje"
  },
  {
    name: "Ms. Kobutungi Proscovia",
    role: "Social Worker",
    image: "/images/Team/Kobutungi_Proscovia_Caritas_Kampala_Charities_Office.jpg",
    alt: "Portrait of Ms. Kobutungi Proscovia"
  },
  {
    name: "Ms. Bridget Atuhairwe",
    role: "Digital Communications Officer",
    image: "/images/Team/Bridget_Atuhairwe_Caritas Kampala.jpeg",
    alt: "Portrait of Ms. Bridget Atuhairwe"
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <section className="bg-[#b10017] text-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
          <div className="site-container space-y-6">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-white text-red-100">Home</Link></li>
                <li className="text-red-300">/</li>
                <li><Link href="/about-us" className="hover:text-white text-red-100">About Us</Link></li>
                <li className="text-red-300">/</li>
                <li aria-current="page" className="text-white">Our Team</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Our Team
            </Heading>
            <Lead variant="hero" className="max-w-xl">
              Meet the dedicated people working every day to serve with compassion and build hope.
            </Lead>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
          <div className="site-container max-w-3xl space-y-6">
            <Heading level={2} variant="section" color="red">
              Dedicated to Serving With Compassion
            </Heading>
            <Text size="lg" color="muted" className="leading-relaxed">
              Our team is committed to supporting vulnerable people, strengthening communities, and advancing the mission of the Charities Office.
            </Text>
          </div>
        </section>

        {/* Team Grid */}
        <section className="site-container pb-20 sm:pb-24 lg:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col rounded-lg border border-gray-100 bg-white p-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <Heading level={3} variant="card" color="dark" className="text-center">{member.name}</Heading>
                <Text size="sm" color="default" className="text-center mt-1">{member.role}</Text>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
