import fs from "fs";
import path from "path";
import ClientGallery from "../ClientGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import {
  filenameToAlt,
  GALLERY_IMAGE_EXTENSIONS,
  type GalleryImage,
} from "./gallery-config";

export const metadata = buildPageMetadata({
  title: "Gallery | Caritas Kampala’s Charity Office",
  description:
    "Explore photos from our programmes, events, and community activities across Kampala Archdiocese.",
  path: "/resources/gallery",
});

function getFactualCaption(folder: string): string {
  if (folder === "Charity Shop") {
    return "Charity Shop in Nsambya";
  }
  if (folder === "Event 02") {
    return "Emergency relief supplies preparation";
  }
  if (folder === "Event 06") {
    return "Skills training workshop session";
  }
  if (folder === "Charities" || folder === "Event 04") {
    return "Partner charity institution gathering";
  }
  if (folder === "Event 03") {
    return "Community empowerment programme activity";
  }
  return "Community outreach and programme activity";
}

function readGalleryFiles(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public", "images");
  const results: GalleryImage[] = [];

  const FOLDER_TO_CATEGORY_MAP: Record<string, { id: string; label: string; shortLabel: string }> = {
    "Event 01": { id: "events", label: "Events", shortLabel: "Events" },
    "Event 02": { id: "chaconet-partners", label: "Chaconet & Partners", shortLabel: "Chaconet & Partners" },
    "Event 03": { id: "programmes", label: "Programmes", shortLabel: "Programmes" },
    "Event 04": { id: "events", label: "Events", shortLabel: "Events" },
    "Event 05": { id: "events", label: "Events", shortLabel: "Events" },
    "Event 06": { id: "workshops-training", label: "Workshops & Training", shortLabel: "Workshops & Training" },
    "Charity Shop": { id: "charity-shop", label: "Charity Shop", shortLabel: "Charity Shop" },
    "Charities": { id: "events", label: "Events", shortLabel: "Events" },
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
        caption: getFactualCaption(folder),
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
            { label: "Resources", href: "#" },
            { label: "Gallery" },
          ]}
          description="Explore photos from our programmes, events, and community activities across Kampala Archdiocese."
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
