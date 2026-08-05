"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "frontend.global_error", digest: error.digest ?? null, timestamp: new Date().toISOString() }));
  }, [error.digest]);

  return (
    <html lang="en">
      <body className="bg-[#faf7f2] text-gray-900">
        <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center">
          <div className="max-w-lg space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b10017]">Caritas Kampala</p>
            <h1 className="font-serif text-4xl font-bold">The site needs a moment</h1>
            <p className="text-gray-600">Please try again. Our team has been notified of the unexpected problem.</p>
            <button type="button" onClick={() => reset()} className="rounded-full bg-[#b10017] px-6 py-3 text-sm font-bold text-white hover:bg-[#8e0a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2">
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
