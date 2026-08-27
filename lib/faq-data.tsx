import { JSX } from "react";
import Link from "next/link";

export const faqs = [
  {
    q: "What is Caritas Kampala?",
    a: "Caritas Kampala is the social service and charitable arm of the Catholic Church in Kampala, Uganda. It provides humanitarian aid, social services, and development programmes to improve the lives of vulnerable communities. Caritas Kampala works through a network of pastoral agents in the 75 parishes of the Catholic Kampala Archdiocese, covering Kampala, Wakiso, Mpigi, and Butambala districts.",
  },
  {
    q: "How can I donate to the Charities Office?",
    a: (
      <>
        You can support the Charities Office through the approved donation methods available on our website, including bank transfer, Mobile Money, or by visiting our office directly. For the latest donation methods and account information, please visit the <Link href="/donate" className="text-[#b10017] hover:underline font-medium">Donate page</Link> or contact us.
      </>
    ),
  },
  {
    q: "What types of aid does the Charities Office provide?",
    a: (
      <>
        The Charities Office provides assistance including food support, healthcare, education, shelter assistance, disaster response, and programmes that support vulnerable and marginalized groups. <Link href="/our-programmes" className="text-[#b10017] hover:underline font-medium">Learn more about our programmes</Link>.
      </>
    ),
  },
  {
    q: "How can I volunteer with the Charities Office?",
    a: (
      <>
        To volunteer, you can complete the volunteer registration process through our website or contact the Charities Office directly. Volunteers support different programmes and activities according to current needs. <Link href="/get-involved/volunteer" className="text-[#b10017] hover:underline font-medium">Visit our volunteer page to learn more</Link>.
      </>
    ),
  },
  {
    q: "Who can benefit from the services of the Charities Office?",
    a: "Our services are open to vulnerable and marginalized people, including orphans and children in need, elderly people, persons with disabilities, refugees, and communities affected by disasters. Support is provided without discrimination based on faith, sex, gender, nationality, tribe, or ethnicity.",
  },
  {
    q: "How does the Charities Office ensure transparency and accountability?",
    a: (
      <>
        The Charities Office operates under established governance policies, carries out regular audits, and is committed to responsible management of resources. Transparency and accountability are among the core values guiding its work. <Link href="/resources/annual-reports" className="text-[#b10017] hover:underline font-medium">View our Annual Reports</Link>.
      </>
    ),
  },
  {
    q: "Can I organize a fundraising event on behalf of the Charities Office?",
    a: (
      <>
        Yes. We welcome individuals, groups, parishes, and organizations that would like to support fundraising initiatives. Please <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">contact the Charities Office</Link> before organizing an event so that the activity can be discussed and the necessary approval or guidance provided.
      </>
    ),
  },
  {
    q: "How can I get involved in the work of the Charities Office?",
    a: (
      <>
        You can get involved by volunteering, donating, supporting specific initiatives, or partnering with us. Visit our <Link href="/get-involved" className="text-[#b10017] hover:underline font-medium">Get Involved page</Link> or contact us to learn more about current opportunities.
      </>
    ),
  },
  {
    q: "Does the Charities Office work with other organizations?",
    a: (
      <>
        Yes. The Charities Office works with government agencies, NGOs, faith-based organizations, community groups, and partners including the <Link href="/about-us/chaconet-partners" className="text-[#b10017] hover:underline font-medium">Chaconet network</Link> to strengthen coordination and extend support to vulnerable communities.
      </>
    ),
  },
  {
    q: "How do I contact the Charities Office?",
    a: (
      <>
        You can contact the Charities Office by phone, email, or by visiting the office. For the current verified contact details and location, please visit our <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">Contact Us page</Link>.
      </>
    ),
  },
];

export const getAnswerText = (answer: string | JSX.Element): string => {
  if (typeof answer === "string") return answer;
  // If it's a JSX element (like with links), we need to extract the text
  // For simplicity here, we'll try to find the text content if possible or just use a placeholder
  return "Please visit our website for more information.";
};
