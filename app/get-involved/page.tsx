import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Get Involved | Caritas Kampala Charities Office",
  description:
    "Volunteer or shop our Charity Shop. Discover the ways you can support the Charities Office's work in Kampala, Wakiso and Mpigi.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "GET INVOLVED" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Get Involved
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Join hands with the Caritas Kampala Charities Office as a volunteer, parish champion, or corporate partner.
            </p>
          </div>
        </section>

        {/* Options */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="info" className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Volunteer With Us</h2>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Assist in logistics, food packaging, parish collections, and community outreach.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Fundraise for Us</h2>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Organize parish drives, school collections, or corporate fundraisers for our relief appeals.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Institutional Partnership</h2>
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
