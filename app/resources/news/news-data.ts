export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  region: string;
  snippet: string;
  image: string;
  alt: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "kotido-moroto-famine-relief-drive",
    title: "Kotido & Moroto Famine Relief Drive Mobilizes Parishes",
    date: "28 Jul 2026",
    category: "Emergency Appeal",
    snippet:
      "Parishes across the Archdiocese of Kampala are collecting food and relief items for families facing famine in Kotido and Moroto.",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg",
    alt: "Caritas Kampala representatives and partners at a famine relief mobilisation event",
    body: [
      "Parishes across the Archdiocese of Kampala are working together to gather food and relief items for families affected by famine in Kotido and Moroto.",
      "The drive is part of a wider emergency response effort, bringing together parish communities, volunteers, and supporters who want to stand with families facing urgent need.",
    ],
  },
  {
    slug: "charities-department-launches-new-website",
    title: "The Charities Department Launches Its New Website",
    date: "02 Aug 2026",
    category: "Announcement",
    snippet:
      "A new online home for the Charities Department, sharing our work, our network, and how you can help.",
    image: "/images/Event 02/Caritas_Kampala_98.jpg",
    alt: "Caritas Kampala community gathering with church leaders and staff during a public event",
    body: [
      "The new website brings the Charities Department online with clearer access to stories, programmes, and ways to support our work.",
      "It is designed to make it easier for people to learn about Caritas Kampala, follow our updates, and connect with the department when they need to.",
    ],
  },
  {
    slug: "getting-to-know-chaconet-our-network-of-nine-charity-homes",
    title: "Getting to Know Chaconet, Our Network of Nine Charity Homes",
    date: "30 Jul 2026",
    category: "Partnership",
    snippet:
      "A closer look at Chaconet, the network of charity homes working together across the Archdiocese of Kampala.",
    image: "/images/Event 02/Caritas_Kampala_92.jpg",
    alt: "Caritas Kampala staff and partners gathered at a formal Chaconet network event",
    body: [
      "Chaconet brings together nine charity homes that work in partnership across the Archdiocese of Kampala.",
      "The network strengthens collaboration, shared learning, and coordinated care for the communities and homes it serves.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
