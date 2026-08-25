"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { Heading, Eyebrow, Text } from "@/components/ui/Typography";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "frontend.route_error", digest: error.digest ?? null, timestamp: new Date().toISOString() }));
  }, [error.digest]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-caritas-beige px-6 py-16 text-center">
      <div className="max-w-lg space-y-6">
        <Eyebrow color="red">Something went wrong</Eyebrow>
        <Heading level={1} variant="page">We couldn&apos;t load this page</Heading>
        <Text color="muted">
          Please try again. If the problem continues, return to the homepage and use the direct contact options in the footer.
        </Text>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={() => reset()} variant="primary" size="md">
            Try again
          </Button>
          <Button href="/" variant="outline" size="md">
            Go to homepage
          </Button>
        </div>
      </div>
    </main>
  );
}
