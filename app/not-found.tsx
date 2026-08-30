import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Page Not Found | Caritas Kampala’s Charity Office",
  description: "The page you are looking for may have moved or no longer exists.",
  path: "/404",
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4efe6] px-6 py-16 text-center">
      <div className="max-w-lg space-y-5">
        <p className="text-6xl font-bold text-[#b10017]">404</p>
        <Heading level={1} variant="section" color="dark" className="text-4xl font-bold">Page not found</Heading>
        <p className="text-gray-600 font-sans">The page may have moved, or the link may be out of date.</p>
        <Button href="/" variant="primary" size="md">
          Return home
        </Button>
      </div>
    </main>
  );
}
