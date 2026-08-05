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
      { label: "Get Involved", href: "/get-involved" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Gallery", href: "/resources/gallery" },
      { label: "News & Updates", href: "/resources/news" },
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

function DesktopColumn({ column }: { column: FooterColumnData }) {
  return (
    <nav aria-label={`${column.title} links`} className="space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-white">
        {column.title}
      </h3>
      <ul className="space-y-4 text-sm text-red-50 font-normal">
        {column.links.map((link) => (
          <li key={`${link.href ?? "text"}-${link.label}`}>
            {link.href ? (
              <Link
                href={link.href}
                className="hover:underline hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d000f] focus-visible:underline rounded-xs"
              >
                {link.label}
              </Link>
            ) : (
              <span className="text-red-100/80">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileAccordion({
  column,
  isOpen,
  onToggle,
  index,
}: {
  column: FooterColumnData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentId = `footer-accordion-content-${index}`;

  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d000f] rounded group"
      >
        <h3 className="text-base font-extrabold uppercase tracking-wider text-white">
          {column.title}
        </h3>
        <span
          className={`text-white/90 shrink-0 ml-4 transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-3" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 text-base text-red-100 font-normal pl-0">
            {column.links.map((link) => (
              <li key={`${link.href ?? "text"}-${link.label}`}>
                {link.href ? (
                  <Link
                    href={link.href}
                    tabIndex={isOpen ? 0 : -1}
                    className="hover:underline hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d000f] focus-visible:underline rounded-xs"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-red-100/80">{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

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
      className="text-white pt-16 sm:pt-20 pb-12 sm:pb-16 border-t border-[#8d000f] w-full overflow-hidden mt-8 lg:mt-12"
      style={{
        background: "linear-gradient(to bottom, #a90012 200px, #8d000f 100%)",
      }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center gap-10 sm:gap-12 pb-12 sm:pb-16">
          <div className="flex w-full flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 xl:gap-10 max-w-3xl text-center sm:text-left mx-auto lg:mx-0">
            <Link
              href="/"
              aria-label="Caritas Kampala Homepage"
              className="shrink-0 mx-auto sm:mx-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#a90012] rounded-lg"
            >
              <Image
                src="/images/logos/Caritas_Kampala_footer.png"
                alt="Caritas Kampala logo"
                width={400}
                height={140}
                className="h-20 sm:h-24 lg:h-28 xl:h-28 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm sm:text-base text-red-50 font-normal leading-relaxed max-w-xl">
              The Charities Department is one of Caritas Kampala&apos;s core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.
            </p>
          </div>

          <div className="w-full lg:w-auto space-y-4 shrink-0 text-center lg:text-right">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-50 block">
              CONNECT WITH US
            </span>
            <div className="flex items-center justify-center lg:justify-end gap-5">
              <Link href="/contact-us" className="rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#8d000f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a90012]">
                Contact our office
              </Link>
              <div className="flex items-center gap-2" aria-label="Social channels coming soon">
                <span role="img" aria-label="Facebook — link coming soon" title="Facebook — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#8d000f]">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.6V3.94c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03V10H7.7v3h2.61v8h3.19Z" /></svg>
                </span>
                <span role="img" aria-label="Instagram — link coming soon" title="Instagram — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#8d000f]">
                  <svg className="h-4.5 w-4.5 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" strokeWidth="1.8" /><circle cx="17.4" cy="6.6" r="1" className="fill-current stroke-none" /></svg>
                </span>
                <span role="img" aria-label="YouTube — link coming soon" title="YouTube — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#8d000f]">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>
                </span>
                <span role="img" aria-label="X — link coming soon" title="X — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#8d000f]">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" /></svg>
                </span>
              </div>
              {/* Official social URLs are intentionally omitted until verified by Caritas Kampala. */}
              {/*
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Caritas Kampala on Facebook (opens in a new tab)"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a90012] rounded"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Caritas Kampala on X Twitter (opens in a new tab)"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a90012] rounded"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Caritas Kampala on Instagram (opens in a new tab)"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a90012] rounded"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Caritas Kampala on YouTube (opens in a new tab)"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#a90012] rounded"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>*/}
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

        <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-red-100 font-normal gap-3 pt-1 text-left">
          <div>
            {`© ${currentYear} Caritas Kampala — Charities Department. All Rights Reserved.`}
          </div>
          <div className="self-start sm:self-auto">
            <a
              href="https://www.caritaskampalacharities.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Main Website (opens in a new tab)"
              className="hover:underline inline-flex items-center gap-1.5 font-bold text-white hover:text-red-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8d000f] rounded"
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
