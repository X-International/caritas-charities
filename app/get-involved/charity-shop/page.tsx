import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading, Lead } from "@/components/ui/Typography";
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
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-16 sm:py-20 lg:py-24">
          <Image
            src="/images/Charity Shop/Caritas_Kampala_41.jpg"
            alt="Caritas Kampala Charity Shop"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="site-container relative z-10 space-y-4">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] xs:text-xs uppercase tracking-wide font-semibold text-red-200"
            >
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:underline">HOME</Link></li>
                <li>→</li>
                <li><Link href="/get-involved" className="hover:underline">GET INVOLVED</Link></li>
                <li>→</li>
                <li aria-current="page">CHARITY SHOP</li>
              </ol>
            </nav>
            <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white">
              Charity Shop
            </Heading>
            <Lead className="text-lg sm:text-xl text-white/90 max-w-2xl">
              Shop with purpose. Every purchase and donation helps support our work.
            </Lead>
          </div>
        </section>

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
                  Many of these items are donated through parish communities across the Archdiocese of Kampala. By shopping with us or donating materials in good condition, you help strengthen the work we do with vulnerable people and communities.
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

        {/* Why Matters Section */}
        <section className="bg-gray-50 py-16 sm:py-20">
            <div className="site-container space-y-12">
                <Heading level={2} className="text-3xl font-bold font-serif text-gray-900 text-center">
                    Why the Charity Shop Matters
                </Heading>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card variant="content" className="p-8 space-y-4">
                        <Heading level={3} className="text-xl font-bold text-[#b10017]">AFFORDABLE ITEMS</Heading>
                        <p className="text-gray-700">Donated clothes and other useful items are made available at affordable prices.</p>
                    </Card>
                    <Card variant="content" className="p-8 space-y-4">
                        <Heading level={3} className="text-xl font-bold text-[#b10017]">SUPPORTING OUR WORK</Heading>
                        <p className="text-gray-700">Funds raised through the shop help support the charitable work of the Charities Office.</p>
                    </Card>
                    <Card variant="content" className="p-8 space-y-4">
                        <Heading level={3} className="text-xl font-bold text-[#b10017]">COMMUNITY SUPPORT</Heading>
                        <p className="text-gray-700">Donations from parish communities and other supporters help make the Charity Shop possible.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* What May Find Section */}
        <section className="site-container py-16 sm:py-20 space-y-8">
            <Heading level={2} className="text-3xl font-bold font-serif text-gray-900 text-center">
                What You May Find
            </Heading>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                Our selection depends on the items donated to the Charity Shop, so what is available may change over time.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Clothing", image: "/images/Charity Shop/Caritas_Kampala_22.jpg" },
                    { title: "Other Donated Items", image: "/images/Charity Shop/Caritas_Kampala_57.jpg" },
                    { title: "Other Donated Items", image: "/images/Charity Shop/Caritas_Kampala_59.jpg" },
                ].map((item, idx) => (
                    <Card key={idx} variant="content" className="overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <Heading level={3} className="text-lg font-bold text-gray-900">{item.title}</Heading>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        {/* Donate CTA */}
        <section className="bg-[#b10017] text-white py-16 sm:py-20">
          <div className="site-container text-center space-y-6 max-w-3xl mx-auto">
            <Heading level={2} className="text-3xl font-bold font-serif text-white">
              Give Your Items a New Purpose
            </Heading>
            <p className="text-lg text-white/90 leading-relaxed">
              Donations of materials in good condition help keep the Charity Shop going and support the work of the Charities Office.
            </p>
            <div className="pt-4">
              <Button href="/contact-us" variant="secondary" size="lg">
                Donate Items
              </Button>
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="site-container py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Heading level={2} className="text-3xl font-bold font-serif text-gray-900">
                Visit the Charity Shop
              </Heading>
              <div className="text-lg text-gray-700 space-y-4">
                <p><strong>Location:</strong> Nsambya, Kampala</p>
                <p>Planning to visit or donate items? Contact us for current information about the Charity Shop.</p>
              </div>
              <Button href="/contact-us" variant="primary">
                Contact Us
              </Button>
            </div>
             <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                    src="/images/Charity Shop/Caritas_Kampala_58.jpg"
                    alt="Charity Shop View"
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-gray-50 py-16 sm:py-20">
            <div className="site-container space-y-12">
                <Heading level={2} className="text-3xl font-bold font-serif text-gray-900 text-center">
                    How You Can Support
                </Heading>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4 text-center">
                        <Heading level={3} className="text-xl font-bold text-gray-900">DONATE ITEMS</Heading>
                        <p className="text-gray-700">Give clothes or other suitable materials in good condition to support the Charity Shop.</p>
                    </div>
                    <div className="space-y-4 text-center">
                        <Heading level={3} className="text-xl font-bold text-gray-900">VISIT THE SHOP</Heading>
                        <p className="text-gray-700">Visit the Charity Shop in Nsambya and discover the items currently available.</p>
                    </div>
                    <div className="space-y-4 text-center">
                        <Heading level={3} className="text-xl font-bold text-gray-900">SPREAD THE WORD</Heading>
                        <p className="text-gray-700">Tell others about the Charity Shop and help more people discover this initiative.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
