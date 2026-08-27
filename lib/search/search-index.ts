import { newsArticles } from "@/lib/content/news";

export interface SearchIndexItem {
  id: string;
  title: string;
  url: string;
  category: "Page" | "News Article" | "Programme" | "Resource" | "FAQ" | "Annual Report" | "Emergency Appeal";
  snippet: string;
  content: string;
  keywords: string[];
}

export const SITE_DOMAIN = "https://caritaskampalacharities.org";

export function getAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_DOMAIN}${cleanPath}`;
}

const staticSiteItems: SearchIndexItem[] = [
  {
    id: "page-home",
    title: "Caritas Kampala Charities Office",
    url: "/",
    category: "Page",
    snippet: "The Charities Office of Caritas Kampala supports the poor, vulnerable and marginalized across the Kampala Archdiocese.",
    content: "Caritas Kampala Charities Office home. Serving Kampala, Wakiso & Mpigi. Supporting the poor, vulnerable, elderly, orphans, refugees, persons with disabilities, and families facing hardship across the Kampala Archdiocese. Humanitarian appeals, emergency relief, community development.",
    keywords: ["home", "homepage", "caritas kampala", "charities office", "Kampala Archdiocese", "wakiso", "mpigi", "humanitarian", "relief"]
  },
  {
    id: "page-donate",
    title: "Donate & Support Our Mission",
    url: "/donate",
    category: "Page",
    snippet: "Support families across Kampala, Wakiso and Mpigi. Give online, by bank transfer, or Mobile Money to the Charities Office.",
    content: "Donate to Caritas Kampala Charities Office. Ways to give: online donation, direct bank transfer, MTN Mobile Money, Airtel Money, physical item drop-offs at Old Ggaba Road Nsambya. Support emergency response, child support, elderly care, and poverty alleviation.",
    keywords: ["donate", "donation", "give", "support", "mobile money", "bank transfer", "nsambya", "contribute", "financial support", "charity"]
  },
  {
    id: "page-contact",
    title: "Contact Us",
    url: "/contact-us",
    category: "Page",
    snippet: "Get in touch with the Charities Office of Caritas Kampala. Find our address, phone numbers, and location in Nsambya, Kampala.",
    content: "Contact Caritas Kampala Main Office located on Old Ggaba Road, Nsambya (next to the American Embassy), Kampala, Uganda. Direct lines: Appeal Line +256 762 506 906, WhatsApp +256 792 176 443, Main Office +256 392 176 443. Directions, maps, contact form, inquiry.",
    keywords: ["contact", "address", "phone number", "location", "nsambya", "american embassy", "ggaba road", "kampala", "email", "office", "call"]
  },
  {
    id: "appeal-kotido-moroto",
    title: "Current Emergency Appeal: Famine in Kotido & Moroto",
    url: "/current-appeal",
    category: "Emergency Appeal",
    snippet: "Drought has brought famine to Karamoja. Support our emergency relief drive collecting food and supplies for families in Kotido and Moroto.",
    content: "Emergency appeal for Kotido and Moroto dioceses in Karamoja region. Drought and climate change have driven severe famine. Kampala Archdiocese collection drive for posho, maize flour, rice, beans, sugar, cooking oil, household items, and financial donations. Drop off items at Caritas Kampala office in Nsambya.",
    keywords: ["kotido", "moroto", "famine", "karamoja", "drought", "emergency appeal", "relief drive", "food collection", "posho", "beans", "starvation", "parishes"]
  },
  {
    id: "page-our-programmes",
    title: "Our Programmes",
    url: "/our-programmes",
    category: "Programme",
    snippet: "Explore the core programmes run by Caritas Kampala Charities Office, supporting families, the elderly, refugees and people with disabilities.",
    content: "Caritas Kampala core programmes: Emergency & Disaster Response, Support for the Elderly, Family & Child Support, Refugee & Asylum Seeker Support, Disability & Special Needs Support, Poverty Alleviation & Livelihoods across Kampala, Wakiso, and Mpigi.",
    keywords: ["programmes", "programs", "initiatives", "elderly", "disability", "refugees", "poverty", "emergency response", "child support", "livelihoods"]
  },
  // Individual programmes for granular search matching
  {
    id: "programme-emergency-response",
    title: "Emergency & Disaster Response Programme",
    url: "/our-programmes#emergency-disaster-response",
    category: "Programme",
    snippet: "Immediate assistance to families and communities affected by disasters, fires, floods, and emergencies.",
    content: "Emergency and Disaster Response: providing immediate relief items, food, shelter, and financial assistance to families and communities facing sudden tragedy, fire, or climate emergency across the Archdiocese.",
    keywords: ["emergency", "disaster", "relief", "floods", "fire", "crisis", "assistance"]
  },
  {
    id: "programme-elderly-support",
    title: "Support for the Elderly Programme",
    url: "/our-programmes#support-for-the-elderly",
    category: "Programme",
    snippet: "Ongoing practical support, medical care, and food assistance to elderly people across the Archdiocese.",
    content: "Support for the Elderly: providing medical care, dignity, monthly rations, family-style shelter, and ongoing practical aid to senior citizens and vulnerable elderly people.",
    keywords: ["elderly", "seniors", "old age", "aging", "grandparents", "geriatric care"]
  },
  {
    id: "programme-family-child-support",
    title: "Family & Child Support Programme",
    url: "/our-programmes#family-child-support",
    category: "Programme",
    snippet: "Supporting families and children facing hardship, helping stabilise households in need.",
    content: "Family and Child Support: helping low-income households, orphans, vulnerable children, single parents, educational support, food security, and family stabilization.",
    keywords: ["family", "child", "children", "orphans", "hardship", "households", "parenting", "youth"]
  },
  {
    id: "programme-refugee-support",
    title: "Refugee & Asylum Seeker Support Programme",
    url: "/our-programmes#refugee-asylum-seeker-support",
    category: "Programme",
    snippet: "Practical assistance, medical aid, and community integration for urban refugees and asylum seekers.",
    content: "Refugee and Asylum Seeker Support: practical assistance, shelter support, emergency food, legal guidance, and community integration for urban refugees fleeing conflict in neighbouring countries.",
    keywords: ["refugee", "refugees", "asylum seeker", "asylum", "displaced persons", "migration", "urban refugees"]
  },
  {
    id: "programme-disability-support",
    title: "Disability & Special Needs Support Programme",
    url: "/our-programmes#disability-special-needs-support",
    category: "Programme",
    snippet: "Supports people living with disabilities and special medical needs through care facilities and aid.",
    content: "Disability and Special Needs Support: supporting persons living with severe physical or mental disabilities, special medical needs, mobility equipment, and specialized rehabilitation care homes.",
    keywords: ["disability", "disabled", "special needs", "handicap", "wheelchair", "rehabilitation", "medical care"]
  },
  {
    id: "programme-poverty-livelihoods",
    title: "Poverty Alleviation & Livelihoods Programme",
    url: "/our-programmes#poverty-alleviation-livelihoods",
    category: "Programme",
    snippet: "Works with individuals and families facing poverty to build sustainable livelihoods and income.",
    content: "Poverty Alleviation and Livelihoods: vocational skills, agricultural tools, micro-grants, self-help groups, and income generation initiatives to break cycles of poverty.",
    keywords: ["poverty", "alleviation", "livelihoods", "income", "empowerment", "employment", "vocational", "self-reliance"]
  },
  {
    id: "page-about-us",
    title: "About Us",
    url: "/about-us",
    category: "Page",
    snippet: "Learn about the mission, vision and values of the Charities Office, part of Caritas Kampala.",
    content: "About Caritas Kampala Charities Office. Socio-pastoral ministry of the Catholic Church in the Kampala Archdiocese. Putting gospel message of love into action without discrimination based on religion, ethnicity, or politics.",
    keywords: ["about us", "who we are", "caritas kampala", "catholic church", "Kampala Archdiocese", "mission", "values"]
  },
  {
    id: "page-our-team",
    title: "Our Team & Leadership",
    url: "/about-us/our-team",
    category: "Page",
    snippet: "Meet the leadership, staff, and parish coordinators behind the Charities Office of Caritas Kampala.",
    content: "Our Team and Leadership. Dedicated team of coordinators, social workers, administrative staff, and parish volunteers carrying out charity operations across the Kampala Archdiocese under the leadership of Caritas Kampala.",
    keywords: ["our team", "team", "staff", "leadership", "coordinators", "directors", "social workers"]
  },
  {
    id: "page-chaconet-partners",
    title: "Chaconet Partners — Catholic Charity Homes Network",
    url: "/about-us/chaconet-partners",
    category: "Page",
    snippet: "Chaconet is a network of nine registered Catholic charity homes working together across Kampala Archdiocese.",
    content: "Chaconet (Catholic Charity Homes Network) is an initiative under Caritas Kampala bringing together registered Catholic orphanages, disability centers, elderly homes, and rehabilitation facilities across the Kampala Archdiocese. Resource coordination, policy compliance, standards of care.",
    keywords: ["chaconet", "charity homes", "orphanages", "elderly homes", "disability centers", "network", "partners", "care institutions"]
  },
  {
    id: "page-get-involved",
    title: "Get Involved",
    url: "/get-involved",
    category: "Page",
    snippet: "Discover how you can support our work through giving, volunteering, parish involvement, or partnership.",
    content: "Get Involved with Caritas Kampala Charities Office. Opportunities to contribute: donate funds, drop off relief items, volunteer your time, visit our charity shop, or partner with us through your parish or organization.",
    keywords: ["get involved", "participate", "ways to help", "volunteering", "giving", "parish network", "partnerships"]
  },
  {
    id: "page-partnerships",
    title: "Partnerships",
    url: "/get-involved/partnerships",
    category: "Page",
    snippet: "Partner with us to support vulnerable communities in the Kampala Archdiocese through expertise, resources, and collaboration.",
    content: "Partnerships with businesses, healthcare institutions, professional volunteers, organisations and institutions. Opportunities for financial/in-kind support, professional expertise, healthcare and education initiatives, skills development, event support and other practical forms of collaboration.",
    keywords: ["partnerships", "partner with us", "collaboration", "business", "institution", "support", "vulnerable", "community"]
  },
  {
    id: "page-volunteer",
    title: "Volunteer With Us",
    url: "/get-involved/volunteer",
    category: "Page",
    snippet: "Offer your time and skills to support emergency distribution, parish drives, and community outreach.",
    content: "Volunteer with Caritas Kampala Charities Office. Join parish networks, youth initiatives, emergency relief distribution teams, event organization, and community welfare programs.",
    keywords: ["volunteer", "volunteering", "volunteer with us", "offer time", "skills", "parish volunteers", "youth initiatives"]
  },
  {
    id: "page-charity-shop",
    title: "Charity Shop",
    url: "/get-involved/charity-shop",
    category: "Page",
    snippet: "Donate gently-used clothing, household items, or goods to support our charity shop initiatives.",
    content: "Caritas Kampala Charity Shop. Donate clothing, shoes, household goods, books, and items to support vulnerable families. Every donation helps generate support for those in need.",
    keywords: ["charity shop", "shop", "clothes donation", "household items", "used items", "donate goods", "thrift"]
  },
  {
    id: "page-resources",
    title: "Resources & Publications",
    url: "/resources",
    category: "Resource",
    snippet: "Access news, annual reports, photo galleries, and answers to frequently asked questions.",
    content: "Resources and Publications hub for Caritas Kampala Charities Office. Access latest news updates, annual impact reports, financial audits, photo galleries, and FAQs.",
    keywords: ["resources", "publications", "reports", "news", "faqs", "gallery", "documents"]
  },
  {
    id: "page-gallery",
    title: "Photo Gallery",
    url: "/resources/gallery",
    category: "Resource",
    snippet: "Visual stories and photo gallery documenting Caritas Kampala outreach events and community projects.",
    content: "Photo Gallery showcasing field activities, Kotido famine relief distribution, parish drives, Chaconet network meetings, elderly home visits, and community outreach.",
    keywords: ["gallery", "photos", "images", "pictures", "events", "outreach photos"]
  },
  {
    id: "page-annual-reports",
    title: "Annual Reports & Financial Audits",
    url: "/resources/annual-reports",
    category: "Annual Report",
    snippet: "Annual impact reviews and transparent financial accountability reports from the Charities Office.",
    content: "Annual Impact & Financial Accountability Reports for Caritas Kampala Charities Office. Transparent financial auditing, yearly impact reviews, accountability to donors and partners.",
    keywords: ["annual reports", "annual report", "financial report", "audit", "accountability", "impact report", "transparency", "publications archive"]
  },
  {
    id: "page-faqs",
    title: "Frequently Asked Questions (FAQs)",
    url: "/resources/faqs",
    category: "FAQ",
    snippet: "Clear answers about donation drop-off points, non-discrimination policies, mobile money, and volunteering.",
    content: "Frequently Asked Questions. Collection point for physical donation items: Caritas Kampala Office, Old Ggaba Road, Nsambya (next to American Embassy). Non-discrimination policy: Caritas serves everyone regardless of religion, ethnicity, or gender. Financial contribution methods. Volunteering opportunities.",
    keywords: ["faqs", "faq", "frequently asked questions", "questions", "answers", "collection point", "religion", "non-discrimination", "drop off"]
  },
  // Individual FAQs for targeted search results
  {
    id: "faq-drop-off",
    title: "Where is the collection point for donation items?",
    url: "/resources/faqs#collection-point",
    category: "FAQ",
    snippet: "All physical items (food, clothing, household goods) can be dropped off directly at the Caritas Kampala Office in Nsambya.",
    content: "Collection point for donation items: Caritas Kampala Office on Old Ggaba Road, Nsambya (next to the American Embassy), Kampala, Uganda. Drop off food, clothing, posho, rice, beans, cooking oil, household goods.",
    keywords: ["collection point", "drop off", "nsambya", "address", "food donation", "clothing donation", "where to bring"]
  },
  {
    id: "faq-religion",
    title: "Does Caritas assist people regardless of religion?",
    url: "/resources/faqs#non-discrimination",
    category: "FAQ",
    snippet: "Yes. Caritas Kampala serves everyone in need without discrimination based on religion, ethnicity, gender, or political affiliation.",
    content: "Non-discrimination: Caritas Kampala serves all human beings in need regardless of Catholic faith, Protestant, Muslim, non-religious, ethnicity, gender, or political background.",
    keywords: ["religion", "catholic", "muslim", "discrimination", "non-discrimination", "all people", "faith"]
  },
  {
    id: "faq-financial",
    title: "How can I make a financial contribution?",
    url: "/resources/faqs#financial-contribution",
    category: "FAQ",
    snippet: "You can make a direct bank transfer or mobile money donation to our official accounts.",
    content: "Financial contribution methods: Direct bank transfer, MTN Mobile Money, Airtel Money. Visit our Donate page or contact our office lines.",
    keywords: ["financial contribution", "how to give", "bank account", "mobile money", "pay"]
  },
  {
    id: "faq-volunteer",
    title: "Can I volunteer with Caritas Kampala?",
    url: "/resources/faqs#volunteer-faq",
    category: "FAQ",
    snippet: "Yes! We welcome volunteers across our parish networks, youth initiatives, and emergency relief distribution teams.",
    content: "Volunteering with Caritas: We welcome volunteers across parish networks, youth initiatives, and emergency relief distribution teams. Visit our Volunteer page.",
    keywords: ["volunteer faq", "can i volunteer", "join caritas", "help out"]
  }
];

/**
 * Returns all searchable items across the site.
 * Dynamic news articles from `@/lib/content/news` are dynamically imported and appended,
 * ensuring newly added news articles automatically become searchable.
 */
export function getSearchIndex(): SearchIndexItem[] {
  const dynamicNewsItems: SearchIndexItem[] = newsArticles.map((article) => {
    const fullBodyText = Array.isArray(article.body) ? article.body.join(" ") : "";
    const helpText = article.helpSection ? `${article.helpSection.title} ${article.helpSection.content.join(" ")}` : "";
    
    return {
      id: `news-${article.slug}`,
      title: article.title,
      url: `/resources/news/${article.slug}`,
      category: "News Article",
      snippet: article.snippet || article.subtitle || fullBodyText.slice(0, 160) + "...",
      content: `${article.title} ${article.subtitle || ""} ${article.category || ""} ${article.region || ""} ${article.snippet || ""} ${fullBodyText} ${helpText}`,
      keywords: [
        "news",
        "update",
        article.category.toLowerCase(),
        article.region ? article.region.toLowerCase() : "",
        ...article.title.toLowerCase().split(/\s+/),
      ].filter(Boolean),
    };
  });

  return [...staticSiteItems, ...dynamicNewsItems];
}
