"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

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
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-gray-400">Caritas Internationalis Confederation</span>
          </div>
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Lang:</span>
              {["EN", "FR", "ES"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-1 rounded transition-colors ${
                    currentLang === lang ? "text-white font-bold underline" : "hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            {/* Search Icon / Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center space-x-1 hover:text-white transition-colors"
                aria-label="Search"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden md:inline">Search</span>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white text-gray-900 shadow-xl rounded-md p-2 z-50 border border-gray-200">
                  <input
                    type="text"
                    placeholder="Search Caritas.org..."
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#be0f2e]"
                  />
                </div>
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
    </header>
  );
}
