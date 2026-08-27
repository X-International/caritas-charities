"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, type NavLink } from "@/components/navigation/nav-data";
import ShareModal from "@/components/ShareModal";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";

/* ─── Component ──────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen,  setIsMobileMenuOpen]  = useState(false);
  const [isSearchOpen,      setIsSearchOpen]      = useState(false);
  const [isShareModalOpen,  setIsShareModalOpen]  = useState(false);
  const [openMegaMenu,      setOpenMegaMenu]      = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isScrolled,        setIsScrolled]        = useState(false);
  const [searchQuery,       setSearchQuery]       = useState("");
  const [currentHash,       setCurrentHash]       = useState("");
  const [mobileMenuTop,     setMobileMenuTop]     = useState(106);

  const isHomePage = pathname === "/";
  const transparentTop = isHomePage && !isScrolled;
  const linkTextColor = transparentTop ? "text-white hover:text-[#b10017]" : "text-gray-800 hover:text-[#b10017]";
  const mobileToggleColor = transparentTop ? "text-white hover:text-[#b10017] hover:bg-white/10" : "text-gray-800 hover:text-[#b10017] hover:bg-gray-100";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const shareTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    mobileToggleRef.current?.focus();
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    searchButtonRef.current?.focus();
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
    shareTriggerRef.current?.focus();
  };

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  /* Scroll Listener for Sticky Glass Header Elevation */
  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === "/" ? 80 : 15;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen || !headerRef.current) return;
    const header = headerRef.current;
    const updateMenuTop = () => setMobileMenuTop(Math.ceil(header.getBoundingClientRect().height));
    updateMenuTop();
    const observer = new ResizeObserver(updateMenuTop);
    observer.observe(header);
    return () => observer.disconnect();
  }, [isMobileMenuOpen]);

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

  useEffect(() => {
    if (!isMobileMenuOpen || !mobileNavRef.current) return;
    const drawer = mobileNavRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusable = drawer.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /* Global Keyboard Esc & Accessibility listener */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMegaMenu(null);
        if (isSearchOpen) {
          closeSearch();
        }
        if (isMobileMenuOpen) {
          closeMobileMenu();
        }
        if (isShareModalOpen) {
          closeShareModal();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isSearchOpen, isMobileMenuOpen, isShareModalOpen]);

  const isRouteActive = (href: string) => {
    const route = href.split("#")[0];
    if (route === "/") return pathname === "/";
    return pathname.startsWith(route);
  };

  const isSubRouteActive = (href: string) => {
    const [route, hash] = href.split("#");
    if (hash) return pathname.startsWith(route) && currentHash === `#${hash}`;
    return isRouteActive(href);
  };

  const getMegaMenuHref = (link: NavLink) => link.href ?? link.megaMenu?.links[0]?.href;

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
        ref={headerRef}
        className="w-full sticky top-0 z-50 bg-transparent"
      >
        {/* ── Top Utility Bar ─────────────────────────────── */}
        <div
          className="bg-[#141414] text-gray-200 text-[11px] sm:text-xs py-1.5 sm:py-2 border-b border-white/10"
          role="region"
          aria-label="Top utility bar"
        >
          <div className="site-container flex items-center justify-between gap-3 lg:gap-8">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs min-w-0 flex-wrap sm:flex-nowrap">
              <strong className="text-white font-bold shrink-0 font-sans tracking-wide">
                Part of Caritas Kampala
              </strong>
              <span className="text-gray-400 shrink-0 select-none" aria-hidden="true">
                |
              </span>
              <a
                href="https://www.caritaskampala.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-300 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 transition-colors inline-flex items-center gap-1 shrink-0 no-underline rounded-sm py-1 px-1.5 -my-1 hover:bg-white/10 active:bg-white/15"
                aria-label="Visit Caritas Kampala Main Website (opens in a new tab)"
              >
                <span className="group-hover:underline underline-offset-2 decoration-gray-400 group-hover:decoration-white font-sans font-medium">
                  Main Website
                </span>
                <svg
                  className="w-3 h-3 text-gray-400 group-hover:text-white inline-block select-none transition-colors"
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

            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 justify-end">
              {/* Share Button */}
              <button
                ref={shareTriggerRef}
                onClick={() => {
                  closeSearch();
                  setIsShareModalOpen(true);
                  trackEvent(ANALYTICS_EVENTS.shareOpen, { placement: "utility_bar" });
                }}
                className="inline-flex items-center justify-center gap-1.5 text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/15 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 transition-colors cursor-pointer rounded-md p-1.5 sm:px-2.5 sm:py-1 min-w-[32px] min-h-[32px]"
                aria-label="Share this page"
                aria-haspopup="dialog"
                aria-expanded={isShareModalOpen}
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-gray-300 shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                </svg>
                <span className="hidden sm:inline text-[10px] sm:text-[11px] tracking-widest font-semibold uppercase font-sans">
                  SHARE
                </span>
              </button>

              {/* Search Toggle */}
              <div className="relative">
                <button
                  ref={searchButtonRef}
                  onClick={() => {
                    if (isSearchOpen) {
                      closeSearch();
                    } else {
                      setIsSearchOpen(true);
                    }
                  }}
                  className={`inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer rounded-md p-1.5 sm:px-2.5 sm:py-1 min-w-[32px] min-h-[32px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                    isSearchOpen
                      ? "bg-[#b10017] text-white shadow-xs"
                      : "text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/15"
                  }`}
                  aria-label={isSearchOpen ? "Close search" : "Open search"}
                  aria-expanded={isSearchOpen}
                  aria-controls="navbar-search-panel"
                >
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
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
                  <span className="hidden sm:inline text-[10px] sm:text-[11px] tracking-widest font-semibold uppercase font-sans">
                    Search
                  </span>
                </button>

                {isSearchOpen && (
                  <>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={closeSearch}
                      aria-label="Close search"
                    />
                    <div
                      id="navbar-search-panel"
                      className="absolute -right-2 sm:right-0 top-full mt-2.5 w-72.5 sm:w-80 bg-white text-gray-900 shadow-2xl rounded-xl p-3 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150 motion-reduce:animate-none"
                      role="search"
                    >
                      <form action="/search" method="get" onSubmit={(event) => {
                        if (!searchQuery.trim()) {
                          event.preventDefault();
                          return;
                        }
                        // Close the panel and reset query after a tick so the
                        // native GET form submission can fire before unmount.
                        trackEvent(ANALYTICS_EVENTS.newsSearch, { query_present: Boolean(searchQuery), query_length: searchQuery.length });
                        setTimeout(() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }, 0);
                      }} className="relative flex items-center">
                        <label htmlFor="navbar-search-input" className="sr-only">
                          Search Website
                        </label>
                        <input
                          ref={searchInputRef}
                          id="navbar-search-input"
                          name="q"
                          type="text"
                          inputMode="search"
                          autoComplete="off"
                          required
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search programs, updates, news…"
                          className="w-full text-xs pl-3.5 pr-14 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b10017] focus:ring-2 focus:ring-[#b10017]/20 transition-[border-color,box-shadow]"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-8 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] p-1 rounded-full"
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
        <div className={`w-full transition-colors duration-300 ease-out ${transparentTop ? "bg-[rgba(10,10,10,0.30)] border-b border-white/10" : "bg-white"}`}>
          <div className="site-container py-2 sm:py-2.5 lg:py-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-xs focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4"
            aria-label="Caritas Kampala Homepage"
          >
            <div className="relative h-14 sm:h-16 lg:h-17 w-auto">
              <Image
                src={transparentTop ? "/images/logos/Caritas_Kampala_Footer.png" : "/images/logos/Caritas_Kampala_logo.jpg"}
                alt="Caritas Kampala Logo"
                width={240}
                height={96}
                className="h-14 sm:h-16 lg:h-17 w-auto object-contain transition-opacity duration-300"
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
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      scheduleClose();
                    }
                  }}
                >
                  {link.megaMenu ? (
                    <button
                      id={linkId}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openMegaMenu === link.name}
                      aria-controls={menuId}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => openMenu(link.name)}
                      onFocus={() => openMenu(link.name)}
                      onClick={() => {
                        if (openMegaMenu === link.name) {
                          setOpenMegaMenu(null);
                        } else {
                          openMenu(link.name);
                        }
                      }}
                      className={`relative inline-flex items-center gap-1.5 text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-semibold tracking-wide transition-colors uppercase whitespace-nowrap py-2 px-1 rounded-xs ${linkTextColor} focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4`}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          openMegaMenu === link.name
                            ? "rotate-180 text-[#b10017]"
                            : transparentTop
                            ? "text-white/70"
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
                      {active && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#b10017] rounded-full animate-in fade-in duration-200"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      id={linkId}
                      href={link.href!}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex items-center gap-1.5 text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-semibold tracking-wide transition-colors uppercase whitespace-nowrap py-2 px-1 rounded-xs focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-4 ${linkTextColor}`}
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
                      className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-155 xl:w-180 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150 motion-reduce:animate-none"
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
                            <ul className="space-y-1.5">
                              {link.megaMenu.links.map((sub) => {
                                const isSubActive = sub.href ? isSubRouteActive(sub.href) : false;
                                return (
                                  <li key={sub.name}>
                                    {sub.href ? (
                                      <Link
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
                                      <span
                                        aria-disabled="true"
                                        className="group flex items-start justify-between px-4 py-3 rounded-xl transition-all duration-150 hover:bg-[#b10017] text-gray-800 hover:text-white focus-visible:outline-2 focus-visible:outline-[#b10017] cursor-pointer"
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
                                      </span>
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

                          <Button
                            disabled={!link.megaMenu.card.cta.href}
                            href={link.megaMenu.card.cta.href}
                            variant="secondary"
                            size="sm"
                            className="mt-5"
                            rightIcon={
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
                            }
                            onClick={() => setOpenMegaMenu(null)}
                          >
                            {link.megaMenu.card.cta.label}
                          </Button>
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
            <Button
              href="/donate"
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
              aria-label="Donate to Caritas Kampala"
            >
              DONATE
            </Button>

            <button
              ref={mobileToggleRef}
              onClick={() => {
                setOpenMegaMenu(null);
                if (isMobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              className={`lg:hidden ${mobileToggleColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] p-2 rounded-md transition-colors`}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
      </div>
    </header>

      {/* ── Mobile Drawer Backdrop & Container ─────────── */}
        {isMobileMenuOpen && (
          <>
            {/* Darkened backdrop overlay to isolate mobile menu */}
            <div
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-200 motion-reduce:transition-none"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            <nav
              ref={mobileNavRef}
              id="mobile-navigation-drawer"
              className="lg:hidden fixed left-0 right-0 z-50 bg-white shadow-2xl overflow-y-auto overscroll-contain animate-in slide-in-from-bottom-8 duration-300 motion-reduce:animate-none pb-6"
              style={{ top: `${mobileMenuTop}px`, height: `calc(100vh - ${mobileMenuTop}px)` }}
              aria-label="Mobile Navigation"
              role="dialog"
              aria-modal="true"
            >
              {/* Navigation Links list */}
              <div className="px-4 sm:px-6 pt-4 pb-4 space-y-2">
                {navLinks.map((link) => {
                  const active = link.href ? isRouteActive(link.href) : false;
                  return link.megaMenu ? (
                    /* Accordion item */
                    <div key={link.name} className="border-b border-gray-100 last:border-none">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileSubmenu(
                            openMobileSubmenu === link.name ? null : link.name
                          )
                        }
                        className={`flex items-center justify-between w-full text-base font-bold min-h-16 py-4 px-4 uppercase transition-all focus-visible:outline-2 focus-visible:outline-[#b10017] rounded-xl ${
                          active ? "bg-[#f8f8f8] text-gray-900" : "text-gray-900 hover:bg-[#f8f8f8] hover:text-[#b10017]"
                        }`}
                        aria-expanded={openMobileSubmenu === link.name}
                        aria-controls={`mobile-submenu-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="flex items-center space-x-2.5">
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
                        <div id={`mobile-submenu-${link.name.toLowerCase().replace(/\s+/g, "-")}`} className="py-2.5 pl-3 pr-2 space-y-1 bg-gray-50/70 border border-gray-200/60 rounded-xl my-2 animate-in fade-in duration-150">
                          {link.megaMenu.links.map((sub) => {
                            const isSubActive = sub.href ? isSubRouteActive(sub.href) : false;
                            return sub.href ? (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                aria-current={isSubActive ? "page" : undefined}
                                onClick={closeMobileMenu}
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
                              <span
                                key={sub.name}
                                aria-disabled="true"
                                className="w-full flex items-center justify-between text-sm min-h-12 py-3.5 px-4 rounded-xl transition-all text-gray-800 font-medium cursor-pointer"
                              >
                                <span className="uppercase tracking-wide">{sub.name}</span>
                              </span>
                            );
                          })}
                          {getMegaMenuHref(link) ? (
                            <Link
                              href={getMegaMenuHref(link)!}
                              onClick={closeMobileMenu}
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
                          ) : (
                            <span
                              aria-disabled="true"
                              className="inline-flex items-center gap-1.5 mt-2 ml-2 py-2 text-xs font-bold text-[#b10017] uppercase tracking-wide cursor-pointer"
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
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Plain link */
                    <div key={link.name} className="border-b border-gray-100 last:border-none">
                      <Link
                        href={link.href ?? "/"}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMobileMenu}
                        className={`flex items-center w-full text-base font-bold min-h-16 py-4 px-4 uppercase transition-all focus-visible:outline-2 focus-visible:outline-[#b10017] rounded-xl ${
                          active ? "bg-[#f8f8f8] text-gray-900" : "text-gray-900 hover:bg-[#f8f8f8] hover:text-[#b10017]"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                            <span>{link.name}</span>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {/* Mobile Donate Button */}
                <div className="pt-6 pb-2 px-4">
                  <Button
                    href="/donate"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center rounded-xl"
                    onClick={closeMobileMenu}
                    aria-label="Donate to Caritas Kampala"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>

            </nav>
          </>
        )}

      {isShareModalOpen && <ShareModal onClose={closeShareModal} />}
    </>
  );
}
