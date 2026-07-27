"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://www.caritaskampala.org/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "ABOUT US", href: "/about-us" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "OUR WORK", href: "/our-work" },
    { name: "WHERE WE ARE", href: "/where-we-are" },
    { name: "RESOURCES", href: "/resources" },
    { name: "SUPPORT US", href: "/support-us" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      {/* Top Utility Bar */}
      <div className="bg-[#1a1a1a] text-gray-300 text-xs py-1 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 text-xs min-w-0 flex-1">
            <strong className="text-white font-bold shrink-0">Caritas Kampala</strong>
            <span className="text-gray-600 shrink-0">|</span>
            <a
              href="https://www.caritaskampala.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 hover:text-white transition-colors flex items-center shrink-0 no-underline"
            >
              <span className="group-hover:underline underline-offset-2 decoration-gray-600 group-hover:decoration-white">
                Main Website
              </span>
              <svg 
                className="w-3 h-3 ml-1 shrink-0 text-gray-500 group-hover:text-white inline-block no-underline select-none align-middle transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            {/* Share Button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center space-x-1.5 hover:text-white text-gray-300 transition-colors cursor-pointer focus:outline-none"
              aria-label="Share"
            >
              <span className="inline-flex items-center justify-center bg-[#d3d1c5] text-[#161616] rounded-[3px] w-[15px] h-[15px] shrink-0">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                </svg>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase font-sans">SHARE</span>
            </button>
            
            {/* Search Icon / Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center space-x-1 hover:text-white text-gray-300 transition-colors focus:outline-none cursor-pointer"
                aria-label="Search"
              >
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden md:inline text-[10px] sm:text-xs font-semibold font-sans">Search</span>
              </button>
              {isSearchOpen && (
                <>
                  {/* Invisible Backdrop overlay to dismiss search when clicking outside */}
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setIsSearchOpen(false)}></div>
                  
                  {/* Dropdown Card - Fully responsive mobile-first width */}
                  <div className="absolute right-[-8px] sm:right-0 top-full mt-2 w-[280px] sm:w-72 bg-white text-gray-900 shadow-xl rounded-md p-2 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full text-xs pl-3 pr-7 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#be0f2e]"
                        autoFocus
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer p-0.5"
                        aria-label="Clear Search"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-[#be0f2e] rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            {/* Caritas Flame Cross Emblem SVG */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L10 8H14L12 2Z" />
              <path d="M12 22L14 16H10L12 22Z" />
              <path d="M2 12L8 10V14L2 12Z" />
              <path d="M22 12L16 14V10L22 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-[#be0f2e] font-serif leading-none">
              Caritas
            </span>
            <span className="text-[9px] uppercase tracking-widest font-semibold text-gray-600">
              Internationalis
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold text-gray-800 hover:text-[#be0f2e] tracking-wide transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Donate CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="#donate"
            className="bg-[#be0f2e] hover:bg-[#8e0a20] text-white text-xs font-bold px-6 py-2.5 rounded-full tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            DONATE
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-[#be0f2e] focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-gray-800 hover:text-[#be0f2e] py-1.5 uppercase border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#donate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#be0f2e] text-white font-bold py-2.5 rounded-full text-xs uppercase tracking-wider shadow"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      )}

      {/* Share Modal Overlay */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-default" onClick={() => setIsShareModalOpen(false)}></div>
          
          {/* Modal Container - Mobile-first width and fully responsive */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-[calc(100%-2rem)] mx-4 shadow-2xl z-10 border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content Row */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#be0f2e] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-red-700 font-serif leading-tight">Help Us Reach More Hearts</h3>
                <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-normal font-sans">
                  Every share extends our message of hope, love, and compassion. Invite others to join our mission.
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.4 0-4 1.2-4 3v3z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black hover:bg-[#333333] text-white flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                aria-label="Share on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram / Copy Link */}
              <button
                onClick={handleCopyLink}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 text-white cursor-pointer ${
                  copied 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-80"
                }`}
                aria-label="Copy site link"
              >
                {copied ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )}
              </button>

              {/* Email */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ea4335] hover:bg-[#d63022] text-white flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                aria-label="Share via Email"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {copied && (
              <p className="text-center text-xs text-green-600 font-semibold mt-4 animate-fade-in">
                Link copied to clipboard!
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
