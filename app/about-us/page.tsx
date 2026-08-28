import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "About Us | Caritas Kampala Charities Office",
  description:
    "Learn about the Charities Office, its mission, values, and place under Caritas Kampala.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Who We Are"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" }
          ]}
          description="Learn about the Charities Office, its mission, values, and place under Caritas Kampala."
        />

        {/* Centered Reading Column */}
        <article className="site-container py-16 sm:py-20 max-w-3xl mx-auto space-y-12 sm:space-y-16">
          {/* Section 1: Our Role */}
          <section className="space-y-4">
            <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-[#b10017]">
              Our Role
            </Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                The Charities Office operates under Caritas Kampala and serves people and communities facing poverty, vulnerability, displacement, disability, illness, and other forms of hardship across the Archdiocese of Kampala.
              </p>
              <p>
                Our work combines practical support with compassionate accompaniment. We respond to immediate needs while also helping individuals, families, and communities strengthen their ability to cope, recover, and move forward with dignity.
              </p>
            </div>
          </section>

          {/* Section 2: Who We Are */}
          <section className="space-y-4">
            <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-[#b10017]">
              Who We Are
            </Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Caritas Kampala is the socio-pastoral ministry of the Catholic Church in the Archdiocese of Kampala. Through the Charities Office, this mission is expressed in practical service to people in need, regardless of religion, sex, nationality, or background.
              </p>
              <p>
                The Charities Office works with communities, parishes, charity homes, institutions, volunteers, and partners to provide assistance where it is most needed.
              </p>
            </div>
          </section>

          {/* Section 3: Our Mission in Practice */}
          <section className="space-y-4">
            <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-[#b10017]">
              Our Mission in Practice
            </Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Our work is guided by the call to recognise the dignity of every person and to respond to hardship with compassion, solidarity, and practical action.
              </p>
              <p>
                This includes support for families and children, older persons, refugees and asylum seekers, people with disabilities, communities affected by emergencies, and individuals working to rebuild stable livelihoods.
              </p>
              <p>
                We also work through the Chaconet network and other partnerships to strengthen coordination, extend practical support, and respond more effectively to the needs of vulnerable communities.
              </p>
            </div>
          </section>

          {/* Section 4: Dignity, Solidarity and Shared Responsibility */}
          <section className="space-y-4">
            <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-[#b10017]">
              Dignity, Solidarity and Shared Responsibility
            </Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                We believe charity is more than responding to immediate need. It begins with recognising the dignity of every person, listening carefully, and responding in ways that are respectful, responsible, and practical.
              </p>
              <p>
                Our work seeks to bring together communities, parishes, charity homes, volunteers, partners, and supporters around a shared responsibility to care for people experiencing hardship and to strengthen the conditions that help people live with greater security and dignity.
              </p>
            </div>
          </section>

          {/* Section 5: Our Place Within Caritas Kampala */}
          <section className="space-y-4">
            <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-[#b10017]">
              Our Place Within Caritas Kampala
            </Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                The Charities Office is part of Caritas Kampala and does not operate as a separate organisation. Its work forms part of the wider social and pastoral mission of the Archdiocese of Kampala.
              </p>
              <p>
                Through Caritas Kampala, the Charities Office is also connected to the wider Caritas family, including Caritas Uganda and Caritas Internationalis.
              </p>
            </div>
          </section>

          {/* Vision Panel */}
          <section className="bg-[#f4efe6] p-8 sm:p-10 rounded-subcard text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b10017] font-sans">
              OUR VISION
            </p>
            <blockquote className="font-serif text-2xl sm:text-3xl text-gray-900 leading-snug italic max-w-2xl mx-auto">
              &ldquo;A self-sustaining family of God built on love, solidarity, and reconciliation.&rdquo;
            </blockquote>
            <p className="text-gray-600 font-medium text-sm sm:text-base font-sans">
              Charities Office, Caritas Kampala
            </p>
          </section>

          {/* Faith Put Into Practice Card */}
          <section className="bg-[#f4efe6] p-6 sm:p-8 rounded-subcard space-y-3">
            <Heading level={3} className="text-xl font-serif font-bold text-[#b10017]">
              Faith Put Into Practice
            </Heading>
            <p className="text-gray-700 leading-relaxed text-base font-sans">
              Our work is rooted in practical service, responding to real needs with compassion, dignity, and responsibility.
            </p>
            <div>
              <Link href="/our-programmes" className="text-[#b10017] font-semibold hover:underline inline-flex items-center gap-1 text-sm sm:text-base font-sans">
                See Our Programmes &rarr;
              </Link>
            </div>
          </section>

          {/* Our Team / Chaconet Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
            <Link href="/about-us/our-team" className="group block space-y-1 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-lg font-serif font-bold text-[#b10017] group-hover:underline block">
                Our Team &rarr;
              </span>
              <span className="text-sm text-gray-600 block font-sans">
                Meet the people serving through the Charities Office.
              </span>
            </Link>
            <Link href="/about-us/chaconet-partners" className="group block space-y-1 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-lg font-serif font-bold text-[#b10017] group-hover:underline block">
                Chaconet Network &rarr;
              </span>
              <span className="text-sm text-gray-600 block font-sans">
                Learn about the network of charity homes working across the Archdiocese.
              </span>
            </Link>
          </div>

          {/* Support Our Work CTA */}
          <DonateOnlineCard />
        </article>
      </main>

      <Footer />
    </div>
  );
}
