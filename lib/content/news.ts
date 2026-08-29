export type HelpSection = {
  title: string;
  content: string[];
  buttonText: string;
  buttonLink: string;
};

export type ExploreSection = {
  title: string;
  body: string;
  links: { text: string; link: string }[];
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
  exploreSection?: ExploreSection;
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
      "In response, the Kampala Archdiocese is calling on parishes across the Kampala Archdiocese to come together for the people of Karamoja. The collection drive began in July and will continue through September.",
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
      "A dedicated online home for the Charities Office, bringing together our work, programmes, network, news, and ways to get involved.",
    image: "/images/Event 02/Caritas_Kampala_98.jpg",
    alt: "Speaker addressing participants during a Charities Office gathering in Kampala",
    body: [
      "The Charities Office under Caritas Kampala has launched its dedicated website, creating a central place for people to learn about the office’s work across the Kampala Archdiocese.",
      "The website brings together information about the office’s programmes, the Chaconet network of Catholic charity homes, current appeals, news and events, volunteering, partnerships, the Charity Shop, and other ways people can support the work.",
      "Visitors can also learn more about the people behind the Charities Office, explore photographs from programmes and community activities, and find practical information about donating or contacting the team.",
      "The website is part of Caritas Kampala’s wider digital presence. It gives the Charities Office a dedicated space while maintaining a clear connection to Caritas Kampala and the wider mission of the Church across the Kampala Archdiocese.",
      "The site will continue to grow as new stories, programme updates, reports, events, and other resources become available.",
    ],
    exploreSection: {
      title: "Explore the Website",
      body: "Learn more about the work of the Charities Office, explore our programmes, or find a practical way to get involved.",
      links: [
        { text: "Our Programmes →", link: "/our-programmes" },
        { text: "Get Involved →", link: "#" },
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
