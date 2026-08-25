import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";
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
        <section className="bg-[#b10017] text-white section-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "GET INVOLVED" },
              ]}
            />
            <Heading level={1} variant="page" color="white">
              Get Involved
            </Heading>
            <Lead variant="hero">
              Join hands with the Caritas Kampala Charities Office as a volunteer, parish champion, or corporate partner.
            </Lead>
          </div>
        </section>

        {/* Options */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-8">
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
              <Heading level={2} variant="card" color="red">Institutional Partnership</Heading>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Partner your company, foundation, or international agency with Caritas Kampala programmes.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
