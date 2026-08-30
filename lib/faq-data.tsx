import { ReactNode } from "react";
import Link from "next/link";

export interface FAQItem {
  q: string;
  a: ReactNode;
}

export const faqs: FAQItem[] = [
  {
    q: "What is Caritas Kampala?",
    a: "Caritas Kampala is the social service and charitable arm of the Catholic Church in Kampala, Uganda. We provide humanitarian aid, social services, and development programs to improve the lives of vulnerable communities.We have a network of pastoral agents in the 75 parishes of the Catholic Archdiocese of Kampala which is comprised of Kampala, Wakiso, Mpigi and Butambala civic districts.",
  },
  {
    q: "What is the Charity Office?",
    a: "The Charity Office operates under Caritas Kampala and coordinates practical charitable support for vulnerable individuals, families, and communities across Kampala Archdiocese.",
  },
  {
    q: "Who can benefit from Caritas Kampala’s Charity Office services?",
    a: "Our services are open to all vulnerable and marginalized groups, including orphans, the elderly, persons with disabilities, refugees, and communities affected by disasters, regardless of faith, sex, gender, nationality or tribe.",
  },
  {
    q: "What types of aid does Caritas Kampala’s Charity Office provide?",
    a: "We provide food assistance, healthcare support, education programs, shelter for the homeless, disaster relief, and empowerment initiatives for marginalized groups.",
  },
  {
    q: "How does the Charity Office safeguard children and vulnerable people?",
    a: "Safeguarding is an important part of our work. The Charity Office follows child safeguarding procedures under Caritas Kampala and promotes safe reporting, staff and volunteer awareness, appropriate screening, and responsible handling of concerns involving children and vulnerable people.",
  },
  {
    q: "How can I donate to Charity Office, Caritas Kampala?",
    a: "You can donate through our bank account, mobile money platforms, or visit our office to contribute. Please visit our website or contact us for detailed donation methods and account information.",
  },
  {
    q: "Can I donate clothes or other items?",
    a: (
      <>
        Yes. The Charity Shop receives suitable donated clothes and other items in good condition. These donations help support the work of the Charity Office through the second-hand Charity Shop in Nsambya. <Link href="/get-involved/charity-shop" className="text-[#b10017] hover:underline font-medium">Learn about the Charity Shop</Link>.
      </>
    ),
  },
  {
    q: "How can I volunteer with Caritas Kampala’s Charity Office?",
    a: "To volunteer, please fill out the volunteer registration form available on our website or contact our office directly. We welcome volunteers for various programs and activities.",
  },
  {
    q: "How can I get involved in Caritas Kampala’s Charity Office projects?",
    a: "You can volunteer, donate, or partner with us on specific projects. Visit our website or contact us for more information on ongoing initiatives.",
  },
  {
    q: "Can my organisation partner with the Charity Office?",
    a: (
      <>
        Yes. We welcome appropriate partnerships with organisations, institutions, faith communities, and other groups that share an interest in supporting vulnerable communities. Partnership opportunities depend on current programmes, needs, and areas of collaboration. <Link href="/get-involved/partnerships" className="text-[#b10017] hover:underline font-medium">Explore partnerships</Link>.
      </>
    ),
  },
  {
    q: "Does Caritas Kampala’s Charity Office work with other organizations?",
    a: "Yes, we collaborate with government agencies, NGOs, faith-based organizations, and community groups to maximize impact and reach more vulnerable populations.",
  },
  {
    q: "What is Chaconet?",
    a: (
      <>
        Chaconet, the Catholic Charity Homes Network, brings together Catholic charity homes and care institutions across Kampala Archdiocese. The network supports coordination, collaboration, standards of care, and shared learning among participating homes. <Link href="/about-us/chaconet-partners" className="text-[#b10017] hover:underline font-medium">Learn about the Chaconet Network</Link>.
      </>
    ),
  },
  {
    q: "How does Caritas Kampala’s Charity Office ensure transparency and accountability?",
    a: "We operate under strict governance policies, conduct regular audits, and publish annual reports. Transparency is a core value, and we are committed to responsible management of resources.",
  },
  {
    q: "Can I organize a fundraising event on behalf of Caritas Kampala’s Charity Office?",
    a: "Yes, we welcome partnership and support for fundraising initiatives. Please contact our office to discuss your event and obtain necessary approvals.",
  },
  {
    q: "How do I contact the Charity Office at Caritas Kampala?",
    a: "You can reach us via phone at [insert phone number], email us at [insert email], or visit our office at [insert address]. Details are available on our website.",
  },
  {
    q: "How can I keep up with the work of the Charity Office?",
    a: (
      <>
        You can follow our <Link href="/resources/news" className="text-[#b10017] hover:underline font-medium">News & Updates</Link>, upcoming <Link href="/resources/events" className="text-[#b10017] hover:underline font-medium">Events</Link>, <Link href="/resources/success-stories" className="text-[#b10017] hover:underline font-medium">Success Stories</Link>, and <Link href="/resources/gallery" className="text-[#b10017] hover:underline font-medium">Photo Gallery</Link> to see recent activities and developments from our work.
      </>
    ),
  },
];

export const getAnswerText = (answer: ReactNode): string => {
  if (typeof answer === "string") return answer;
  // For structured data fallback or simple strings
  return "Please visit our website for more information.";
};
