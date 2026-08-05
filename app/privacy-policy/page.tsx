import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Caritas Kampala",
  description:
    "Privacy Policy for Caritas Kampala website visitors, donors, and partners.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
                <li aria-current="page" className="text-red-200">PRIVACY POLICY</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Caritas Kampala is committed to respecting and protecting the privacy of our supporters, beneficiaries, volunteers, and website visitors.
          </p>
          <h2 className="text-xl font-serif font-bold text-[#b10017]">Information Collection &amp; Use</h2>
          <p>
            We collect personal information (such as name, email address, phone number) only when voluntarily submitted through our contact forms, newsletter subscription, or donation enquiries. This information is strictly used to communicate regarding your requests and our charitable activities.
          </p>
          <h2 className="text-xl font-serif font-bold text-[#b10017]">Data Protection</h2>
          <p>
            We do not sell, rent, or trade personal data to third parties. All collected data is handled securely in accordance with applicable data protection laws.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
