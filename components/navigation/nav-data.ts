export type SubLink = { name: string; href?: string; desc?: string };

export type MegaMenuCard = {
  title: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
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
        { name: "Who We Are", href: "/about-us/our-story", desc: "Our story, mission, and the values that guide everything we do." },
        { name: "Our Vision, Mission & Values", href: "/about-us/our-story#identity-title", desc: "The vision, mission, and values shaping our work." },
        { name: "Our Team", href: "/about-us/our-team", desc: "The people leading and carrying out this work every day." },
      ],
      card: {
        title: "About Us",
        description: "The Charities Department is one of Caritas Kampala's core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.",
        image: "/images/Main Slider/Caritas_Kampala_18.jpg",
        cta: { label: "Read Our Story", href: "/about-us" },
      },
    },
  },
  {
    name: "Our Programmes",
    href: "/our-programmes",
    megaMenu: {
      links: [
        { name: "Emergency & Disaster Response", href: "/our-programmes#emergency-disaster-response", desc: "Immediate help for families and communities affected by crisis." },
        { name: "Support for the Elderly", href: "/our-programmes#support-for-the-elderly", desc: "Practical, ongoing support for elderly people across the Archdiocese." },
        { name: "Family & Child Support", href: "/our-programmes#family-child-support", desc: "Helping families and children facing hardship find stability." },
        { name: "Refugee & Asylum Seeker Support", href: "/our-programmes#refugee-asylum-seeker-support", desc: "Practical assistance for urban refugees and asylum seekers." },
        { name: "Disability & Special Needs Support", href: "/our-programmes#disability-special-needs-support", desc: "Support for people living with disabilities and special medical needs." },
        { name: "Poverty Alleviation & Livelihoods", href: "/our-programmes#poverty-alleviation-livelihoods", desc: "Building sustainable livelihoods with individuals and families." },
      ],
      card: {
        title: "Our Programmes",
        description: "Practical humanitarian and community development programmes that restore dignity and strengthen lives.",
        image: "/images/Main Slider/Caritas_Kampala_92.jpg",
        cta: { label: "View All Programmes", href: "/our-programmes" },
      },
    },
  },
  {
    name: "Resources",
    megaMenu: {
      links: [
        { name: "News & Updates", href: "/resources/news", desc: "The latest updates and stories from our work." },
        { name: "Gallery", href: "/resources/gallery", desc: "Photos from our programmes and community work." },
        { name: "Annual Reports", href: "/resources/annual-reports", desc: "Reports on our work and impact." },
        { name: "FAQs", href: "/resources/faqs", desc: "Answers to common questions." },
      ],
      card: {
        title: "Resources",
        description: "Photos, videos, and the latest updates from our work across the Archdiocese of Kampala.",
        image: "/images/Main Slider/Caritas_Kampala_90.jpg",
        cta: { label: "Browse News", href: "/resources/news" },
      },
    },
  },
  { name: "Contact Us", href: "/contact-us" },
];
