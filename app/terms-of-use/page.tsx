import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Terms of Use | Caritas Kampala Charities Office",
  description: "Please read these terms carefully before using the Charities Office website.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Terms of Use"
          description="Please read these terms carefully before using the Charities Office website."
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "TERMS OF USE" }
          ]}
        />

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to the official website of the Charities Office under Caritas Kampala. By accessing or using this website, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.
          </p>

          <Heading level={2} variant="card" color="red">About This Website</Heading>
          <p>
            This website provides information about the work, programmes, activities, resources, and ways to support the Charities Office under Caritas Kampala. We aim to keep the information on this website accurate and up to date, but we cannot guarantee that all content will always be complete, current, or free from errors.
          </p>

          <Heading level={2} variant="card" color="red">Use of Website Content</Heading>
          <p>
            Unless otherwise stated, the text, photographs, graphics, logos, documents, and other materials on this website are owned by or used with permission by Caritas Kampala and the Charities Office.
          </p>
          <p>
            You may view, download, print, or share website content for personal, educational, charitable, or other non-commercial purposes, provided that the content is not altered in a misleading way and appropriate credit is given where required.
          </p>
          <p>
            You may not reproduce, sell, license, republish, or use website content for commercial purposes without prior written permission.
          </p>

          <Heading level={2} variant="card" color="red">Use of the Caritas Name and Logo</Heading>
          <p>
            The Caritas name, logos, and related marks are protected identifiers and may not be copied, altered, reproduced, or used in a way that suggests endorsement, partnership, or affiliation without prior authorization.
          </p>

          <Heading level={2} variant="card" color="red">Acceptable Use</Heading>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not interfere with the rights of others or the operation and security of the website.
          </p>
          <p>
            You must not attempt to gain unauthorized access to the website, its systems, or data; introduce malicious code; misuse forms or other interactive features; or use the website in any way that could damage, disable, or disrupt its services.
          </p>

          <Heading level={2} variant="card" color="red">External Links</Heading>
          <p>
            This website may contain links to websites and services operated by third parties. These links are provided for convenience and information only.
          </p>
          <p>
            The Charities Office and Caritas Kampala do not control third-party websites and are not responsible for their content, availability, security, or privacy practices. Visiting an external website is at your own discretion and subject to that website&apos;s own terms and policies.
          </p>

          <Heading level={2} variant="card" color="red">Donations and Payments</Heading>
          <p>
            Any donation or payment information published on this website should be used only through the official giving channels provided by the Charities Office.
          </p>
          <p>
            Before sending funds, users should confirm that the payment details are current and official. The Charities Office is not responsible for payments made to unauthorized or fraudulent accounts, contacts, or platforms that are not officially published or confirmed by us.
          </p>

          <Heading level={2} variant="card" color="red">Forms and Information You Submit</Heading>
          <p>
            When you submit information through a contact, volunteer, partnership, or other website form, you are responsible for ensuring that the information you provide is accurate and lawful.
          </p>
          <p>
            Information submitted through this website will be handled in accordance with our Privacy Policy.
          </p>

          <Heading level={2} variant="card" color="red">No Professional Advice</Heading>
          <p>
            The information on this website is provided for general informational purposes only. It should not be treated as legal, financial, medical, or other professional advice.
          </p>
          <p>
            Where professional assistance is required, users should seek advice from an appropriately qualified person or service provider.
          </p>

          <Heading level={2} variant="card" color="red">Website Availability</Heading>
          <p>
            We aim to keep this website available and functioning properly, but we do not guarantee uninterrupted or error-free access.
          </p>
          <p>
            The website may occasionally be unavailable because of maintenance, technical issues, security updates, service interruptions, or circumstances beyond our control.
          </p>

          <Heading level={2} variant="card" color="red">Limitation of Liability</Heading>
          <p>
            To the extent permitted by applicable law, the Charities Office and Caritas Kampala will not be liable for loss or damage arising from the use of, or inability to use, this website or from reliance on information contained on it.
          </p>
          <p>
            Nothing in these Terms of Use is intended to exclude any responsibility that cannot lawfully be excluded.
          </p>

          <Heading level={2} variant="card" color="red">Privacy</Heading>
          <p>
            Your use of this website is also subject to our <Link href="/privacy-policy" className="text-[#b10017] hover:underline font-medium">Privacy Policy</Link>, which explains how information provided through the website may be collected, used, stored, and protected.
          </p>

          <Heading level={2} variant="card" color="red">Changes to These Terms</Heading>
          <p>
            We may update these Terms of Use from time to time to reflect changes to the website, our services, legal requirements, or operational practices.
          </p>
          <p>
            Any updated version will be published on this page and will take effect from the date of publication.
          </p>

          <Heading level={2} variant="card" color="red">Governing Law</Heading>
          <p>
            These Terms of Use are governed by the laws of the Republic of Uganda. Any dispute relating to the use of this website will be subject to the applicable laws and procedures of Uganda.
          </p>

          <Heading level={2} variant="card" color="red">Contact Us</Heading>
          <p>
            If you have questions about these Terms of Use or the use of this website, please contact the Charities Office through the details provided on our <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">Contact Us</Link> page.
          </p>

          <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
            Last updated: August 2026
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
