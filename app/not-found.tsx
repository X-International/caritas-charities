import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf7f2] px-6 py-16 text-center">
      <div className="max-w-lg space-y-5">
        <p className="text-6xl font-bold text-[#b10017]">404</p>
        <h1 className="font-serif text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="text-gray-600">The page may have moved, or the link may be out of date.</p>
        <Link href="/" className="inline-flex rounded-full bg-[#b10017] px-6 py-3 text-sm font-bold text-white hover:bg-[#8e0a20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2">
          Return home
        </Link>
      </div>
    </main>
  );
}
