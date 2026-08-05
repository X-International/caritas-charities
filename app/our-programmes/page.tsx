import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Programmes | Caritas Kampala",
  description:
    "Explore Caritas Kampala's programmes in emergency relief, food security, livelihoods, healthcare, and social welfare.",
  alternates: { canonical: "/our-programmes" },
};

import { Heart, Users, AlertTriangle, TrendingUp, Globe, Accessibility, LucideIcon } from "lucide-react";

const programmes: { id: string; title: string; desc: string; serves: string; icon: LucideIcon }[] = [
  {
    id: "emergency-disaster-response",
    title: "Emergency & Disaster Response",
    desc: "Provides immediate assistance to families and communities affected by disasters, fires, and other emergencies.",
    serves: "FAMILIES & COMMUNITIES AFFECTED BY EMERGENCIES",
    icon: AlertTriangle,
  },
  {
    id: "support-for-the-elderly",
    title: "Support for the Elderly",
    desc: "Provides ongoing practical support to elderly people across the Archdiocese.",
    serves: "ELDERLY PEOPLE ACROSS THE ARCHDIOCESE",
    icon: Heart,
  },
  {
    id: "family-child-support",
    title: "Family & Child Support",
    desc: "Supports families and children facing hardship, helping stabilise households in need.",
    serves: "FAMILIES & CHILDREN FACING HARDSHIP",
    icon: Users,
  },
  {
    id: "refugee-asylum-seeker-support",
    title: "Refugee & Asylum Seeker Support",
    desc: "Provides practical assistance to urban refugees and asylum seekers.",
    serves: "URBAN REFUGEES & ASYLUM SEEKERS",
    icon: Globe,
  },
  {
    id: "disability-special-needs-support",
    title: "Disability & Special Needs Support",
    desc: "Supports people living with disabilities and special medical needs.",
    serves: "PEOPLE WITH DISABILITIES & SPECIAL NEEDS",
    icon: Accessibility,
  },
  {
    id: "poverty-alleviation-livelihoods",
    title: "Poverty Alleviation & Livelihoods",
    desc: "Works with individuals and families to help build sustainable livelihoods.",
    serves: "INDIVIDUALS & FAMILIES FACING POVERTY",
    icon: TrendingUp,
  },
];

export default function OurProgrammesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-8 sm:py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] xs:text-xs uppercase tracking-wide font-semibold text-red-200"
            >
              <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
                <li>
                  <Link
                    href="/"
                    className="hover:underline text-white focus-visible:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    HOME
                  </Link>
                </li>
                <li className="px-1 text-red-200" aria-hidden>
                  /
                </li>
                <li aria-current="page" className="text-red-200">
                  OUR PROGRAMMES
                </li>
              </ol>
            </nav>

            <div className="mt-4 md:mt-6 max-w-3xl">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold font-serif leading-[1.06] tracking-tight">
                Our Programmes
              </h1>

              <div aria-hidden className="w-12 sm:w-16 h-px bg-white/20 mt-3 sm:mt-4 mb-3 sm:mb-4 rounded" />

              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-3xl font-normal leading-relaxed">
                Transforming lives through structured humanitarian, pastoral, and community development initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog) => (
              <div id={prog.id} key={prog.id} className="scroll-mt-32 bg-white rounded-2xl border-t-4 border-[#b10017] p-8 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#f4efe6] flex items-center justify-center">
                    <prog.icon className="w-7 h-7 text-[#b10017]" />
                  </div>
                  <span className="text-[10px] font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                    Details coming soon
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <h2 className="text-xl font-serif font-bold text-[#b10017]">{prog.title}</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">{prog.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-gray-100">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{prog.serves}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
