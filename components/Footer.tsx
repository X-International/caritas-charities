"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FooterColumnData = {
  title: string;
  links: { label: string; href?: string }[];
};

const footerColumns: FooterColumnData[] = [
  {
    title: "ABOUT",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/about-us/our-team" },
      { label: "Partners — Chaconet Network", href: "/about-us/chaconet-partners" },
      { label: "Our Programmes", href: "/our-programmes" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Charity Shop", href: "/get-involved/charity-shop" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Gallery", href: "/resources/gallery" },
      { label: "News & Updates", href: "/resources/news" },
      { label: "Annual Reports", href: "/resources/annual-reports" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    title: "CONTACT & LEGAL",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
];

const DesktopColumn = ({ column }: { column: FooterColumnData }) => (
  <div className="space-y-4 text-left">
    <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-200 font-sans">
      {column.title}
    </h3>
    <ul className="space-y-3.5 text-xs sm:text-sm font-light text-gray-400">
      {column.links.map((link) => (
        <li key={link.label}>
          {link.href ? (
            <Link
              href={link.href}
              className="hover:underline hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] focus-visible:underline rounded-xs"
            >
              {link.label}
            </Link>
          ) : (
            <span aria-disabled="true" className="cursor-default opacity-85">
              {link.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const MobileAccordion = ({
  column,
  index,
  isOpen,
  onToggle,
}: {
  column: FooterColumnData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentId = `footer-accordion-panel-${index}`;
  return (
    <div className="border-b border-white/20 text-left">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded group"
      >
        <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-200 font-sans">
          {column.title}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul id={contentId} className="pb-4 space-y-3 text-xs sm:text-sm font-light text-gray-400 pl-1">
          {column.links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <Link
                  href={link.href}
                  className="hover:underline hover:text-[#b10017] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] focus-visible:underline rounded-xs"
                >
                  {link.label}
                </Link>
              ) : (
                <span aria-disabled="true" className="cursor-default opacity-85">
                  {link.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="text-white pt-16 sm:pt-20 pb-12 sm:pb-16 border-t border-white/20 w-full overflow-hidden mt-8 lg:mt-12"
      style={{
        background: "linear-gradient(to bottom, #262626 0px, #262626 240px, #141414 100%)",
      }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center gap-10 sm:gap-12 pb-12 sm:pb-16">
          <div className="flex w-full flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 xl:gap-10 max-w-3xl text-center sm:text-left mx-auto lg:mx-0">
            <Link
              href="/"
              aria-label="Caritas Kampala Homepage"
              className="shrink-0 mx-auto sm:mx-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] rounded-lg"
            >
              <Image
                src="/images/logos/Caritas_Kampala_Footer.png"
                alt="Caritas Kampala logo"
                width={400}
                height={140}
                className="h-28 sm:h-32 lg:h-40 xl:h-44 w-auto object-contain"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed max-w-xl">
              The Charities Office operates under Caritas Kampala, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.
            </p>
          </div>

          <div className="w-full lg:w-auto space-y-4 shrink-0 text-center lg:text-right">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-200 block">
              Follow us on social media
            </span>
            <div className="flex items-center justify-center lg:justify-end gap-5">
              <div className="flex items-center gap-2" aria-label="Social channels">
                <a href="https://www.facebook.com/profile.php?id=61592649493991" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)" title="Facebook" className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-colors duration-200 hover:text-white">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.6V3.94c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03V10H7.7v3h2.61v8h3.19Z" /></svg>
                </a>
                <a href="https://www.instagram.com/charityofficecaritas" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" title="Instagram" className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-colors duration-200 hover:text-white">
                  <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" strokeWidth="1.8" /><circle cx="17.4" cy="6.6" r="1" className="fill-current stroke-none" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/charity-office-caritas-kampala-318713428" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn" className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-colors duration-200 hover:text-white">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM7.7 18.8H4.6V9.4h3.1v9.4Zm-1.6-10.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm12.7 10.7h-3.1v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7v5.3h-3.1V9.4h3.1v1.3h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v4.8Z" /></svg>
                </a>
                <a href="https://www.youtube.com/@charityofficecaritaskampala" target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in a new tab)" title="YouTube" className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-colors duration-200 hover:text-white">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>
                </a>
                <a href="https://x.com/charityoffmm" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter) (opens in a new tab)" title="X (formerly Twitter)" className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-colors duration-200 hover:text-white">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/25 my-8 sm:my-10" />

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10 xl:gap-12 pb-10">
          {footerColumns.map((col) => (
            <DesktopColumn key={col.title} column={col} />
          ))}
        </div>

        <div className="sm:hidden pb-2">
          {footerColumns.map((col, i) => (
            <MobileAccordion
              key={col.title}
              column={col}
              index={i}
              isOpen={!!openAccordions[i]}
              onToggle={() => toggleAccordion(i)}
            />
          ))}
        </div>

        <hr className="border-white/25 my-8" />

        <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-400 font-normal gap-3 pt-1 text-left">
          <div>
            {`© ${currentYear} Caritas Kampala — Charities Office. All Rights Reserved.`}
          </div>
          <div className="self-start sm:self-auto">
            <a
              href="https://www.caritaskampala.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Main Website (opens in a new tab)"
              className="hover:underline inline-flex items-center gap-1.5 font-bold text-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded"
            >
              <span>Visit Main Website</span>
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
