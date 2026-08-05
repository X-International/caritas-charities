"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "frontend.route_error", digest: error.digest ?? null, timestamp: new Date().toISOString() }));
  }, [error.digest]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf7f2] px-6 py-16 text-center">
      <div className="max-w-lg space-y-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b10017]">Something went wrong</p>
        <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl">We couldn&apos;t load this page</h1>
        <p className="text-base leading-relaxed text-gray-600">
          Please try again. If the problem continues, return to the homepage and use the direct contact options in the footer.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => reset()} className="rounded-full bg-[#b10017] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8e0a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2">
            Try again
          </button>
          <Link href="/" className="rounded-full border-2 border-[#b10017] px-6 py-3 text-sm font-bold text-[#b10017] transition-colors hover:bg-[#b10017] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2">
            Go to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
