import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Caritas Kampala Charities Office",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4efe6] px-6 py-16 text-center">
      <div className="max-w-lg space-y-5">
        <p className="text-6xl font-bold text-[#b10017]">404</p>
        <h1 className="font-serif text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="text-gray-600">The page may have moved, or the link may be out of date.</p>
        <Button href="/" variant="primary" size="md">
          Return home
        </Button>
      </div>
    </main>
  );
}
