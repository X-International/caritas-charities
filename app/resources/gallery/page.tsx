import fs from "fs";
import path from "path";
import ClientGallery from "../ClientGallery";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  filenameToAlt,
  GALLERY_CATEGORIES,
  GALLERY_IMAGE_EXTENSIONS,
  type GalleryImage,
} from "./gallery-config";

export const metadata = {
  title: "Photo Gallery | Caritas Kampala",
  description:
    "View photo highlights of Caritas Kampala's humanitarian relief, community empowerment, and parish programs.",
};

function readGalleryFiles(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public", "images");
  const results: GalleryImage[] = [];

  for (const category of GALLERY_CATEGORIES) {
    const dir = path.join(publicDir, category.folder);
    if (!fs.existsSync(dir)) continue;

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
        src: `/images/${category.folder}/${file}`,
        categoryId: category.id,
        categoryLabel: category.label,
        alt: filenameToAlt(file, category.label),
        caption: category.label,
      });
    }
  }

  return results.reverse();
}

const galleryImages = readGalleryFiles();
const categoryCount = new Set(galleryImages.map((img) => img.categoryId)).size;

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

              <dl className="mt-5 sm:mt-6 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 text-xs sm:text-sm text-white/90">
                <div className="flex items-baseline gap-1.5">
                  <dt className="font-semibold text-white">{galleryImages.length}</dt>
                  <dd>photos</dd>
                </div>
                <div className="hidden xs:block text-white/40" aria-hidden>
                  ·
                </div>
                <div className="flex items-baseline gap-1.5">
                  <dt className="font-semibold text-white">{categoryCount}</dt>
                  <dd>collections</dd>
                </div>
                <div className="hidden xs:block text-white/40" aria-hidden>
                  ·
                </div>
                <div className="flex items-baseline gap-1.5 min-w-0">
                  <dd className="truncate">Parish programmes across the Archdiocese</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <ClientGallery images={galleryImages} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
