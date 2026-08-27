import fs from "fs";
import path from "path";
import ClientGallery from "../ClientGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import {
  filenameToAlt,
  GALLERY_IMAGE_EXTENSIONS,
  type GalleryImage,
} from "./gallery-config";

export const metadata = buildPageMetadata({
  title: "Gallery | Caritas Kampala Charities Office",
  description:
    "Photos from the Charities Office's programmes, events and community work across the Kampala Archdiocese.",
  path: "/resources/gallery",
});

function readGalleryFiles(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public", "images");
  const results: GalleryImage[] = [];

  const FOLDER_TO_CATEGORY_MAP: Record<string, { id: string; label: string; shortLabel: string }> = {
    "Event 01": { id: "event-01", label: "Community Events", shortLabel: "Events" },
    "Event 02": { id: "event-01", label: "Emergency Relief Events", shortLabel: "Events" },
    "Event 03": { id: "charities", label: "Community Empowerment", shortLabel: "Charities" },
    "Event 04": { id: "charities", label: "Annual Celebrations", shortLabel: "Charities" },
    "Event 05": { id: "event-01", label: "Community Events", shortLabel: "Events" },
    "Event 06": { id: "workshops", label: "Workshops", shortLabel: "Workshops" },
    "Charity Shop": { id: "charity-shop", label: "Charity Shop", shortLabel: "Charity Shop" },
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
        <PageHeader
          title="Photo Gallery"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Gallery" },
          ]}
          description="Explore photos from our programmes, events, and community activities across the Archdiocese of Kampala."
        />

        <section className="site-container section-md">
          <ClientGallery images={galleryImages} />
        </section>

        <div className="site-container">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
