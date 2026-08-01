"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="bg-[#a90012] text-white pt-16 pb-12 border-t border-[#8e000e] rounded-3xl mx-4 my-4 sm:mx-6 sm:my-6 lg:mx-8 lg:my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Social Channels Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 pb-10">
          {/* Brand Info (Logo on Left, Text on Right beside it) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 max-w-3xl">
            <Link href="/" className="shrink-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-lg">
              <Image
                src="/images/logos/Caritas_Kampala_footer.png"
                alt="Caritas Kampala logo"
                width={400}
                height={140}
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm sm:text-base text-red-100/95 font-normal leading-relaxed">
              The Charities Department is one of Caritas Kampala&apos;s core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.
            </p>
          </div>

          {/* Social Channels (Right) */}
          <div className="space-y-3 shrink-0">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-100 block">
              FOLLOW US
            </span>
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Follow Caritas Kampala on Facebook"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Follow Caritas Kampala on X (Twitter)"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Follow Caritas Kampala on Instagram"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Follow Caritas Kampala on YouTube"
                className="text-white hover:text-red-200 transition-colors p-1 focus-visible:outline-2 focus-visible:outline-white rounded"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Lighter Horizontal Divider */}
        <hr className="border-white/25 my-8 sm:my-10" />

        {/* 4 Column Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 pb-10">
          {/* Column 1 — About */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
              ABOUT
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-red-100/95 font-normal">
              <li>
                <Link href="/about-us" className="hover:underline hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-us/our-team" className="hover:underline hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about-us/chaconet-partners" className="hover:underline hover:text-white transition-colors">
                  Partners &mdash; Chaconet Network
                </Link>
              </li>
              <li>
                <Link href="/our-programmes" className="hover:underline hover:text-white transition-colors">
                  Our Programmes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 — Get Involved */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
              GET INVOLVED
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-red-100/95 font-normal">
              <li>
                <Link href="/donate" className="hover:underline hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:underline hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:underline hover:text-white transition-colors">
                  Fundraise For Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Explore */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
              EXPLORE
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-red-100/95 font-normal">
              <li>
                <Link href="/stories-of-change" className="hover:underline hover:text-white transition-colors">
                  Stories of Change
                </Link>
              </li>
              <li>
                <Link href="/resources/gallery" className="hover:underline hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources/news" className="hover:underline hover:text-white transition-colors">
                  News &amp; Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact & Legal */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
              CONTACT &amp; LEGAL
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-red-100/95 font-normal">
              <li>
                <Link href="/contact-us" className="hover:underline hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:underline hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Lighter Horizontal Divider */}
        <hr className="border-white/25 my-8" />

        {/* Bottom Copyright & Main Website Link Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-red-100/95 font-normal gap-4 pt-2">
          <div>
            {`© ${currentYear} Caritas Kampala — Charities Department. All Rights Reserved.`}
          </div>
          <div>
            <a
              href="https://www.caritaskampala.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1.5 font-bold text-white hover:text-red-200 transition-colors"
            >
              <span>Visit Main Website</span>
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
