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
        { name: "Our Story & Values", href: "/about-us/our-story", desc: "Our story, mission, and the values that guide everything we do." },
        { name: "Our Team", href: "/about-us/our-team", desc: "The people leading and carrying out this work every day." },
        { name: "Chaconet Partners", href: "/about-us/chaconet-partners", desc: "Working together with charity homes and partners across the Archdiocese." },
      ],
      card: {
        title: "About Us",
        description: "The Charities Department is one of Caritas Kampala's core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.",
        image: "/images/Main Slider/Caritas_Kampala_18.jpg",
        cta: { label: "Read Our Story", href: "/about-us" },
      },
    },
  },
  { name: "Our Programmes", href: "/our-programmes" },
  {
    name: "Resources",
    megaMenu: {
      links: [
        { name: "News & Updates", href: "/resources/news", desc: "The latest updates and stories from our work." },
        { name: "Gallery", href: "/resources/gallery", desc: "Photos from our programmes and community work." },
        { name: "Annual Reports", desc: "Reports on our work - coming soon." },
        { name: "FAQs", desc: "Answers to common questions" },
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
