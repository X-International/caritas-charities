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
        { name: "Our Vision, Mission & Values", desc: "Discover the principles that guide every act of service." },
        { name: "Our Team", desc: "Meet the dedicated people serving our communities with compassion." },
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
    megaMenu: {
      links: [
        { name: "Emergency & Disaster Response", desc: "Responding quickly to emergencies with life-saving relief and support." },
        { name: "Support for the Elderly", desc: "Caring for older people through compassionate, ongoing community support." },
        { name: "Family & Child Support", desc: "Strengthening families and giving children the opportunity to thrive." },
        { name: "Refugee & Asylum Seeker Support", desc: "Helping displaced people rebuild their lives with dignity and hope." },
        { name: "Disability & Special Needs Support", desc: "Promoting dignity, inclusion, and care for people with special needs." },
        { name: "Poverty Alleviation & Livelihoods", desc: "Empowering families to achieve sustainable and independent livelihoods." },
      ],
      card: {
        title: "Transforming Lives Together",
        description: "Discover how Caritas Kampala responds to urgent needs while building stronger, more resilient communities through compassionate action.",
        image: "/images/Main Slider/Caritas_Kampala_92.jpg",
        cta: { label: "Support Our Work" },
      },
    },
  },
  {
    name: "Resources",
    megaMenu: {
      links: [
        { name: "News & Updates", href: "/resources/news", desc: "Stay informed with our latest news, stories, and announcements." },
        { name: "Gallery", href: "/resources/gallery", desc: "Explore moments of hope through photos from our community work." },
        { name: "Annual Reports", desc: "View our reports, achievements, and organizational impact." },
        { name: "FAQs", desc: "Find answers to the questions we are asked most often." },
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
