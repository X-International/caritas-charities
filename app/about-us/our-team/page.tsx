import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";

export const metadata = {
  title: "Our Team | Caritas Kampala Charities Office",
  description:
    "Meet the leadership and team behind the Charities Office at Caritas Kampala.",
  alternates: { canonical: "/about-us/our-team" },
};

const teamMembers = [
  {
    name: "Rev. Fr. M. Ssekyewa",
    role: "Director, Caritas Kampala",
    bio: "Guiding the strategic and pastoral vision of Caritas Kampala across all socio-developmental programmes.",
    image: "/images/Main Slider/Caritas_Kampala_07.jpg",
  },
  {
    name: "Charities Office Coordinator",
    role: "Head of Relief & Special Needs",
    bio: "Overseeing daily field logistics, orphanage support, and emergency relief distribution.",
    image: "/images/Main Slider/Caritas_Kampala_18.jpg",
  },
  {
    name: "Field Operations Team",
    role: "Community Response & Outreach",
    bio: "Directly engaging with parishes, community leaders, and families in need across the Archdiocese.",
    image: "/images/Charities/Caritas_Kampala_83.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/about-us" className="hover:underline text-white">ABOUT US</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">OUR TEAM</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Our Team
            </Heading>
            <Lead variant="hero">
              Meet the people carrying out Caritas Kampala&apos;s mission every day across the Archdiocese.
            </Lead>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <Card key={i} variant="content" className="overflow-hidden p-0 sm:p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <Heading level={3} variant="card" color="red">{member.name}</Heading>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{member.role}</p>
                  <p className="text-sm text-gray-700 leading-relaxed pt-2">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
