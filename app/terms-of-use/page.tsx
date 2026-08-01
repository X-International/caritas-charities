import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use | Caritas Kampala",
  description:
    "Terms of Use for visiting and interacting with the Caritas Kampala website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">TERMS OF USE</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Terms of Use
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to the official website of Caritas Kampala Charities Department. By accessing or using this website, you agree to comply with and be bound by the following terms.
          </p>
          <h2 className="text-xl font-serif font-bold text-[#b10017]">Use of Materials</h2>
          <p>
            All content, images, articles, and brand logos on this website are the property of Caritas Kampala unless otherwise stated. Materials may be downloaded or shared for non-commercial, educational, and awareness purposes with proper attribution.
          </p>
          <h2 className="text-xl font-serif font-bold text-[#b10017]">External Links</h2>
          <p>
            This website may contain links to external third-party sites. Caritas Kampala is not responsible for the content or privacy practices of external web platforms.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
