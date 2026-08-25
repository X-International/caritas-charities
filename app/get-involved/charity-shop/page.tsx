import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Charity Shop | Caritas Kampala Charities Office",
  description:
    "Shop or donate goods to support the work of the Charities Office. Every purchase helps families across the Archdiocese.",
  alternates: { canonical: "/get-involved/charity-shop" },
};

export default function CharityShopPage() {
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
                { label: "GET INVOLVED", href: "/get-involved" },
                { label: "CHARITY SHOP" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Charity Shop
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-lg sm:text-xl text-gray-600 font-sans">
            Content coming soon.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
