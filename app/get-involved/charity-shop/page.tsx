import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import CharityShopSlider from "@/components/CharityShopSlider";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Charity Shop | Caritas Kampala Charities Office",
  description:
    "Visit our second-hand Charity Shop in Nsambya or donate suitable items to support the work of the Charities Office.",
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
            { label: "Get Involved", href: "#" },
            { label: "Charity Shop" },
          ]}
          eyebrow="GIVE • SHOP • SUPPORT"
          title="Charity Shop"
          description="Visit our second-hand Charity Shop in Nsambya or donate suitable items to support the work of the Charities Office."
          image="/images/Charity Shop/Caritas_Kampala_58.jpg"
          imageAlt="Caritas Kampala Second Hand Charity Shop in Nsambya"
        />

        {/* About Section with Slider on Right */}
        <section className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Heading level={2} variant="section" color="red">
                About the Charity Shop
              </Heading>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Located in Nsambya, the Second Hand Charity Shop is an initiative of the Charities Office under Caritas Kampala. The shop offers donated clothes and other useful items at affordable prices, while helping to raise funds for the charitable work of the office.
                </p>
                <p>
                  Many of the items are donated through parish communities across Kampala Archdiocese. Members of the public can also support the shop by donating clean, usable items in good condition.
                </p>
                <p>
                  Shopping at the Charity Shop or donating suitable items helps support practical assistance for vulnerable individuals, families, and communities.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-gray-600 text-base font-medium">
                  Have suitable items to donate?
                </p>
                <div>
                  <Link
                    href="/contact-us"
                    className="text-[#b10017] hover:underline font-semibold text-base inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] rounded"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <CharityShopSlider />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
