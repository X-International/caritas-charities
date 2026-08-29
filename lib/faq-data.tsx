import { JSX } from "react";
import Link from "next/link";

export const faqs = [
  {
    q: "What is Caritas Kampala?",
    a: "Caritas Kampala is the social service and charitable arm of the Catholic Church in the Kampala Archdiocese. It supports humanitarian response, social services, and development work across communities within the Kampala Archdiocese.",
  },
  {
    q: "What is the Charities Office?",
    a: "The Charities Office operates under Caritas Kampala and coordinates practical charitable support for vulnerable individuals, families, and communities across the Kampala Archdiocese.",
  },
  {
    q: "Who can benefit from the Charities Office's services?",
    a: "Our work supports vulnerable and marginalised people, including children and families in hardship, elderly people, refugees and asylum seekers, people with disabilities and special needs, and communities affected by emergencies and disasters. Support is provided without discrimination based on faith, nationality, tribe, or other background.",
  },
  {
    q: "What types of support does the Charities Office provide?",
    a: (
      <>
        Our programmes include emergency and disaster response, support for elderly people, family and child support, refugee and asylum seeker assistance, disability and special needs support, and poverty alleviation and livelihoods activities. <Link href="/our-programmes" className="text-[#b10017] hover:underline font-medium">Explore our programmes</Link>.
      </>
    ),
  },
  {
    q: "How can I donate to the Charities Office?",
    a: (
      <>
        You can support the work of the Charities Office through the approved giving methods listed on our Donate page. Please use only the official payment details published or confirmed by the Charities Office before sending money. <Link href="/donate" className="text-[#b10017] hover:underline font-medium">View donation options</Link>.
      </>
    ),
  },
  {
    q: "Can I donate clothes or other items?",
    a: (
      <>
        Yes. The Charity Shop receives suitable donated clothes and other items in good condition. These donations help support the work of the Charities Office through the second-hand Charity Shop in Nsambya. <Link href="/get-involved/charity-shop" className="text-[#b10017] hover:underline font-medium">Learn about the Charity Shop</Link>.
      </>
    ),
  },
  {
    q: "How can I volunteer with the Charities Office?",
    a: (
      <>
        We welcome people who would like to offer their time, professional skills, or practical support where current needs and opportunities allow. Visit our Volunteer page to learn more about the process and available ways to help. <Link href="/get-involved/volunteer" className="text-[#b10017] hover:underline font-medium">Volunteer with us</Link>.
      </>
    ),
  },
  {
    q: "Can my organisation partner with the Charities Office?",
    a: (
      <>
        Yes. We welcome appropriate partnerships with organisations, institutions, faith communities, and other groups that share an interest in supporting vulnerable communities. Partnership opportunities depend on current programmes, needs, and areas of collaboration. <Link href="/get-involved/partnerships" className="text-[#b10017] hover:underline font-medium">Explore partnerships</Link>.
      </>
    ),
  },
  {
    q: "What is Chaconet?",
    a: (
      <>
        Chaconet, the Catholic Charity Homes Network, brings together Catholic charity homes and care institutions across the Kampala Archdiocese. The network supports coordination, collaboration, standards of care, and shared learning among participating homes. <Link href="/about-us/chaconet-partners" className="text-[#b10017] hover:underline font-medium">Learn about the Chaconet Network</Link>.
      </>
    ),
  },
  {
    q: "How does the Charities Office safeguard children and vulnerable people?",
    a: "Safeguarding is an important part of our work. The Charities Office follows child safeguarding procedures under Caritas Kampala and promotes safe reporting, staff and volunteer awareness, appropriate screening, and responsible handling of concerns involving children and vulnerable people.",
  },
  {
    q: "How does the Charities Office ensure transparency and accountability?",
    a: (
      <>
        The Charities Office operates within the governance and accountability structures of Caritas Kampala. Financial management, reporting, internal controls, and audit processes help support the responsible use of resources. <Link href="/resources/annual-reports" className="text-[#b10017] hover:underline font-medium">View Annual Reports</Link>.
      </>
    ),
  },
  {
    q: "Can I organise a fundraising activity on behalf of the Charities Office?",
    a: (
      <>
        Please contact the Charities Office before organising or promoting a fundraising activity in its name. This allows us to confirm the proposed activity, provide appropriate guidance, and ensure that the Caritas name and official giving information are used correctly. <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">Contact us</Link>.
      </>
    ),
  },
  {
    q: "Where is the Charities Office located?",
    a: (
      <>
        The Charities Office is based in Nsambya, Kampala. Visit our Contact Us page for the current office address, telephone details, directions, and other ways to reach the team. <Link href="/contact-us" className="text-[#b10017] hover:underline font-medium">View contact details</Link>.
      </>
    ),
  },
  {
    q: "How can I keep up with the work of the Charities Office?",
    a: (
      <>
        You can follow our <Link href="/resources/news" className="text-[#b10017] hover:underline font-medium">News & Updates</Link>, upcoming <Link href="/resources/events" className="text-[#b10017] hover:underline font-medium">Events</Link>, <Link href="/resources/success-stories" className="text-[#b10017] hover:underline font-medium">Success Stories</Link>, and <Link href="/resources/gallery" className="text-[#b10017] hover:underline font-medium">Photo Gallery</Link> to see recent activities and developments from our work.
      </>
    ),
  },
];

export const getAnswerText = (answer: string | JSX.Element): string => {
  if (typeof answer === "string") return answer;
  // For structured data fallback or simple strings
  return "Please visit our website for more information.";
};
