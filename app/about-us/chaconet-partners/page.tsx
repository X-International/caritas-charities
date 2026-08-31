import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import ImageSlider, { type SliderSlide } from "@/components/ImageSlider";
import { ExternalLink } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Chaconet Network | Caritas Kampala’s Charity Office",
  description:
    "A network of Catholic charity homes and institutions working together across Kampala Archdiocese.",
  path: "/about-us/chaconet-partners",
});

type Partner = {
  name: string;
  description: string;
  extraDescription?: string;
  url?: string;
  urlLabel?: string;
  includes?: { name: string; desc?: string; url?: string }[];
};

const partners: Partner[] = [
  {
    name: "Good Samaritan Kampala Archdiocese",
    description:
      "A Catholic ministry of Kampala Archdiocese supporting people in need through practical works of charity, including food assistance, care for sick and older people, support for people with disabilities, shelter, clothing, and outreach to prisoners.",
    extraDescription:
      "The ministry was introduced across the Archdiocese in 2007, following the resolutions of the 2005 AMECEA assembly, and is organised parish by parish so that support reaches people close to where they live. Its work is sustained largely by parishioners through donations, gifts in kind, and small parish income projects.",
    url: "https://www.africa2trust.com/B2BAfrica/uganda/non-government-organization-ngo/ngos-charities-and-non-profits-general/good-samaritan-kampala-archdiocese/Profile/AboutUs/1/1/24617/3",
    urlLabel: "Learn More",
  },
  {
    name: "Child Welfare and Adoption Society (CWAS)",
    description:
      "A charitable organisation providing care and protection for children through a network of specialised homes, while working to help children grow toward safe, responsible and independent adulthood.",
    url: "https://cwasug.org/",
    urlLabel: "Visit CWAS",
    includes: [
      { name: "Nsambya Babies Home", desc: "Care for babies and young children aged 0–5 years.", url: "https://www.cwasug.org/nbh/home-nsambya.php" },
      { name: "Kankobe Children’s Home", desc: "Care for children aged 6–14 years.", url: "https://www.cwasug.org/kch/home-kankobe.php" },
      { name: "Nateete Family Group", desc: "Care and support for young people aged 15–18 years.", url: "https://cwasug.org/nfg/home-nateete.php" },
    ],
  },
  {
    name: "Mapeera Bakateyamba’s Home",
    description:
      "A residential charity home in Nalukolongo providing care, shelter and practical support for vulnerable older people and people with disabilities.",
    extraDescription:
      "Founded in 1978 by the late Emmanuel Cardinal Kiwanuka Nsubuga and run by the Good Samaritan Sisters of Nalukolongo, the home offers accommodation, meals, nursing attention and daily companionship to residents who are elderly, blind, living with disability, or without family support. Much of its daily provision depends on donations of food, clothing and household essentials.",
    url: "https://www.facebook.com/p/Mapeera-Bakateyambas-Home-100080494298138/",
    urlLabel: "Visit Page",
  },
  {
    name: "Missionaries of the Poor",
    description:
      "A Catholic religious community dedicated to serving people experiencing severe poverty and vulnerability through compassionate, faith-based care and practical service.",
    url: "https://missionariesofthepoor.org/",
    urlLabel: "Visit Website",
  },
  {
    name: "Teresa Ministries Uganda",
    description:
      "A charitable ministry providing residential care and protection for vulnerable infants and children, alongside counselling, education support and community outreach for people and families experiencing hardship.",
    url: "https://www.teresaministriesug.org/",
    urlLabel: "Visit Website",
  },
  {
    name: "Kyasira Home of Hope",
    description:
      "A children’s home within Kampala Archdiocese providing residential care, protection and practical support for vulnerable children who need a safe and supportive home environment.",
    url: "https://www.facebook.com/Kyasirahomeofhope/",
    urlLabel: "Visit Page",
  },
  {
    name: "Mulago School for the Deaf",
    description:
      "Provides specialised education and support for deaf and hard-of-hearing children, helping learners participate in education and develop their abilities.",
    url: "https://ugandanspiritans.org/mulago-school-for-the-deaf/",
    urlLabel: "Visit Website",
  },
];

const introSlides: SliderSlide[] = [
  {
    id: "chaconet-home-visit",
    image: "/images/Charities/Caritas_Kampala_87.jpg",
    alt: "Children, sisters and staff of a Catholic children’s home gathered during a Charity Office visit",
  },
  {
    id: "kankobe-welcome",
    image: "/images/Charities/Caritas_Kampala_82.jpg",
    alt: "Children, staff and Charity Office visitors gathered under the welcome sign at Kankobe Children’s Home",
  },
  {
    id: "chaconet-gathering",
    image: "/images/Event 02/Caritas_Kampala_92.jpg",
    alt: "Participants gathered at a Chaconet network event within Kampala Archdiocese",
  },
  {
    id: "chaconet-outreach",
    image: "/images/Event 02/Caritas_Kampala_07.jpg",
    alt: "Charity Office staff and partners taking part in a Chaconet outreach activity",
  },
];

export default function ChaconetPartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Chaconet Network"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Chaconet Network" },
          ]}
          description="A network of Catholic charity homes and institutions working together across Kampala Archdiocese."
        />

        {/* Introduction */}
        <section className="site-container py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">
            <div className="text-left space-y-6 sm:space-y-8 max-w-[620px]">
              <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-[#b10017]">
                Working Together Through Chaconet
              </Heading>
              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-[1.7]">
                <p>
                  Chaconet (the Catholic Charity Homes Network) brings together charity homes and institutions connected with Kampala Archdiocese to strengthen coordination, share experience, and support the care of vulnerable people.
                </p>
                <p>
                  Through the network, participating homes can collaborate on common needs, learn from one another, strengthen standards of care and safeguarding, and build stronger relationships with the Charity Office and other partners.
                </p>
                <p>
                  The network includes organisations serving children, older people, people with disabilities, families in difficulty, and others who need residential, pastoral, social, or practical support.
                </p>
              </div>
            </div>

            <ImageSlider
              slides={introSlides}
              label="Photos from Chaconet charity homes and activities"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 sm:py-20 bg-[#ebe3d7]">
          <div className="site-container space-y-12 sm:space-y-14">
            <div className="text-center space-y-4">
              <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-[#b10017]">
                Our Chaconet Partners
              </Heading>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Meet the charity homes and organisations that form part of the Chaconet network across Kampala Archdiocese.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="group flex flex-col h-full bg-white border border-[#e2d9c8] rounded-2xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-[border-color,box-shadow] duration-150 hover:border-[#b10017]/60 hover:shadow-[0_4px_14px_rgba(17,17,17,0.08)] focus-within:border-[#b10017]/60"
                >
                  <Heading
                    level={3}
                    className="text-[22px] sm:text-[26px] lg:text-[27px] font-serif font-bold text-[#b10017] leading-snug"
                  >
                    {partner.name}
                  </Heading>

                  <p className="mt-3 sm:mt-4 text-[15px] sm:text-base text-gray-700 leading-[1.62]">
                    {partner.description}
                  </p>

                  {partner.extraDescription && (
                    <p className="mt-3 text-[15px] sm:text-base text-gray-700 leading-[1.62]">
                      {partner.extraDescription}
                    </p>
                  )}

                  {partner.includes && (
                    <div className="mt-5 sm:mt-6 space-y-3">
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#b10017] font-sans">
                        Includes
                      </p>
                      <ul className="space-y-3 text-[14px] sm:text-[15px]">
                        {partner.includes.map((item) => (
                          <li key={item.name} className="space-y-0.5 leading-relaxed">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#b10017] hover:text-[#8e0a20] hover:underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 inline-flex items-center gap-1"
                                aria-label={`${item.name}, opens external site in a new tab`}
                              >
                                <span>{item.name}</span>
                                <ExternalLink
                                  className="w-3.5 h-3.5 relative -top-[1px] shrink-0"
                                  aria-hidden="true"
                                />
                              </a>
                            ) : (
                              <span className="font-semibold text-gray-900">{item.name}</span>
                            )}
                            {item.desc && (
                              <p className="text-gray-700">{item.desc}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {partner.url && partner.urlLabel && (
                    <div className="mt-auto pt-5 sm:pt-6">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b10017] hover:text-[#8e0a20] hover:underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2"
                        aria-label={`${partner.urlLabel} for ${partner.name}, opens external site in a new tab`}
                      >
                        <span>{partner.urlLabel}</span>
                        <ExternalLink
                          className="w-3.5 h-3.5 relative -top-[1px]"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Support Our Work CTA */}
        <section className="site-container py-10 sm:py-12">
          <div className="bg-[#fbf8f3] rounded-subcard p-6 sm:p-8 md:p-10 lg:p-12 border border-[#efe7d6] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            <div className="space-y-3 lg:max-w-2xl">
              <Heading level={2} className="text-2xl sm:text-3xl font-serif font-bold text-[#b10017]">
                Support Our Work
              </Heading>
              <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed">
                Your gift helps the Charity Office provide practical support to vulnerable individuals, families, and communities across Kampala Archdiocese.
              </p>
            </div>
            <div className="lg:flex-shrink-0">
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                className="min-w-[150px] w-full sm:w-auto justify-center"
              >
                DONATE
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
