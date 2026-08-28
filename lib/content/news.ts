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
        "Food, essential relief items, and other approved support materials can be delivered to the Charities Office.",
        "Caritas Kampala Office",
        "Old Ggaba Road, Nsambya",
        "(next to the American Embassy)",
        "Kampala, Uganda",
        "Appeal Line: +256 762 506 906",
        "Appeal Line (Alternate): +256 792 176 443",
        "Main Office: +256 392 176 443",
      ],
      buttonText: "VIEW CURRENT APPEAL →",
      buttonLink: "/current-appeal",
    },
  },
  {
    slug: "charities-office-launches-new-website",
    title: "The Charities Office Launches Its New Website",
    date: "28 Aug 2026",
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
  {
    slug: "breakfast-meeting-world-day-of-poor",
    title: "Charities Office Marks World Day of the Poor with First Breakfast Meeting",
    date: "14 Nov 2025",
    category: "Event",
    snippet:
      "The Charities Office, under Caritas Kampala, brought together charity homes, partners, beneficiaries and members of the wider community for its first Breakfast Meeting in commemoration of the World Day of the Poor.",
    image: "/images/Event 02/Caritas_Kampala_12.jpg",
    alt: "Participants at the Charities Office Breakfast Meeting commemorating World Day of the Poor.",
    body: [
      "On 14 November 2025, the Charities Office held its first Breakfast Meeting at Cardinal Nsubuga Leadership Training Centre in Nsambya to commemorate the World Day of the Poor.",
      "Held under the theme “You Are My Hope” (Psalm 71:5), the gathering brought together representatives of charity homes and institutions, members of the business and healthcare communities, Caritas Kampala staff, religious congregations, SACCO and cooperative leaders, and beneficiaries.",
      "Fr. Raymond Kalanzi of Teresa Ministries addressed participants on the importance of charity. Representatives from different charity homes also shared their work and experiences, followed by an open discussion on collaboration and ways of strengthening support for vulnerable people.",
      "The gathering was also an opportunity for participants and beneficiaries to share a meal, build relationships and reflect on the responsibility we share towards people experiencing poverty and vulnerability.",
      "As part of the day, food items contributed through the support of TotalEnergies staff and bedding from Caritas Kampala were handed over to Mapeera Bakateyamba Home.",
      "The meeting strengthened connections between the Charities Office, CHACONET members and potential partners while encouraging practical solidarity, dignity and shared responsibility in responding to the needs of vulnerable communities.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
