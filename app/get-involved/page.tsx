import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Get Involved | Caritas Kampala Charities Office",
  description:
    "Volunteer or shop our Charity Shop. Discover the ways you can support the Charities Office's work in Kampala, Wakiso and Mpigi.",
  path: "/get-involved",
});

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Get Involved"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "GET INVOLVED" }
          ]}
          description="Join hands with the Caritas Kampala Charities Office as a volunteer, parish champion, or corporate partner."
        />

        {/* Options */}
        <section className="site-container section-md space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="info" className="space-y-3">
              <Heading level={2} variant="card" color="red">Volunteer With Us</Heading>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Assist in logistics, food packaging, parish collections, and community outreach.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <Heading level={2} variant="card" color="red">Fundraise for Us</Heading>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Organize parish drives, school collections, or corporate fundraisers for our relief appeals.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <Heading level={2} variant="card" color="red">Partnerships</Heading>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Explore formal partnerships for your company, foundation, or institution to support our programmes.
              </p>
              <div className="pt-2">
                <Link href="/get-involved/partnerships" className="text-sm font-semibold text-red-700 hover:underline">
                  View Partnerships &rarr;
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Partner With Us */}
        <section className="site-container section-md">
          <div className="bg-[#f4efe6] p-8 sm:p-12 rounded-2xl space-y-6">
            <Heading level={2} variant="section" color="red">Partner With Us</Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Lasting support often comes through working together. The Charities Office welcomes partnerships with businesses, institutions, professional groups, faith communities and other organisations that share a commitment to serving vulnerable people.</p>
              <p>Partnerships can include financial or in-kind support, professional expertise, healthcare and education initiatives, skills development, event support and other practical forms of collaboration.</p>
            </div>
            <div className="pt-2">
              <Button href="/contact-us" variant="primary" size="md">
                Talk to Us About Partnership
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
