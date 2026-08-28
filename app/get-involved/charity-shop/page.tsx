import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Charity Shop | Caritas Kampala Charities Office",
  description:
    "Visit the Charity Shop in Nsambya, where donated clothes and items are sold at affordable prices to support the work of the Charities Office under Caritas Kampala.",
  path: "/get-involved/charity-shop",
});

export default function CharityShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Get Involved", href: "/get-involved" },
            { label: "Charity Shop" },
          ]}
          eyebrow="GIVE • SHOP • SUPPORT"
          title="Charity Shop"
          description="Visit our second-hand Charity Shop in Nsambya or donate suitable items to support the work of the Charities Office."
          image="/images/Charity Shop/Caritas_Kampala_58.jpg"
          imageAlt="Caritas Kampala Second Hand Charity Shop in Nsambya"
        />

        {/* About Section */}
        <section className="site-container py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Heading level={2} className="text-3xl font-bold font-serif text-gray-900">
                About Our Charity Shop
              </Heading>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Located in Nsambya, the Second Hand Charity Shop is an initiative of the Charities Office under Caritas Kampala. The shop gives donated clothes and other items a new purpose by making them available at affordable prices while raising funds to support our charity work.
                </p>
                <p>
                  Many of these items are donated through parish communities across the Kampala Archdiocese. By shopping with us or donating materials in good condition, you help strengthen the work we do with vulnerable people and communities.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                    src="/images/Charity Shop/Caritas_Kampala_58.jpg"
                    alt="Items and activities at the Caritas Kampala Charity Shop"
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
