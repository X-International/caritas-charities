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
    title: "ABOUT US",
    links: [
      { label: "Who We Are", href: "/about-us" },
      { label: "Our Team", href: "/about-us/our-team" },
      { label: "Chaconet Network", href: "/about-us/chaconet-partners" },
      { label: "Our Programmes", href: "/our-programmes" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Charity Shop", href: "/get-involved/charity-shop" },
      { label: "Partnerships", href: "/get-involved/partnerships" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "News & Updates", href: "/resources/news" },
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "Events", href: "/resources/events" },
      { label: "Gallery", href: "/resources/gallery" },
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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592649493991",
    label: "Facebook (opens in a new tab)",
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.6V3.94c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03V10H7.7v3h2.61v8h3.19Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/charityofficecaritas",
    label: "Instagram (opens in a new tab)",
    svg: (
      <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/charity-office-caritas-kampala-318713428",
    label: "LinkedIn (opens in a new tab)",
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM7.7 18.8H4.6V9.4h3.1v9.4Zm-1.6-10.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm12.7 10.7h-3.1v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7v5.3h-3.1V9.4h3.1v1.3h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v4.8Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@charityofficecaritaskampala",
    label: "YouTube (opens in a new tab)",
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
  {
    name: "X (formerly Twitter)",
    href: "https://x.com/charityoffmm",
    label: "X (formerly Twitter) (opens in a new tab)",
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" />
      </svg>
    ),
  },
];

const DesktopColumn = ({ column }: { column: FooterColumnData }) => (
  <div className="space-y-4 text-left">
    <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-200 font-sans">
      {column.title}
    </h3>
    <div className="w-10 h-0.5 bg-[#b10017]" />
    <ul className="space-y-3.5 text-xs sm:text-sm font-light text-gray-400">
      {column.links.map((link) => (
        <li key={link.label}>
          {link.href ? (
            <Link
              href={link.href}
              className="hover:underline hover:text-white transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded-xs"
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
    <div className="border-b border-white/20 text-left last:border-b-0">
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
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul id={contentId} className="pb-4 pt-1 space-y-3.5 text-xs sm:text-sm font-light text-gray-400 pl-2 animate-in fade-in duration-200 motion-reduce:animate-none">
          {column.links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <Link
                  href={link.href}
                  className="hover:underline hover:text-white transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded-xs"
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
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
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
        {/* Top Identity / Social Section */}
        {/* Desktop (1024px+) */}
        <div className="hidden lg:flex items-center justify-between gap-8 pb-14 lg:pb-16 pt-16 lg:pt-[72px]">
          <div className="flex items-center gap-12 xl:gap-16 min-w-0">
            <Link
              href="/"
              aria-label="Caritas Kampala Homepage"
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] rounded-lg"
            >
              <Image
                src="/images/logos/Caritas_Kampala_Footer.png"
                alt="Caritas Kampala logo"
                width={320}
                height={112}
                className="h-28 w-auto object-contain"
              />
            </Link>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-[1.6] max-w-[540px]">
              The Charities Office operates under Caritas Kampala, providing compassionate and practical support to vulnerable people and communities across the Kampala Archdiocese.
            </p>
          </div>

          <div className="space-y-4 text-right shrink-0">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-200 block">
              FOLLOW US ON SOCIAL MEDIA
            </span>
            <div className="flex items-center justify-end gap-2.5" aria-label="Social channels">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.name}
                  className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white/85 transition-all duration-200 ease-out hover:text-white hover:border-[#b10017] hover:bg-[#b10017]/20 border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet (640px–1023px) */}
        <div className="hidden sm:flex lg:hidden flex-col pt-12 sm:pt-14 pb-12 sm:pb-14">
          <div className="flex items-center gap-6 sm:gap-8 max-w-3xl mx-auto w-full">
            <Link
              href="/"
              aria-label="Caritas Kampala Homepage"
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] rounded-lg"
            >
              <Image
                src="/images/logos/Caritas_Kampala_Footer.png"
                alt="Caritas Kampala logo"
                width={280}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-[1.6] max-w-[480px]">
              The Charities Office operates under Caritas Kampala, providing compassionate and practical support to vulnerable people and communities across the Kampala Archdiocese.
            </p>
          </div>

          <div className="flex flex-col items-center mt-10 sm:mt-12 text-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-200 block mb-4">
              FOLLOW US ON SOCIAL MEDIA
            </span>
            <div className="flex items-center justify-center gap-2.5" aria-label="Social channels">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.name}
                  className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white/85 transition-all duration-200 ease-out hover:text-white hover:border-[#b10017] hover:bg-[#b10017]/20 border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile (< 640px) */}
        <div className="sm:hidden flex flex-col items-center text-center pt-10 sm:pt-12 pb-12 sm:pb-14">
          <Link
            href="/"
            aria-label="Caritas Kampala Homepage"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#262626] rounded-lg mb-7"
          >
            <Image
              src="/images/logos/Caritas_Kampala_Footer.png"
              alt="Caritas Kampala logo"
              width={240}
              height={88}
              className="h-22 w-auto object-contain mx-auto"
            />
          </Link>

          <p className="text-[15px] sm:text-base text-gray-300 font-normal leading-[1.6] max-w-[330px] px-4 mx-auto mb-9">
            The Charities Office operates under Caritas Kampala, providing compassionate and practical support to vulnerable people and communities across the Kampala Archdiocese.
          </p>

          <div className="w-full">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-200 block mb-4">
              FOLLOW US ON SOCIAL MEDIA
            </span>
            <div className="flex items-center justify-center gap-2" aria-label="Social channels">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.name}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full text-white/85 transition-all duration-200 ease-out hover:text-white hover:border-[#b10017] hover:bg-[#b10017]/20 border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-0" />

        {/* Desktop Navigation Columns (1024px+) */}
        <div className="hidden lg:grid grid-cols-4 gap-x-12 xl:gap-x-16 pt-10 lg:pt-11 pb-12 lg:pb-14">
          {footerColumns.map((col) => (
            <DesktopColumn key={col.title} column={col} />
          ))}
        </div>

        {/* Tablet Navigation Grid (640px–1023px, 2x2) */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-x-14 gap-y-10 sm:gap-x-16 sm:gap-y-12 pt-10 pb-12">
          {footerColumns.map((col) => (
            <DesktopColumn key={col.title} column={col} />
          ))}
        </div>

        {/* Mobile Accordion Navigation (< 640px) */}
        <div className="sm:hidden pb-2">
          {footerColumns.map((col, i) => (
            <MobileAccordion
              key={col.title}
              column={col}
              index={i}
              isOpen={openAccordion === i}
              onToggle={() => toggleAccordion(i)}
            />
          ))}
        </div>

        <hr className="border-white/20 my-0" />

        {/* Bottom Copyright & Visit Main Website */}
        <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-400 font-normal gap-4 py-8 sm:py-9 text-left">
          <div>
            {`© ${currentYear} Caritas Kampala — Charities Office. All Rights Reserved.`}
          </div>
          <div>
            <a
              href="https://www.caritaskampala.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Main Website (opens in a new tab)"
              className="hover:text-white inline-flex items-center gap-1.5 font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded group"
            >
              <span>Visit Main Website</span>
              <svg className="w-4 h-4 fill-none stroke-current group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
