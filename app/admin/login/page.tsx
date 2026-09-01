"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**
     * PHASE 1 SECURITY NOTE:
     * Real authentication will be connected in Phase 2 via Supabase Auth (signInWithPassword).
     * We explicitly prevent fake client-side auth or hardcoded credentials.
     */
    setNotice(
      "Phase 1 UI Shell: Real authentication with Supabase will be connected in Phase 2."
    );
  };

  return (
    <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 space-y-6">
        {/* Branding */}
        <div className="text-center space-y-3">
          <Image
            src="/images/logos/Caritas_Kampala.png"
            alt="Caritas Kampala Logo"
            width={56}
            height={56}
            className="w-14 h-14 object-contain mx-auto"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b10017] block">
              Caritas Kampala
            </span>
            <span className="text-sm font-semibold text-gray-700 block">
              Charity Office
            </span>
          </div>

          <Heading level={1} variant="article" color="dark" className="text-2xl font-bold pt-2">
            Website Dashboard
          </Heading>
          <p className="text-xs sm:text-sm text-gray-600">
            Sign in to manage approved website content.
          </p>
        </div>

        {/* Notice Message */}
        {notice && (
          <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs p-3.5 rounded-xl text-center font-medium">
            {notice}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label htmlFor="admin-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="staff@caritaskampala.org"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b10017] focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="admin-password" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b10017] focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
              SIGN IN
            </Button>
          </div>
        </form>

        <hr className="border-gray-200" />

        {/* Footer Link back to main website */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-gray-500 hover:text-[#b10017] transition-colors"
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
