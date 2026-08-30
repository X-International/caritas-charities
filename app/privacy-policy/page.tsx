import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Caritas Kampala’s Charity Office",
  description:
    "How we collect, use, protect, and manage information provided through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Privacy Policy"
          description="How we collect, use, protect, and manage information provided through this website."
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "PRIVACY POLICY" }
          ]}
        />

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            The Charity Office under Caritas Kampala respects your privacy and is committed to handling personal information responsibly and in accordance with applicable data protection laws in Uganda.
          </p>
          <p>
            This Privacy Policy explains what information we may collect through this website, why we collect it, how it may be used and shared, how we protect it, and the choices and rights available to you.
          </p>

          <Heading level={2} variant="card" color="red">Information We May Collect</Heading>
          <p>
            We may collect personal information when you choose to provide it through this website. Depending on how you interact with us, this may include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>your name;</li>
            <li>telephone number;</li>
            <li>email address;</li>
            <li>organisation or institution;</li>
            <li>information submitted through contact, volunteer, partnership, donation enquiry, or other forms;</li>
            <li>messages, questions, or other information you send to us.</li>
          </ul>

          <Heading level={2} variant="card" color="red">Why We Collect Information</Heading>
          <p>
            We may use personal information provided through this website to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>respond to enquiries and requests;</li>
            <li>process volunteer or partnership enquiries;</li>
            <li>provide information about our programmes, activities, events, or ways to support our work;</li>
            <li>follow up on messages submitted through website forms;</li>
            <li>maintain the security and proper operation of the website;</li>
            <li>comply with legal, regulatory, or administrative requirements where applicable.</li>
          </ul>
          <p>
            We will not use personal information for purposes that are unrelated to the reason it was collected unless we have a lawful basis to do so.
          </p>

          <Heading level={2} variant="card" color="red">How We Collect Information</Heading>
          <p>
            Most personal information is collected directly from you when you submit a form, send us a message, contact the Charity Office, or otherwise choose to provide information through this website.
          </p>

          <Heading level={2} variant="card" color="red">Legal Basis for Processing</Heading>
          <p>
            We process personal information only where there is a lawful and appropriate basis for doing so. Depending on the circumstances, this may include your consent, the need to respond to a request you have made, the performance of our legitimate charitable and administrative activities, compliance with a legal obligation, or another basis permitted by applicable law.
          </p>

          <Heading level={2} variant="card" color="red">How We Use and Share Information</Heading>
          <p>
            Personal information is used only for legitimate purposes connected with the work and administration of the Charity Office.
          </p>
          <p>
            We do not sell personal information.
          </p>
          <p>
            Information may be shared only where reasonably necessary with authorised staff, service providers, Caritas Kampala, or other parties involved in providing a service or responding to your request.
          </p>
          <p>
            We may also disclose information where required by law, regulation, court order, or another lawful authority.
          </p>
          <p>
            Where third-party service providers process personal information on our behalf, they should only receive the information necessary to perform the relevant service and are expected to handle it appropriately and securely.
          </p>

          <Heading level={2} variant="card" color="red">Donations and Payment Information</Heading>
          <p>
            Where this website directs visitors to official donation or payment channels, payment information may be processed by the relevant bank, mobile money provider, payment platform, or other authorised service provider.
          </p>
          <p>
            The Charity Office should not receive or store sensitive payment credentials such as card PINs or mobile money PINs through ordinary website forms.
          </p>
          <p>
            The privacy practices of third-party payment providers are governed by their own terms and privacy policies.
          </p>

          <Heading level={2} variant="card" color="red">How We Protect Personal Information</Heading>
          <p>
            We take reasonable administrative, organisational, and technical measures to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.
          </p>
          <p>
            However, no method of transmitting or storing information electronically can be guaranteed to be completely secure. Users should therefore avoid submitting highly sensitive information through ordinary website forms unless specifically requested through an approved and secure process.
          </p>

          <Heading level={2} variant="card" color="red">How Long We Keep Information</Heading>
          <p>
            We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to meet administrative or operational needs, or to comply with applicable legal and regulatory requirements.
          </p>
          <p>
            When personal information is no longer required, it should be securely deleted, anonymised, or otherwise disposed of in an appropriate manner.
          </p>

          <Heading level={2} variant="card" color="red">Your Rights</Heading>
          <p>
            Subject to applicable law, you may have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>request access to personal information held about you;</li>
            <li>request correction of information that is inaccurate or incomplete;</li>
            <li>ask for information about how your personal data is being used;</li>
            <li>object to or request restriction of certain processing where permitted;</li>
            <li>request deletion of personal information where there is no lawful reason to continue keeping it;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>raise a concern about the way your personal information has been handled.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact the Charity Office using the details provided on our <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">Contact Us</Link> page.
          </p>

          <Heading level={2} variant="card" color="red">Children&apos;s Privacy</Heading>
          <p>
            The Charity Office works with children and other vulnerable persons in some of its programmes and takes safeguarding and privacy seriously.
          </p>
          <p>
            This website is not intended to collect unnecessary personal information from children. Where information relating to a child is required for a legitimate programme, safeguarding, administrative, or legal purpose, it should be handled with appropriate care and in accordance with applicable law and safeguarding procedures.
          </p>
          <p>
            Children should not submit personal or sensitive information through this website without appropriate guidance or consent from a parent, guardian, or responsible adult where required.
          </p>

          <Heading level={2} variant="card" color="red">Photographs, Stories, and Media</Heading>
          <p>
            Photographs, videos, testimonials, and stories published on this website may include people who take part in our programmes, events, or community activities.
          </p>
          <p>
            We aim to use such material respectfully and in accordance with appropriate consent, safeguarding, privacy, and communications procedures, particularly where children or vulnerable persons are involved.
          </p>
          <p>
            If you have a concern about an image, story, or other personal information published on this website, please contact us so that the matter can be reviewed.
          </p>

          <Heading level={2} variant="card" color="red">External Websites</Heading>
          <p>
            This website may contain links to external websites operated by third parties.
          </p>
          <p>
            The Charity Office and Caritas Kampala are not responsible for the privacy practices, security, or content of those external websites. We encourage visitors to review the privacy policies of any third-party website they choose to visit.
          </p>

          <Heading level={2} variant="card" color="red">Data Breaches</Heading>
          <p>
            If we become aware of a personal data breach that may compromise personal information, we will take reasonable steps to investigate, contain, and address the incident and will make any notifications required under applicable law.
          </p>

          <Heading level={2} variant="card" color="red">Changes to This Privacy Policy</Heading>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to this website, our practices, or applicable legal and regulatory requirements.
          </p>
          <p>
            Any updated version will be published on this page with a revised &quot;Last updated&quot; date.
          </p>

          <Heading level={2} variant="card" color="red">Contact Us About Privacy</Heading>
          <p>
            If you have questions, concerns, or requests relating to privacy or the way your personal information is handled, please contact the Charity Office through the details provided on our <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">Contact Us</Link> page.
          </p>

          <Heading level={2} variant="card" color="red">Data Protection Authority</Heading>
          <p>
            If you believe that your personal data has been handled in a way that does not comply with applicable data protection law, you may also have the right to raise a complaint with Uganda&apos;s Personal Data Protection Office.
          </p>

          <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
            Last updated: August 28th, 2026
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
