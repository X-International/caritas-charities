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
        { name: "Who We Are", href: "/about-us/our-story", desc: "Learn who we are and the mission that inspires our work." },
        { name: "Our Vision, Mission & Values", href: "/about-us/our-story", desc: "Discover the principles that guide every act of service." },
        { name: "Our Team", href: "/about-us/our-team", desc: "Meet the dedicated people serving our communities with compassion." },
      ],
      card: {
        title: "About Caritas Kampala",
        description: "Serving the Archdiocese of Kampala by bringing hope, compassion, and practical support to vulnerable individuals, families, and communities.",
        image: "/images/Main Slider/Caritas_Kampala_18.jpg",
        cta: { label: "Discover Our Story", href: "/about-us/our-story" },
      },
    },
  },
  {
    name: "Our Programmes",
    href: "/our-programmes",
  },
  {
    name: "Resources",
    href: "/resources/news",
    megaMenu: {
      links: [
        { name: "News & Updates", href: "/resources/news", desc: "Stay informed with our latest news, stories, and announcements." },
        { name: "Gallery", href: "/resources/gallery", desc: "Explore moments of hope through photos from our community work." },
        { name: "Annual Reports", href: "/resources/annual-reports", desc: "View our reports, achievements, and organizational impact." },
        { name: "FAQs", href: "/resources/faqs", desc: "Find answers to the questions we are asked most often." },
      ],
      card: {
        title: "News & Resources",
        description: "Learn more about Caritas Kampala through stories, publications, reports, and moments that reflect our ongoing mission of compassion and service.",
        image: "/images/Main Slider/Caritas_Kampala_90.jpg",
        cta: { label: "View All Resources", href: "/resources/news" },
      },
    },
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    megaMenu: {
      links: [
        { name: "Volunteer", href: "/get-involved/volunteer", desc: "See how you can offer your time and skills to support our work." },
        { name: "Charity Shop", href: "/get-involved/charity-shop", desc: "Shop or donate goods to support our cause." },
      ],
      card: {
        title: "Get Involved with Caritas Kampala",
        description: "Explore opportunities to share your time, skills, and compassion with the people who need it most.",
        image: "/images/Main Slider/Caritas_Kampala_07.jpg",
        cta: { label: "Explore Opportunities", href: "/get-involved" },
      },
    },
  },
  { name: "Contact Us", href: "/contact-us" },
];
