import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import Image from "next/image";
import { Heading, Eyebrow } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import DocumentActions from "@/components/documents/DocumentActions";
import { ANNUAL_NEEDS_2027 } from "@/lib/content/documents";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Annual Needs & Priorities | Caritas Kampala Charity Office",
  description:
    "Explore the annual priority needs, programme targets and resource requirements identified by the Charity Office of Caritas Kampala.",
  path: "/resources/annual-needs",
  robots: { index: true, follow: true },
});

const priorityAreas = [
  { number: "01", title: "Humanitarian Assistance, Health & Psychosocial Support" },
  { number: "02", title: "Education, Skills Development & Youth Empowerment" },
  { number: "03", title: "Livelihoods, Economic Empowerment & Self-Reliance" },
  { number: "04", title: "Community Engagement & Programme Delivery" },
  { number: "05", title: "Capacity Building, Training & Community Awareness" },
  { number: "06", title: "Monitoring, Evaluation, Accountability & Learning" },
  { number: "07", title: "Safeguarding & Protection" },
  { number: "08", title: "Programme Staff & Volunteer Support" },
  { number: "09", title: "Transport & Field Operations" },
  { number: "10", title: "Communication & Visibility" },
  { number: "11", title: "Office Equipment & ICT" },
  { number: "12", title: "Furniture & Office Fittings" },
  { number: "13", title: "Administration & Office Operations" },
  { number: "14", title: "Utilities" },
  { number: "15", title: "Insurance" },
  { number: "16", title: "Contingency & Emergency Reserve" },
];

export default function AnnualNeedsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Split Page Header */}
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "#" },
            { label: "Annual Needs & Priorities" },
          ]}
          eyebrow="PLANNING & PRIORITIES"
          title="Annual Needs & Priorities"
          description="Explore the priority needs, programme targets and resources identified for the Charity Office’s work."
          image="/images/Event 06/Caritas_Kampala_48.jpg"
          imageAlt="Caritas Kampala programme team gathered around a table planning priority needs and targets"
          imagePosition="center 35%"
          imagePositionDesktop="center 35%"
          imagePositionTablet="center 30%"
          imagePositionMobile="center 25%"
        />

        {/* Section: Editorial Introduction */}
        <section aria-labelledby="intro-heading" className="pt-[48px] pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 bg-white">
          <div className="site-container">
            <div className="mx-auto text-center">
              <Heading
                level={2}
                variant="section"
                color="red"
                id="intro-heading"
                className="text-[30px] leading-[1.18] sm:text-[34px] lg:text-[42px] font-serif font-extrabold tracking-tight max-w-[620px] mx-auto"
              >
                Responding to Identified Needs
              </Heading>
              <p className="mt-[16px] sm:mt-[20px] lg:mt-[20px] text-gray-700 text-base sm:text-lg lg:text-[18px] leading-[1.7] max-w-[740px] mx-auto font-sans">
                The Charity Office’s annual needs planning identifies priority areas for support, programme targets and the resources required to respond to those needs. The 2027 Needs List &amp; Needs-Based Budget supports planning, collaboration and resource mobilisation.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Key 2027 Figures (Compact Horizontal Band) */}
        <section aria-label="Key 2027 Planning Figures" className="border-y border-[#e8dfd1] bg-white py-0 sm:py-0 lg:py-[40px]">
          <div className="site-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
              {/* Figure 1: Parishes */}
              <div className="py-6 sm:py-8 lg:py-0 px-4 sm:px-6 flex flex-col justify-center items-center">
                <span className="font-serif font-bold text-[40px] leading-none sm:text-[44px] lg:text-[46px] text-[#b10017] tracking-tight mb-1.5">
                  78
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gray-700 font-sans">
                  PARISHES
                </span>
              </div>

              {/* Figure 2: Beneficiaries */}
              <div className="py-6 sm:py-8 lg:py-0 px-4 sm:px-6 flex flex-col justify-center items-center border-t sm:border-t-0 sm:border-l border-[#e8dfd1]">
                <span className="font-serif font-bold text-[34px] leading-none sm:text-[40px] lg:text-[44px] text-[#b10017] tracking-tight mb-1.5">
                  46,091
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gray-700 font-sans">
                  ESTIMATED DIRECT BENEFICIARIES
                </span>
              </div>

              {/* Figure 3: Programme Period */}
              <div className="py-6 sm:py-8 lg:py-0 px-4 sm:px-6 flex flex-col justify-center items-center border-t sm:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l border-[#e8dfd1]">
                <span className="font-serif font-bold text-[26px] leading-tight sm:text-[30px] lg:text-[34px] text-[#b10017] tracking-tight mb-1.5">
                  JAN–DEC 2027
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gray-700 font-sans">
                  PROGRAMME PERIOD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Featured Document Presentation */}
        <section aria-labelledby="featured-document-heading" className="pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-8 bg-[#faf8f5]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] gap-10 sm:gap-12 lg:gap-16 items-start">
              {/* Document Preview — mobile/tablet first */}
              <div className="w-full flex justify-center md:justify-start">
                <a
                  href={ANNUAL_NEEDS_2027.pdfUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the 2027 Needs List and Needs-Based Budget PDF in a new tab"
                  className="w-[68%] sm:w-[62%] md:w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b10017]"
                >
                  <Image
                    src="/images/Miscellany/new_cover.png"
                    alt="Cover of the Caritas Kampala Charity Office 2027 Needs List and Needs-Based Budget"
                    width={445}
                    height={462}
                    sizes="(max-width: 639px) 68vw, (max-width: 1023px) 62vw, 340px"
                    className="h-auto w-full rounded-2xl border border-[#ded4c0] shadow-[0_14px_30px_rgba(0,0,0,0.06),0_3px_8px_rgba(0,0,0,0.03)] transition-opacity hover:opacity-90"
                  />
                </a>
              </div>

              {/* Right Column: Featured Document Content & Actions */}
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-3">
                  <Eyebrow color="red">ANNUAL NEEDS DOCUMENT</Eyebrow>
                  <Heading
                    level={2}
                    variant="section"
                    color="dark"
                    id="featured-document-heading"
                    className="text-[28px] leading-[1.2] sm:text-[30px] lg:text-[34px] font-serif font-extrabold tracking-tight"
                  >
                    2027 Needs List &amp; Needs-Based Budget
                  </Heading>
                </div>

                <div className="space-y-4 text-gray-700 text-base sm:text-[17px] leading-[1.7] font-sans">
                  <p>{ANNUAL_NEEDS_2027.description}</p>
                  <p>{ANNUAL_NEEDS_2027.secondaryDescription}</p>
                </div>

                {/* Document Details Row */}
                <div className="pt-5 mt-1 border-t border-[#e6dccb] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  <div>
                    <span className="block text-gray-500 uppercase tracking-[0.16em] text-[10.5px] font-bold font-sans mb-1.5">
                      PROGRAMME PERIOD
                    </span>
                    <span className="font-serif font-semibold text-gray-900 text-lg sm:text-xl tracking-tight">
                      {ANNUAL_NEEDS_2027.period}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500 uppercase tracking-[0.16em] text-[10.5px] font-bold font-sans mb-1.5">
                      DOCUMENT FORMAT
                    </span>
                    <span className="font-serif font-semibold text-gray-900 text-lg sm:text-xl tracking-tight">
                      PDF
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <DocumentActions
                    pdfUrl={ANNUAL_NEEDS_2027.pdfUrl ?? ""}
                    viewLabel="VIEW ONLINE →"
                    downloadLabel="DOWNLOAD PDF"
                    viewAriaLabel="View the 2027 Needs List and Needs-Based Budget PDF in a new tab"
                    downloadAriaLabel="Download the 2027 Needs List and Needs-Based Budget PDF"
                    downloadFileName="Caritas_Kampala_2027_Needs_List.pdf"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Priority Areas */}
        <section aria-labelledby="priority-areas-heading" className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24 bg-white border-t border-[#e8dfd1]">
          <div className="site-container max-w-[1040px] mx-auto">
            <div className="max-w-[700px] mb-10 sm:mb-12 lg:mb-14 space-y-3">
              <Heading
                level={2}
                variant="section"
                color="red"
                id="priority-areas-heading"
                className="text-[30px] leading-[1.18] sm:text-[32px] lg:text-[38px] font-serif font-extrabold tracking-tight"
              >
                2027 Priority Areas
              </Heading>
              <p className="text-gray-700 text-base sm:text-[17px] leading-[1.7] font-sans">
                The Needs List groups identified requirements across programme delivery, direct support and the operational resources needed to carry out the work.
              </p>
            </div>

            {/* Sequential 2-col: LEFT = 01..08, RIGHT = 09..16; 1-col on mobile/tablet-narrow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
              <ol className="border-t border-[#e8dfd1]">
                {priorityAreas.slice(0, 8).map((item) => (
                  <li
                    key={item.number}
                    className="flex items-baseline gap-4 py-[15px] sm:py-[16px] lg:py-[16px] border-b border-[#e8dfd1]/80"
                  >
                    <span className="font-mono text-sm sm:text-base font-bold text-[#b10017] shrink-0 select-none tracking-wide">
                      {item.number}
                    </span>
                    <span className="text-gray-900 font-sans font-medium text-sm sm:text-[15px] lg:text-base leading-snug">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ol>
              <ol className="border-t border-[#e8dfd1] md:border-t">
                {priorityAreas.slice(8, 16).map((item) => (
                  <li
                    key={item.number}
                    className="flex items-baseline gap-4 py-[15px] sm:py-[16px] lg:py-[16px] border-b border-[#e8dfd1]/80"
                  >
                    <span className="font-mono text-sm sm:text-base font-bold text-[#b10017] shrink-0 select-none tracking-wide">
                      {item.number}
                    </span>
                    <span className="text-gray-900 font-sans font-medium text-sm sm:text-[15px] lg:text-base leading-snug">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section: Closing Contact Strip */}
        <section aria-labelledby="contact-strip-heading" className="bg-[#f4efe6] pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16 border-t border-[#e8dfd1]">
          <div className="site-container max-w-[760px] mx-auto text-center space-y-3.5 sm:space-y-4">
            <Eyebrow color="red">PARTNERSHIP &amp; SUPPORT</Eyebrow>
            <Heading
              level={2}
              variant="section"
              color="dark"
              id="contact-strip-heading"
              className="text-[26px] leading-[1.2] sm:text-[30px] lg:text-[36px] font-serif font-extrabold tracking-tight"
            >
              Questions About the 2027 Needs?
            </Heading>
            <p className="text-gray-700 text-base sm:text-[17px] leading-[1.7] max-w-[640px] mx-auto font-sans">
              For information about the Needs List, partnership opportunities or supporting identified priorities, please contact the Charity Office.
            </p>
            <div className="pt-3 sm:pt-4">
              <Button href="/contact-us" variant="primary" size="md">
                CONTACT US →
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
