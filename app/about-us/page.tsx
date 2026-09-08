import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "About Caritas Kampala Charity Office | Mission & Work",
  description:
    "Learn about the mission, values and work of the Charity Office of Caritas Kampala, serving vulnerable people across Kampala, Wakiso and Mpigi.",
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
          description="Learn about the Charity Office of Caritas Kampala, its mission, values, and work."
        />

        {/* Centered Reading Column */}
        <article className="site-container py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[46rem] space-y-10 sm:space-y-12">
            {/* Section 1: Our Role */}
            <section className="space-y-4">
              <Heading level={2} variant="card" className="sm:text-2xl">
                Our Role
              </Heading>
              <div className="space-y-4 text-gray-700 leading-[1.75] text-base sm:text-[17px]">
                <p>
                  The Charity Office operates under Caritas Kampala and serves communities across Kampala, Wakiso and Mpigi within the Archdiocese of Kampala.
                </p>
                <p>
                  Our work combines practical support with compassionate accompaniment. We respond to immediate needs while also helping individuals, families, and communities strengthen their ability to cope, recover, and move forward with dignity.
                </p>
              </div>
            </section>

            {/* Section 2: Who We Are */}
            <section className="space-y-4">
              <Heading level={2} variant="card" className="sm:text-2xl">
                Who We Are
              </Heading>
              <div className="space-y-4 text-gray-700 leading-[1.75] text-base sm:text-[17px]">
                <p>
                  Caritas Kampala is the socio-pastoral ministry of the Catholic Church in Kampala Archdiocese. Through the Charity Office, this mission is expressed in practical service to people in need, regardless of religion, sex, nationality, or background.
                </p>
                <p>
                  The Charity Office works with communities, parishes, charity homes, institutions, volunteers, and partners to provide assistance where it is most needed.
                </p>
                <p className="pt-1">
                  Learn more about <Link href="/about-us/our-team" className="text-[#b10017] hover:underline font-semibold">our team</Link> serving across the Archdiocese.
                </p>
              </div>
            </section>

            {/* Section 3: Our Mission in Practice */}
            <section className="space-y-4">
              <Heading level={2} variant="card" className="sm:text-2xl">
                Our Mission in Practice
              </Heading>
              <div className="space-y-4 text-gray-700 leading-[1.75] text-base sm:text-[17px]">
                <p>
                  Our work is guided by the call to recognise the dignity of every person and to respond to hardship with compassion, solidarity, and practical action.
                </p>
                <p>
                  This includes support for families and children, older persons, refugees and asylum seekers, people with disabilities, communities affected by emergencies, and individuals working to rebuild stable livelihoods through our <Link href="/our-programmes" className="text-[#b10017] hover:underline font-semibold">charity programmes</Link>.
                </p>
                <p>
                  We also work through the <Link href="/about-us/chaconet-partners" className="text-[#b10017] hover:underline font-semibold">Chaconet network</Link> and other <Link href="/get-involved/partnerships" className="text-[#b10017] hover:underline font-semibold">partnerships</Link> to strengthen coordination, extend practical support, and respond more effectively to the needs of vulnerable communities.
                </p>
              </div>
            </section>

            {/* Section 4: Dignity, Solidarity and Shared Responsibility */}
            <section className="space-y-4">
              <Heading level={2} variant="card" className="sm:text-2xl">
                Dignity, Solidarity and Shared Responsibility
              </Heading>
              <div className="space-y-4 text-gray-700 leading-[1.75] text-base sm:text-[17px]">
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
              <Heading level={2} variant="card" className="sm:text-2xl">
                Our Place Within Caritas Kampala
              </Heading>
              <div className="space-y-4 text-gray-700 leading-[1.75] text-base sm:text-[17px]">
                <p>
                  The Charity Office is part of Caritas Kampala and does not operate as a separate organisation. Its work forms part of the wider social and pastoral mission of Kampala Archdiocese.
                </p>
                <p>
                  Through Caritas Kampala, the Charity Office is also connected to the wider Caritas family, including Caritas Uganda and Caritas Internationalis. Learn more on the main <a href="https://www.caritaskampala.org/" target="_blank" rel="noopener noreferrer" className="text-[#b10017] hover:underline font-semibold">Caritas Kampala</a> website.
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
                Charity Office, Caritas Kampala
              </p>
            </section>

            {/* Support Our Work CTA */}
            <DonateOnlineCard />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
