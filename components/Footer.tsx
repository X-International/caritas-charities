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
      { label: "Our Team" },
      { label: "Partners — Chaconet Network", href: "/about-us/chaconet-partners" },
      { label: "Our Programmes" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Get Involved" },
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
      { label: "Privacy Policy" },
      { label: "Terms of Use" },
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
              <span aria-disabled="true" className="text-red-100/80 cursor-pointer">{link.label}</span>
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
        className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out motion-reduce:transition-none ${
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
                  <span aria-disabled="true" className="text-red-100/80 cursor-pointer">{link.label}</span>
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
              <div className="flex items-center gap-2" aria-label="Social channels coming soon">
                <span role="img" aria-label="Facebook — link coming soon" title="Facebook — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-[background-color,border-color,color] duration-200 hover:border-white/60 hover:bg-white/20 hover:text-white">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.6V3.94c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03V10H7.7v3h2.61v8h3.19Z" /></svg>
                </span>
                <span role="img" aria-label="Instagram — link coming soon" title="Instagram — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-[background-color,border-color,color] duration-200 hover:border-white/60 hover:bg-white/20 hover:text-white">
                  <svg className="h-4.5 w-4.5 fill-none stroke-current" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" strokeWidth="1.8" /><circle cx="17.4" cy="6.6" r="1" className="fill-current stroke-none" /></svg>
                </span>
                <span role="img" aria-label="YouTube — link coming soon" title="YouTube — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-[background-color,border-color,color] duration-200 hover:border-white/60 hover:bg-white/20 hover:text-white">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>
                </span>
                <span role="img" aria-label="X — link coming soon" title="X — link coming soon" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 shadow-sm transition-[background-color,border-color,color] duration-200 hover:border-white/60 hover:bg-white/20 hover:text-white">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" /></svg>
                </span>
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

        <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-red-100 font-normal gap-3 pt-1 text-left">
          <div>
            {`© ${currentYear} Caritas Kampala — Charities Department. All Rights Reserved.`}
          </div>
          <div className="self-start sm:self-auto">
            <a
              href="https://www.caritaskampala.org/"
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
