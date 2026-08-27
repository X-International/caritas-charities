import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Chaconet Partners | Caritas Kampala Charities Office",
  description:
    "Meet the Chaconet partners working together to support children, families, older people and vulnerable communities across the Kampala Archdiocese.",
  path: "/about-us/chaconet-partners",
});

const partners = [
  {
    name: "Good Samaritans & Prisons Fraternity",
    description:
      "Serving people in need with compassion and care, the Good Samaritans & Prisons Fraternity supports vulnerable communities through charitable and social services.",
    url: "https://www.africa2trust.com/B2BAfrica/uganda/non-government-organization-ngo/ngos-charities-and-non-profits-general/good-samaritan-kampala-archdiocese/Profile/AboutUs/1/1/24617/3",
    image: "/images/logos/good-samaritan-placeholder.png",
  },
  {
    name: "Child Welfare and Adoption Society (CWAS)",
    description:
      "Supporting the welfare and protection of children and families through care, protection, advocacy and community support.",
    url: "https://cwasug.org/",
    image: "/images/logos/cwas-placeholder.png",
    includes: [
      { name: "Nsambya Babies Home", url: "https://www.cwasug.org/nbh/home-nsambya.php" },
      { name: "Kankobe Children’s Home", url: "https://www.cwasug.org/kch/home-kankobe.php" },
      { name: "Nateete Family Group", url: "https://cwasug.org/nfg/home-nateete.php" },
    ],
  },
  {
    name: "Mapeera Bakateyamba Home",
    description:
      "A home providing care, support and a safe environment for people in need, with a commitment to dignity, compassion and community.",
    url: "https://www.facebook.com/p/Mapeera-Bakateyambas-Home-100080494298138/",
    image: "/images/logos/mapeera-placeholder.png",
  },
  {
    name: "Missionaries of the Poor",
    description:
      "Serving people living in poverty and those most in need through compassionate care, service and solidarity.",
    url: "https://missionariesofthepoor.org/",
    image: "/images/logos/ministries-poor-placeholder.png",
  },
  {
    name: "Teresa Ministries",
    description:
      "Continuing a mission of compassionate service to people who are poor, vulnerable, sick and in need of care.",
    url: "https://www.teresaministriesug.org/",
    image: "/images/logos/teresa-ministries-placeholder.png",
  },
  {
    name: "Kyasira Home of Hope",
    description:
      "A place of care, hope and support for vulnerable children and families.",
    url: "https://www.facebook.com/Kyasirahomeofhope/",
    image: "/images/logos/kyasira-home-placeholder.png",
  },
  {
    name: "Mulago School for the Deaf",
    description:
      "Providing specialised education and support for children with hearing impairments to help them thrive and reach their potential.",
    url: "#",
    image: "/images/logos/mulago-deaf-placeholder.png",
  },
];

export default function ChaconetPartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Chaconet Partners"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about-us" },
            { label: "CHACONET PARTNERS" },
          ]}
          description="Working together in faith and solidarity to serve the most vulnerable in our communities."
        />

        {/* What is Chaconet? */}
        <section className="site-container py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
              What is Chaconet?
            </Heading>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Chaconet (Catholic Charity Homes Network) is an initiative under Caritas Kampala that brings together registered Catholic charity homes, disability centres, elderly homes and rehabilitation facilities across the Kampala Archdiocese.
              </p>
              <p>
                By coordinating resources, promoting policy compliance and strengthening fundraising support, Chaconet helps participating homes uphold high standards of care and protection while promoting dignity, wellbeing and hope for every person they serve.
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <Heading level={2} className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
                Working Together for Better Care
              </Heading>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Through CHACONET, the Charities Office works with Catholic charity homes and institutions across the Kampala Archdiocese to strengthen services for vulnerable people.
                </p>
                <p>
                  The network provides a platform for members to share resources, strengthen collaboration and improve the quality of care provided to the people and communities they serve.
                </p>
                <p className="font-medium">
                  Established in 2024, CHACONET strengthens cooperation between the Charities Office and participating charity homes and institutions across the Kampala Archdiocese.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="site-container py-16 sm:py-20 bg-gray-50">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Heading level={2} className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
                Our Chaconet Partners
              </Heading>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Chaconet brings together organisations and homes serving children, families, older people and people living with disabilities across the Kampala Archdiocese.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <Card key={partner.name} variant="content" className="flex flex-col space-y-4">
                  <div className="flex-1 space-y-4">
                    {/* Placeholder for partner logo */}
                    <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-gray-400 text-sm font-medium">Logo Placeholder</span>
                    </div>
                    <Heading level={3} className="text-base font-bold text-gray-900 font-serif">
                      {partner.name}
                    </Heading>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {partner.description}
                    </p>
                    {partner.includes && (
                      <div className="text-sm space-y-2">
                        <span className="font-bold text-gray-900">Includes:</span>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {partner.includes.map((item) => (
                            <li key={item.name}>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#b10017] hover:underline">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <Button
                      href={partner.url}
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MORE INFO
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
