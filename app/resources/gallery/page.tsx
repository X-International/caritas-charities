import fs from "fs";
import path from "path";
import ClientGallery from "../ClientGallery";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import {
  filenameToAlt,
  GALLERY_IMAGE_EXTENSIONS,
  type GalleryImage,
} from "./gallery-config";

export const metadata = {
  title: "Gallery | Caritas Kampala Charities Office",
  description:
    "Photos from the Charities Office's programmes, events and community work across the Archdiocese of Kampala.",
  alternates: { canonical: "/resources/gallery" },
};

function readGalleryFiles(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public", "images");
  const results: GalleryImage[] = [];

  const FOLDER_TO_CATEGORY_MAP: Record<string, { id: string; label: string; shortLabel: string }> = {
    "Event 01": { id: "event-01", label: "Community Events", shortLabel: "Events" },
    "Event 02": { id: "event-01", label: "Emergency Relief Events", shortLabel: "Events" },
    "Event 03": { id: "charities", label: "Community Empowerment", shortLabel: "Charities" },
    "Event 04": { id: "charities", label: "Annual Celebrations", shortLabel: "Charities" },
    "Charities": { id: "charities", label: "Partner Charities", shortLabel: "Charities" },
  };

  const folders = Object.keys(FOLDER_TO_CATEGORY_MAP);

  for (const folder of folders) {
    const dir = path.join(publicDir, folder);
    if (!fs.existsSync(dir)) continue;

    const category = FOLDER_TO_CATEGORY_MAP[folder];

    const files = fs
      .readdirSync(dir)
      .filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return GALLERY_IMAGE_EXTENSIONS.includes(ext);
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      );

    for (const file of files) {
      results.push({
        src: `/images/${folder}/${file}`,
        categoryId: category.id,
        categoryLabel: category.label,
        alt: filenameToAlt(file, category.label),
        caption: category.shortLabel,
      });
    }
  }

  return results.reverse();
}

const galleryImages = readGalleryFiles();

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="bg-[#b10017] text-white py-8 sm:py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] xs:text-xs uppercase tracking-wide font-semibold text-red-200"
            >
              <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
                <li>
                  <Link
                    href="/"
                    className="hover:underline text-white focus-visible:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    HOME
                  </Link>
                </li>
                <li className="px-1 text-red-200" aria-hidden>
                  /
                </li>
                <li>
                  <span className="text-white">RESOURCES</span>
                </li>
                <li className="px-1 text-red-200" aria-hidden>
                  /
                </li>
                <li aria-current="page" className="text-red-200">
                  GALLERY
                </li>
              </ol>
            </nav>

            <div className="mt-4 md:mt-6 max-w-3xl">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold font-serif leading-[1.06] tracking-tight">
                Photo Gallery
              </h1>

              <div aria-hidden className="w-12 sm:w-16 h-px bg-white/20 mt-3 sm:mt-4 mb-3 sm:mb-4 rounded" />

              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-3xl font-normal leading-relaxed">
                Capturing moments of hope, relief, and community solidarity across the
                Archdiocese.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <ClientGallery images={galleryImages} />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
