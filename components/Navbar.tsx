"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* ─── Types ─────────────────────────────────────────────── */
type SubLink = { name: string; href?: string; desc?: string };
type MegaMenuCard = {
  title: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
};
type NavLink = {
  name: string;
  href?: string;
  megaMenu?: { links: SubLink[]; card: MegaMenuCard };
};

/* ─── Nav data ───────────────────────────────────────────── */
const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    megaMenu: {
      links: [
        {
          name: "Our Story & Values",
          href: "/about-us/our-story",
          desc: "Our story, mission, and the values that guide everything we do.",
        },
        {
          name: "Our Team",
          href: "/about-us/our-team",
          desc: "The people leading and carrying out this work every day.",
        },
        {
          name: "Chaconet Partners",
          href: "/about-us/chaconet-partners",
          desc: "Working together with charity homes and partners across the Archdiocese.",
        },
      ],
      card: {
        title: "About Us",
        description:
          "The Charities Department is one of Caritas Kampala's core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.",
        image: "/images/Main Slider/Caritas_Kampala_18.jpg",
        cta: { label: "Read Our Story", href: "/about-us" },
      },
    },
  },
  { name: "Our Programmes",    href: "/our-programmes" },
  {
    name: "Resources",
    megaMenu: {
      links: [
        {
          name: "News & Updates",
          href: "/resources/news",
          desc: "The latest updates and stories from our work.",
        },
        {
          name: "Gallery",
          href: "/resources/gallery",
          desc: "Photos from our programmes and community work.",
        },
        {
          name: "Annual Reports",
          desc: "Reports on our work - coming soon.",
        },
        {
          name: "FAQs",
          desc: "Answers to common questions",
        },
      ],
      card: {
        title: "Resources",
        description:
          "Photos, videos, and the latest updates from our work across the Archdiocese of Kampala.",
        image: "/images/Main Slider/Caritas_Kampala_90.jpg",
        cta: { label: "Browse News", href: "/resources/news" },
      },
    },
  },
  { name: "Contact Us", href: "/contact-us" },
];

/* ─── Component ──────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen,  setIsMobileMenuOpen]  = useState(false);
  const [isSearchOpen,      setIsSearchOpen]      = useState(false);
  const [isShareModalOpen,  setIsShareModalOpen]  = useState(false);
  const [openMegaMenu,      setOpenMegaMenu]      = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isScrolled,        setIsScrolled]        = useState(false);
  const [searchQuery,       setSearchQuery]       = useState("");

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const shareTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const shareCloseRef = useRef<HTMLButtonElement | null>(null);
  const shareModalRef = useRef<HTMLDivElement | null>(null);

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.caritaskampalacharities.me/";

  /* Scroll Listener for Sticky Glass Header Elevation */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu or modal is open */
  useEffect(() => {
    if (isMobileMenuOpen || isShareModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isShareModalOpen]);

  /* Focus search input on open */
  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  /* Focus trap & auto-focus for share modal */
  useEffect(() => {
    if (!isShareModalOpen) return;
    const timer = setTimeout(() => shareCloseRef.current?.focus(), 50);

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !shareModalRef.current) return;
      const focusable = shareModalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [isShareModalOpen]);

  /* Global Keyboard Esc & Accessibility listener */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMegaMenu(null);
        if (isSearchOpen) {
          setIsSearchOpen(false);
          searchButtonRef.current?.focus();
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
        if (isShareModalOpen) {
          setIsShareModalOpen(false);
          shareTriggerRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isSearchOpen, isMobileMenuOpen, isShareModalOpen]);

  const handleSharePlatform = (platform: "facebook" | "twitter" | "whatsapp" | "email") => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(
      "Caritas Kampala - Ending poverty, promoting justice and restoring dignity"
    );

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
        "width=600,height=450,noopener,noreferrer"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        "_blank",
        "width=600,height=450,noopener,noreferrer"
      );
    } else if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${title}%20${url}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (platform === "email") {
      window.location.href = `mailto:?subject=${title}&body=Check out Caritas Kampala: ${shareUrl}`;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/resources/news?search=${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchOpen(false);
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const getMegaMenuHref = (link: NavLink) => link.href ?? link.megaMenu?.links[0]?.href ?? "/";

  /* Mega-menu hover helpers */
  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMegaMenu(name);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMegaMenu(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      {/* Skip Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:px-5 focus:py-3 focus:bg-[#b10017] focus:text-white focus:font-bold focus:text-sm focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "shadow-md border-b border-gray-200/90 backdrop-blur-md bg-white/95"
            : "border-b border-gray-100 shadow-xs"
        }`}
      >
        {/* ── Top Utility Bar ─────────────────────────────── */}
        <div className="bg-[#141414] text-gray-200 text-xs py-2 border-b border-white/5">
          <div className="site-container flex justify-center lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <div className="flex items-center space-x-2 text-xs min-w-0 justify-center lg:justify-start">
              <strong className="text-white font-bold shrink-0 font-sans tracking-wide">
                Part of Caritas Kampala
              </strong>
              <span className="text-gray-500 shrink-0" aria-hidden="true">
                |
              </span>
              <a
                href="https://www.caritaskampalacharities.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-300 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 transition-colors flex items-center shrink-0 no-underline rounded-xs"
                aria-label="Visit Caritas Kampala Main Website (opens in a new tab)"
              >
                <span className="group-hover:underline underline-offset-2 decoration-gray-400 group-hover:decoration-white font-sans">
                  Main Website
                </span>
                <svg
                  className="w-3 h-3 ml-1 shrink-0 text-gray-400 group-hover:text-white inline-block select-none transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-5 shrink-0 justify-end">
              {/* Share Button */}
              <button
                ref={shareTriggerRef}
                onClick={() => setIsShareModalOpen(true)}
                className="flex items-center space-x-1.5 hover:text-white text-gray-200 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-xs"
                aria-label="Open Share Modal"
                aria-haspopup="dialog"
                aria-expanded={isShareModalOpen}
              >
                <span
                  className="inline-flex items-center justify-center bg-[#e0ded3] text-[#141414] rounded-[3px] w-4 h-4 shrink-0 font-bold"
                  aria-hidden="true"
                >
                  <svg
                    className="w-2.5 h-2.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                  </svg>
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-widest font-semibold uppercase font-sans">
                  SHARE
                </span>
              </button>

              {/* Search Toggle */}
              <div className="relative">
                <button
                  ref={searchButtonRef}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex items-center space-x-1.5 hover:text-white text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer rounded-xs"
                  aria-label="Toggle Search Input"
                  aria-expanded={isSearchOpen}
                >
                  <svg
                    className="w-3.5 h-3.5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="hidden md:inline text-[10px] sm:text-[11px] tracking-widest font-semibold uppercase font-sans">
                    Search
                  </span>
                </button>

                {isSearchOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setIsSearchOpen(false)}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -right-2 sm:right-0 top-full mt-2.5 w-72.5 sm:w-80 bg-white text-gray-900 shadow-2xl rounded-xl p-3 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150"
                      role="search"
                    >
                      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                        <label htmlFor="navbar-search-input" className="sr-only">
                          Search Website
                        </label>
                        <input
                          ref={searchInputRef}
                          id="navbar-search-input"
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search programs, updates, news..."
                          className="w-full text-xs pl-3.5 pr-14 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b10017] focus:ring-2 focus:ring-[#b10017]/20 transition-all"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-8 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full"
                            aria-label="Clear search query"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                        <button
                          type="submit"
                          className="absolute right-1.5 bg-[#b10017] hover:bg-[#8e0a20] text-white p-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] transition-colors cursor-pointer"
                          aria-label="Submit search"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Navbar Row ──────────────────────────────── */}
        <div className="site-container py-2 sm:py-2.5 lg:py-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-xs focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4"
            aria-label="Caritas Kampala Homepage"
          >
            <div className="relative h-14 sm:h-16 lg:h-17 w-auto">
              <Image
                src="/images/logos/Caritas_Kampala_logo.jpg"
                alt="Caritas Kampala Logo"
                width={240}
                height={96}
                className="h-14 sm:h-16 lg:h-17 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Navigation ───────────────────────── */}
          <nav
            className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 2xl:gap-5 min-w-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const linkId = `nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`;
              const menuId = `mega-menu-${link.name.toLowerCase().replace(/\s+/g, "-")}`;
              const active = link.href ? isRouteActive(link.href) : false;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.megaMenu && openMenu(link.name)}
                  onMouseLeave={() => link.megaMenu && scheduleClose()}
                >
                  {link.megaMenu ? (
                    <button
                      id={linkId}
                      type="button"
                      className="relative inline-flex items-center gap-1.5 text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-semibold tracking-wide transition-colors uppercase whitespace-nowrap py-2 px-1 rounded-xs text-gray-800 hover:text-[#b10017] focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4"
                      aria-haspopup="true"
                      aria-expanded={openMegaMenu === link.name}
                      aria-controls={menuId}
                      onMouseEnter={() => openMenu(link.name)}
                      onFocus={() => openMenu(link.name)}
                      onClick={() => openMenu(link.name)}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          openMegaMenu === link.name ? "rotate-180 text-[#b10017]" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      id={linkId}
                      href={link.href!}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex items-center gap-1.5 text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-semibold tracking-wide transition-colors uppercase whitespace-nowrap py-2 px-1 rounded-xs focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4 ${
                        active
                          ? "text-[#b10017]"
                          : "text-gray-800 hover:text-[#b10017]"
                      }`}
                    >
                      <span>{link.name}</span>

                      {active && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#b10017] rounded-full animate-in fade-in duration-200"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  )}

                  {/* ── Mega-menu flyout ─────────────────── */}
                  {link.megaMenu && openMegaMenu === link.name && (
                    <div
                      id={menuId}
                      className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-155 xl:w-180 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      role="region"
                      aria-labelledby={linkId}
                    >
                      <div className="grid grid-cols-[1fr_255px]">
                        {/* Left — links */}
                        <div className="p-6 sm:p-7 flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.14em] mb-3.5">
                              {link.name} Overview
                            </p>
                            <ul className="space-y-1.5" role="menu">
                              {link.megaMenu.links.map((sub) => {
                                const isSubActive = sub.href ? pathname === sub.href : false;
                                return (
                                  <li key={sub.name} role="none">
                                    {sub.href ? (
                                      <Link
                                        role="menuitem"
                                        href={sub.href}
                                        onClick={() => setOpenMegaMenu(null)}
                                        className={`group flex items-start justify-between px-4 py-3 rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#b10017] ${
                                          isSubActive
                                            ? "bg-[#b10017] text-white shadow-xs"
                                            : "hover:bg-[#b10017] text-gray-800 hover:text-white"
                                        }`}
                                      >
                                        <div className="flex flex-col">
                                          <span
                                            className={`text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                                              isSubActive
                                                ? "text-white"
                                                : "text-gray-900 group-hover:text-white"
                                            }`}
                                          >
                                            {sub.name}
                                          </span>
                                          {sub.desc && (
                                            <span
                                              className={`text-[11.5px] mt-1 normal-case font-normal leading-relaxed transition-colors ${
                                                isSubActive
                                                  ? "text-red-100"
                                                  : "text-gray-500 group-hover:text-red-100"
                                              }`}
                                            >
                                              {sub.desc}
                                            </span>
                                          )}
                                        </div>
                                        <svg
                                          className={`w-3.5 h-3.5 mt-0.5 transition-all duration-150 shrink-0 ml-2 ${
                                            isSubActive
                                              ? "text-white opacity-100 translate-x-0"
                                              : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 text-white"
                                          }`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </Link>
                                    ) : (
                                      <Link
                                        role="menuitem"
                                        href="#"
                                        onClick={(event) => event.preventDefault()}
                                        className="group flex items-start justify-between px-4 py-3 rounded-xl transition-all duration-150 hover:bg-[#b10017] text-gray-800 hover:text-white focus-visible:outline-2 focus-visible:outline-[#b10017]"
                                      >
                                        <div className="flex flex-col">
                                          <span className="text-[13px] font-semibold uppercase tracking-wide text-gray-900 group-hover:text-white">
                                            {sub.name}
                                          </span>
                                          {sub.desc && (
                                            <span className="text-[11.5px] mt-1 normal-case font-normal leading-relaxed text-gray-500 group-hover:text-red-100">
                                              {sub.desc}
                                            </span>
                                          )}
                                        </div>
                                        <svg
                                          className="w-3.5 h-3.5 mt-0.5 transition-all duration-150 shrink-0 ml-2 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 text-white"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                        </div>

                        {/* Right — featured card */}
                        <div className="bg-[#b10017] p-6 flex flex-col justify-between border-l border-red-800/30">
                          <div>
                            <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-white/10 shadow-xs">
                              <Image
                                src={link.megaMenu.card.image}
                                alt={`${link.megaMenu.card.title} overview`}
                                fill
                                sizes="255px"
                                className="object-cover"
                              />
                            </div>

                            <h3 className="text-white font-bold text-sm leading-snug mb-2 font-sans">
                              {link.megaMenu.card.title}
                            </h3>
                            <p className="text-red-100/90 text-xs leading-relaxed font-sans">
                              {link.megaMenu.card.description}
                            </p>
                          </div>

                          <Link
                            href={link.megaMenu.card.cta.href}
                            onClick={() => setOpenMegaMenu(null)}
                            className="inline-flex items-center gap-1.5 mt-5 bg-white text-[#b10017] font-bold text-xs px-4.5 py-2.5 rounded-full hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-150 w-fit shadow-xs"
                          >
                            {link.megaMenu.card.cta.label}
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Donate CTA + Mobile toggle */}
          <div className="flex items-center justify-end space-x-3 shrink-0">
            <Link
              href="/donate"
              className="hidden sm:inline-block bg-[#b10017] text-white hover:bg-white hover:text-[#b10017] focus-visible:bg-white focus-visible:text-[#b10017] focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-2 border-2 border-[#b10017] text-xs xl:text-sm font-bold px-5 py-2.5 xl:px-6 xl:py-2.5 2xl:px-7 2xl:py-3 rounded-full tracking-wider uppercase transition-all duration-200 text-center shadow-xs cursor-pointer"
              aria-label="Donate to Caritas Kampala"
            >
              DONATE
            </Link>

            <button
              ref={mobileToggleRef}
              onClick={() => {
                setOpenMegaMenu(null);
                setIsMobileMenuOpen((current) => !current);
              }}
              className="lg:hidden text-gray-800 hover:text-[#b10017] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <svg
                className="w-6.5 h-6.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Backdrop & Container ─────────── */}
        {isMobileMenuOpen && (
          <>
            {/* Darkened backdrop overlay to isolate mobile menu */}
            <div
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <nav
              id="mobile-navigation-drawer"
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-4xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-8 duration-300 pb-6"
              aria-label="Mobile Navigation"
            >
              {/* Embedded Mobile Search Input */}
              <div className="p-4 pt-6 bg-gray-50/90 border-b border-gray-200/80 relative">
                {/* Bottom Sheet Handle */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" aria-hidden="true"></div>
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <label htmlFor="mobile-drawer-search" className="sr-only">
                    Search Website
                  </label>
                  <input
                    id="mobile-drawer-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search programmes, news, updates..."
                    className="w-full text-xs sm:text-sm pl-3.5 pr-14 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#b10017] focus:ring-2 focus:ring-[#b10017]/20 transition-all shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-10 text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full"
                      aria-label="Clear search query"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  <button
                    type="submit"
                    className="absolute right-1.5 bg-[#b10017] hover:bg-[#8e0a20] text-white p-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                    aria-label="Submit search"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Navigation Links list */}
              <div className="px-4 sm:px-6 py-4 space-y-2">
                {navLinks.map((link) => {
                  const active = link.href ? isRouteActive(link.href) : false;
                  return link.megaMenu ? (
                    /* Accordion item */
                    <div key={link.name} className="border-b border-gray-100 last:border-none">
                      <button
                        onClick={() =>
                          setOpenMobileSubmenu(
                            openMobileSubmenu === link.name ? null : link.name
                          )
                        }
                        className={`flex items-center justify-between w-full text-base font-bold min-h-16 py-4 px-4 uppercase transition-all focus-visible:outline-2 focus-visible:outline-[#b10017] rounded-xl ${
                          active ? "bg-[#f8f8f8] text-[#b10017]" : "text-gray-900 hover:bg-[#f8f8f8] hover:text-[#b10017]"
                        }`}
                        aria-expanded={openMobileSubmenu === link.name}
                      >
                        <div className="flex items-center space-x-2.5">
                          {active && (
                            <span
                              className="w-1.5 h-5 bg-[#b10017] rounded-full shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <span>{link.name}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openMobileSubmenu === link.name
                              ? "rotate-180 text-[#b10017]"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {openMobileSubmenu === link.name && (
                        <div className="py-2.5 pl-3 pr-2 space-y-1 bg-gray-50/70 border border-gray-200/60 rounded-xl my-2 animate-in fade-in duration-150">
                          {link.megaMenu.links.map((sub) => {
                            const isSubActive = sub.href ? pathname === sub.href : false;
                            return sub.href ? (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                aria-current={isSubActive ? "page" : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between text-sm min-h-12 py-3.5 px-4 rounded-xl transition-all ${
                                  isSubActive
                                    ? "bg-[#b10017] text-white font-bold shadow-xs"
                                    : "text-gray-800 hover:text-[#b10017] hover:bg-gray-100/90 font-medium"
                                }`}
                              >
                                <span className="uppercase tracking-wide">{sub.name}</span>
                                <svg
                                  className="w-4 h-4 opacity-60 shrink-0 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </Link>
                            ) : (
                              <button
                                key={sub.name}
                                type="button"
                                onClick={(event) => event.preventDefault()}
                                className={`w-full flex items-center justify-between text-sm min-h-12 py-3.5 px-4 rounded-xl transition-all ${
                                  "text-gray-800 font-medium cursor-default"
                                }`}
                              >
                                <span className="uppercase tracking-wide">{sub.name}</span>
                              </button>
                            );
                          })}
                          <Link
                            href={getMegaMenuHref(link)}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 mt-2 ml-2 py-2 text-xs font-bold text-[#b10017] hover:underline underline-offset-2 uppercase tracking-wide"
                          >
                            View all {link.name}
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Plain link */
                    <div key={link.name} className="border-b border-gray-100 last:border-none">
                      <Link
                        href={link.href ?? "/"}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center w-full text-base font-bold min-h-16 py-4 px-4 uppercase transition-all focus-visible:outline-2 focus-visible:outline-[#b10017] rounded-xl ${
                          active ? "bg-[#f8f8f8] text-[#b10017]" : "text-gray-900 hover:bg-[#f8f8f8] hover:text-[#b10017]"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                            {active && (
                            <span
                                className="w-1.5 h-5 bg-[#b10017] rounded-full shrink-0"
                                aria-hidden="true"
                            />
                            )}
                            <span>{link.name}</span>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {/* Mobile Donate Button */}
                <div className="pt-6 pb-2 px-4">
                  <Link
                    href="/donate"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-[#b10017] text-white hover:bg-[#8e0a20] font-bold py-4 rounded-xl text-base uppercase tracking-wider transition-all duration-200 shadow-md"
                    aria-label="Donate to Caritas Kampala"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>

            </nav>
          </>
        )}

      {/* ── Share Modal ──────────────────────────────────── */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => {
              setIsShareModalOpen(false);
              shareTriggerRef.current?.focus();
            }}
            aria-label="Close share dialog"
          />

          <div
            ref={shareModalRef}
            className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-[calc(100%-2rem)] mx-4 shadow-2xl z-10 border border-gray-100"
            style={{ animation: "shareModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            <style>{`
              @keyframes shareModalIn {
                from { opacity: 0; transform: scale(0.95) translateY(8px); }
                to   { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>

            {/* Close Button - 44px minimum touch target */}
            <button
              ref={shareCloseRef}
              onClick={() => {
                setIsShareModalOpen(false);
                shareTriggerRef.current?.focus();
              }}
              className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-1 transition-colors focus:outline-none rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Close share modal"
            >
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="flex items-start space-x-4 pr-8">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#b10017] text-white rounded-full flex items-center justify-center shrink-0 shadow-md"
                aria-hidden="true"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  id="share-modal-title"
                  className="text-lg sm:text-xl font-bold text-[#b10017] font-serif leading-tight"
                >
                  Help Us Reach More Hearts
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-sans">
                  Every share extends our message of hope, love, and compassion. Invite others to join our mission.
                </p>
              </div>
            </div>

            {/* Share Platform Buttons with Labels */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-7">
              {/* Facebook */}
              <button
                type="button"
                onClick={() => handleSharePlatform("facebook")}
                className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                aria-label="Share on Facebook"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1877f2] hover:bg-[#0d65d9] group-focus-visible:ring-2 group-focus-visible:ring-[#1877f2] group-focus-visible:ring-offset-2 text-white flex items-center justify-center shadow-md transition-colors duration-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.4 0-4 1.2-4 3v3z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Facebook</span>
              </button>

              {/* X (Twitter) */}
              <button
                type="button"
                onClick={() => handleSharePlatform("twitter")}
                className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                aria-label="Share on X (Twitter)"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black hover:bg-[#222] group-focus-visible:ring-2 group-focus-visible:ring-black group-focus-visible:ring-offset-2 text-white flex items-center justify-center shadow-md transition-colors duration-200">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">X</span>
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => handleSharePlatform("whatsapp")}
                className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                aria-label="Share on WhatsApp"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe57] group-focus-visible:ring-2 group-focus-visible:ring-[#25D366] group-focus-visible:ring-offset-2 text-white flex items-center justify-center shadow-md transition-colors duration-200">
                  <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">WhatsApp</span>
              </button>

              {/* Instagram */}
              <button
                type="button"
                onClick={() => window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer")}
                className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                aria-label="Visit us on Instagram"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 group-focus-visible:ring-2 group-focus-visible:ring-[#ee2a7b] group-focus-visible:ring-offset-2 text-white flex items-center justify-center shadow-md transition-opacity duration-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Instagram</span>
              </button>

              {/* Email */}
              <button
                type="button"
                onClick={() => handleSharePlatform("email")}
                className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none"
                aria-label="Share via Email"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ea4335] hover:bg-[#d63022] group-focus-visible:ring-2 group-focus-visible:ring-[#ea4335] group-focus-visible:ring-offset-2 text-white flex items-center justify-center shadow-md transition-colors duration-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
