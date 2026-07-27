"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#be0f2e] text-white pt-16 pb-12 border-t border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Brand & Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-red-700/60">
          {/* Brand Info (Left) */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-[#be0f2e] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L10 8H14L12 2Z" />
                  <path d="M12 22L14 16H10L12 22Z" />
                  <path d="M2 12L8 10V14L2 12Z" />
                  <path d="M22 12L16 14V10L22 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold font-serif tracking-tight leading-none text-white">
                Caritas
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-red-100 font-light leading-relaxed max-w-lg">
              Caritas Internationalis is a global confederation of 162 Catholic relief, development, and social service organizations operating in over 200 countries and territories. Together, we serve the poor and vulnerable.
            </p>
          </div>

          {/* Social Links & Newsletter (Right) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Social Icons */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-200 block">
                Follow us on social networks
              </span>
              <div className="flex items-center space-x-3">
                {["facebook", "x", "instagram", "linkedin", "youtube"].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-red-800/80 hover:bg-white hover:text-[#be0f2e] flex items-center justify-center transition-colors text-white"
                    aria-label={`Follow on ${platform}`}
                  >
                    <span className="capitalize text-[10px] font-bold">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-200 block">
                Join our newsletter
              </span>
              {isSubscribed ? (
                <div className="bg-white/10 text-white text-xs font-semibold p-3 rounded-full border border-white/20 text-center">
                  ✓ Thank you for subscribing to Caritas updates!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-red-900/60 border border-red-700 rounded-full px-4 py-2.5 text-xs text-white placeholder-red-300 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#be0f2e] hover:bg-red-50 text-xs font-bold px-6 py-2.5 rounded-full tracking-wider uppercase transition-colors shadow"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs pb-12 border-b border-red-700/60">
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-red-200 text-xs">Quick Links</h4>
            <ul className="space-y-2 text-red-100 font-light">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/what-we-do" className="hover:underline">What We Do</Link></li>
              <li><Link href="/our-work" className="hover:underline">Our Work</Link></li>
              <li><Link href="/news" className="hover:underline">News & Stories</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-red-200 text-xs">Key Focus Areas</h4>
            <ul className="space-y-2 text-red-100 font-light">
              <li><Link href="/focus/peacebuilding" className="hover:underline">Peacebuilding & Reconciliation</Link></li>
              <li><Link href="/focus/food-security" className="hover:underline">Food Security & Governance</Link></li>
              <li><Link href="/focus/volunteers" className="hover:underline">Volunteers & Youth</Link></li>
              <li><Link href="/focus/gender-equality" className="hover:underline">Advancing Gender Equality</Link></li>
              <li><Link href="/focus/human-development" className="hover:underline">Integral Human Development</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-red-200 text-xs">Get Involved</h4>
            <ul className="space-y-2 text-red-100 font-light">
              <li><Link href="/emergency-responses" className="hover:underline">Emergency Responses</Link></li>
              <li><Link href="/campaigns" className="hover:underline">Global Campaigns</Link></li>
              <li><Link href="/donate" className="hover:underline">Donate Online</Link></li>
              <li><Link href="/volunteer" className="hover:underline">Join as a Volunteer</Link></li>
              <li><Link href="/partner" className="hover:underline">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-red-200 text-xs">Latest From Caritas</h4>
            <ul className="space-y-2 text-red-100 font-light">
              <li><Link href="/news/bangladesh-flood" className="hover:underline">Bangladesh Flood Emergency</Link></li>
              <li><Link href="/news/sudan-action" className="hover:underline">Sudan Humanitarian Action</Link></li>
              <li><Link href="/news/gaza-relief" className="hover:underline">Gaza Emergency Relief</Link></li>
              <li><Link href="/news/ukraine-support" className="hover:underline">Ukraine Conflict Support</Link></li>
              <li><Link href="/news/horn-of-africa" className="hover:underline">Horn of Africa Relief</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-red-200 font-light space-y-3 sm:space-y-0">
          <div className="flex space-x-4">
            <span>© {new Date().getFullYear()} Caritas Internationalis. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:underline">Privacy Notice</Link>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
