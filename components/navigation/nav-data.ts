export type SubLink = { name: string; href?: string; desc?: string };

export type MegaMenuCard = {
  title: string;
  description: string;
  image: string;
  cta: { label: string; href?: string };
};

export type NavLink = {
  name: string;
  href?: string;
  megaMenu?: { links: SubLink[]; card: MegaMenuCard };
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    megaMenu: {
      links: [
        { name: "Who We Are", href: "/about-us", desc: "Learn about the Charities Office, its mission, values, and place under Caritas Kampala." },
        { name: "Our Team", href: "/about-us/our-team", desc: "Meet the people leading and carrying out the work of the Charities Office." },
        { name: "Chaconet Network", href: "/about-us/chaconet-partners", desc: "Discover the network of charity homes and institutions working together across the Archdiocese of Kampala." },
      ],
      card: {
        title: "About Caritas Kampala",
        description: "Serving the Kampala Archdiocese by bringing hope, compassion, and practical support to vulnerable individuals, families, and communities.",
        image: "/images/Main Slider/Caritas_Kampala_18.jpg",
        cta: { label: "Discover Our Story", href: "/about-us" },
      },
    },
  },
  {
    name: "Our Programmes",
    href: "/our-programmes",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    megaMenu: {
      links: [
        { name: "Volunteer", href: "/get-involved/volunteer", desc: "Give your time and skills to support practical work across our communities." },
        { name: "Partnerships", href: "/get-involved/partnerships", desc: "Explore ways your organisation can work with the Charities Office to support vulnerable communities." },
        { name: "Charity Shop", href: "/get-involved/charity-shop", desc: "Visit our second-hand Charity Shop or donate suitable items to support our work." },
      ],
      card: {
        title: "Get Involved with Caritas Kampala",
        description: "Explore opportunities to share your time, skills, and compassion with the people who need it most.",
        image: "/images/Main Slider/Caritas_Kampala_07.jpg",
        cta: { label: "Explore Opportunities", href: "/get-involved" },
      },
    },
  },
  {
    name: "Resources",
    href: "/resources/news",
    megaMenu: {
      links: [
        { name: "News & Updates", href: "/resources/news", desc: "Read the latest news, announcements, and updates from the Charities Office." },
        { name: "Events", href: "/resources/events", desc: "See upcoming events, meetings, and opportunities to take part." },
        { name: "Success Stories", href: "/resources/success-stories", desc: "Read real stories that show the impact of our work in people's lives and communities." },
        { name: "Gallery", href: "/resources/gallery", desc: "Explore photos from our programmes, events, and community activities." },
        { name: "Annual Reports", href: "/resources/annual-reports", desc: "View reports on our work, progress, and organisational activities." },
        { name: "FAQs", href: "/resources/faqs", desc: "Find clear answers to common questions about our work and how to get involved." },
      ],
      card: {
        title: "News & Resources",
        description: "Learn more about Caritas Kampala through stories, publications, reports, and moments that reflect our ongoing mission of compassion and service.",
        image: "/images/Main Slider/Caritas_Kampala_90.jpg",
        cta: { label: "View All Resources", href: "/resources/news" },
      },
    },
  },
  { name: "Contact Us", href: "/contact-us" },
];
