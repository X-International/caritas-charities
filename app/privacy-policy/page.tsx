import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Caritas Kampala Charities Office",
  description:
    "How the Charities Office collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white section-lg">
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
            <Heading level={1} variant="page" color="white">
              Privacy Policy
            </Heading>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Caritas Kampala Charities Office is committed to respecting and protecting the privacy of our supporters, beneficiaries, volunteers, and website visitors.
          </p>
          <Heading level={2} variant="card" color="red">Information Collection &amp; Use</Heading>
          <p>
            We collect personal information (such as name, email address, phone number) only when voluntarily submitted through our contact forms, newsletter subscription, or donation enquiries. This information is strictly used to communicate regarding your requests and our charitable activities.
          </p>
          <Heading level={2} variant="card" color="red">Data Protection</Heading>
          <p>
            We do not sell, rent, or trade personal data to third parties. All collected data is handled securely in accordance with applicable data protection laws.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
