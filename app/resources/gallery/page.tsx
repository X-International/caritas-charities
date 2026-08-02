import fs from "fs";
import path from "path";
import ClientGallery from "../ClientGallery";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Photo Gallery | Caritas Kampala",
  description:
    "View photo highlights of Caritas Kampala's humanitarian relief, community empowerment, and parish programs.",
};

// Helper to read files from public folders in the requested order
function readGalleryFiles() {
  const publicDir = path.join(process.cwd(), "public", "images");
  const folders = [
    "Event 01",
    "Event 02",
    "Event 03",
    "Charities",
    "Event 04",
  ];

  const exts = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

  const results: string[] = [];

  for (const folder of folders) {
    const dir = path.join(publicDir, folder);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return exts.includes(ext);
    });
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
    for (const file of files) {
      // public path
      results.push(`/images/${folder}/${file}`);
    }
  }

  // Reverse overall order so the last images (by the combined order) appear first
  results.reverse();

  return results;
}

const galleryImages = readGalleryFiles();

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wide font-semibold text-red-200">
              <ol className="flex items-center space-x-1">
                <li>
                  <Link href="/" className="hover:underline text-white focus-visible:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">HOME</Link>
                </li>
                <li className="px-2 text-red-200">/</li>
                <li>
                  <span className="text-white">RESOURCES</span>
                </li>
                <li className="px-2 text-red-200">/</li>
                <li aria-current="page" className="text-red-200">GALLERY</li>
              </ol>
            </nav>

            <div className="mt-4 lg:mt-6 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold font-serif leading-[1.06] tracking-tight">
                Photo Gallery
              </h1>

              <div aria-hidden className="w-16 h-px bg-white/20 mt-4 mb-4 rounded" />

              <p className="text-base sm:text-lg text-white/95 max-w-3xl font-normal leading-relaxed">
                Capturing moments of hope, relief, and community solidarity across the Archdiocese.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Client-side gallery component handles grid, pagination and lightbox */}
          <ClientGallery images={galleryImages} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ---------------- Client component ----------------
// This must be a client component for interactivity (lightbox, pagination)

// ClientGallery is dynamically imported from ./ClientGallery (client-side only)

