"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { Heading, Eyebrow, Text } from "@/components/ui/Typography";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "frontend.global_error", digest: error.digest ?? null, timestamp: new Date().toISOString() }));
  }, [error.digest]);

  return (
    <html lang="en">
      <body className="bg-caritas-beige text-gray-900">
        <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center">
          <div className="max-w-lg space-y-6">
            <Eyebrow color="red">Caritas Kampala</Eyebrow>
            <Heading level={1} variant="page">The site needs a moment</Heading>
            <Text color="muted">Please try again. Our team has been notified of the unexpected problem.</Text>
            <Button type="button" onClick={() => reset()} variant="primary" size="md">
              Try again
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
