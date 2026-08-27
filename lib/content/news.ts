export type HelpSection = {
  title: string;
  content: string[];
  buttonText: string;
  buttonLink: string;
};

export type ClosingPrompt = {
  body: string;
  buttons: { text: string; link: string }[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  region?: string;
  snippet: string;
  image: string;
  alt: string;
  body: string[];
  helpSection?: HelpSection;
  closingPrompt?: ClosingPrompt;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "kotido-moroto-famine-relief-drive",
    title: "Kotido & Moroto Famine Relief Drive Mobilizes Parishes",
    subtitle:
      "Parishes across the Kampala Archdiocese are collecting food and relief items for families facing famine in Kotido and Moroto.",
    date: "28 Jul 2026",
    category: "Emergency Appeal",
    region: "Karamoja",
    snippet:
      "Parishes across the Kampala Archdiocese are collecting food and relief items for families facing famine in Kotido and Moroto.",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg",
    alt: "Community members in Karamoja affected by the ongoing drought. Credit: Caritas Kampala.",
    body: [
      "Drought driven by climate change has brought famine to the Kotido and Moroto dioceses in the Karamoja region. The government has provided some emergency relief, but it has not been enough to meet the scale of the need.",
      "In response, the Kampala Archdiocese is calling on parishes across the Archdiocese to come together for the people of Karamoja. The collection drive began in July and will continue through September.",
      "In July, the first batch of support, including money and household items, was sent to Caritas Uganda, who delivered it to families in Kotido and Moroto. Collection continues now, with parishes gathering food and essential relief items to send in the coming months.",
      "The drive is focused on staple food items, including posho, maize flour, maize, rice, beans, sugar, and cooking oil. Contributions of money and household items are also welcome.",
      "This appeal is open to everyone, not only Catholics. Caritas does not discriminate based on religion, because hunger affects everyone the same way, regardless of their faith. While the Catholic Church is leading this initiative, the help itself is for anyone in Kotido and Moroto who needs it.",
      "As Matthew 25:35 says, \"For I was hungry and you gave me food.\" This is the same passage that guides the wider mission of the Charities Office, and it is why responding to hunger, wherever it is found, remains central to this work.",
    ],
    helpSection: {
      title: "How to Help",
      content: [
        "Donations of food, essential relief items, and other support materials can be dropped off at:",
        "Caritas Kampala Office",
        "Old Ggaba Road, Nsambya",
        "(next to the American Embassy)",
        "Kampala, Uganda",
        "You can also reach us by phone:",
        "- +256 762 506 906",
        "- +256 792 176 443",
        "- +256 392 176 443 (main office)",
      ],
      buttonText: "View Full Appeal Details →",
      buttonLink: "/current-appeal",
    },
  },
  {
    slug: "charities-office-launches-new-website",
    title: "The Charities Office Launches Its New Website",
    date: "02 Aug 2026",
    category: "Announcement",
    snippet:
      "A new online home for the Charities Office, sharing our work, our network, and how you can help.",
    image: "/images/Event 02/Caritas_Kampala_98.jpg",
    alt: "The Charities Office Lead speaking at a gathering. Credit: Caritas Kampala.",
    body: [
      "The Caritas Kampala Charities Office now has its own website, a dedicated space to share the work of the office with donors, partners, and the wider community across the Kampala Archdiocese.",
      "The new site brings together information that was previously scattered or difficult to find: our mission and values, the programmes we run, our place within the Chaconet network of charity homes, and the many ways people can support this work, whether through giving, volunteering, or partnership.",
      "Visitors can also find our latest news and appeals in one place, including our current relief drive for families affected by famine in Kotido and Moroto, alongside stories from the people and communities we work alongside.",
      "This website is part of Caritas Kampala and sits alongside the Archdiocese's main site, reflecting the Charities Office's own identity while remaining clearly connected to the wider Caritas Kampala family.",
      "We'll continue to add to this site over time, including more stories, programme details, and updates from our work. If there's something you'd like to see here, or a way you'd like to get involved, we'd love to hear from you.",
    ],
    closingPrompt: {
      body: "Explore the site, and get in touch if you have any questions.",
      buttons: [
        { text: "About Us →", link: "/about-us" },
        { text: "Get Involved →", link: "/get-involved" },
        { text: "Contact Us →", link: "/contact-us" },
      ],
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
