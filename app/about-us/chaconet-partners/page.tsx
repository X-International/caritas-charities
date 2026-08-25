import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Chaconet Partners | Caritas Kampala Charities Office",
  description:
    "The Charities Office works within Chaconet, a network of nine charity homes across the Archdiocese of Kampala.",
  alternates: { canonical: "/about-us/chaconet-partners" },
};

export default function ChaconetPartnersPage() {
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
                { label: "ABOUT US", href: "/about-us" },
                { label: "CHACONET PARTNERS" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Partners &mdash; Chaconet Network
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Uniting Catholic charity homes and care institutions across Kampala Archdiocese.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
          <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#b10017]">
              What is Chaconet?
            </h2>
            <p>
              Chaconet (Catholic Charity Homes Network) is an initiative under Caritas Kampala bringing together registered Catholic orphanages, disability centers, elderly homes, and rehabilitation facilities across the Archdiocese.
            </p>
            <p>
              By coordinating resources, policy compliance, and fundraising support, Chaconet ensures that every home meets high standards of care and protection for all residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Card variant="info" className="space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#b10017]">Child &amp; Youth Care Homes</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Providing shelter, education, nutrition, and psychological support for orphaned and vulnerable children.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#b10017]">Elderly &amp; Special Needs Facilities</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Offering medical care, dignity, and family-style shelter to seniors and individuals with severe disabilities.
              </p>
            </Card>
          </div>

          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
