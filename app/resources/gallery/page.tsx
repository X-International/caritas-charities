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
  GALLERY_CATEGORIES,
  type GalleryImage,
} from "./gallery-config";

export const metadata = buildPageMetadata({
  title: "Gallery | Caritas Kampala Charity Office",
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
    return "Community support and donation activity";
  }
  return "Community outreach and programme activity";
}

const FOLDER_TO_CATEGORIES: Record<string, string[]> = {
  "Event 01": ["events-visits"],
  "Event 02": ["events-visits"],
  "Event 03": ["support-donations"],
  "Event 04": ["support-donations"],
  "Event 05": ["chaconet-network"],
  "Event 06": ["workshops-training"],
  "Charity Shop": ["charity-shop"],
  Charities: ["chaconet-network"],
};

const MISCELLANY_CATEGORIES: Record<string, string[]> = {
  "Caritas_Kampala_23.jpg": ["events-visits"],
  "Caritas_Kampala_24.jpg": ["chaconet-network"],
  "Caritas_Kampala_25.jpg": ["chaconet-network"],
  "Caritas_Kampala_26.jpg": ["workshops-training"],
  "Caritas_Kampala_39.jpg": ["support-donations"],
  "Caritas_Kampala_40.jpg": ["events-visits"],
  "Caritas_Kampala_42.jpg": ["support-donations"],
  "Caritas_Kampala_43.jpg": ["events-visits"],
  "Caritas_Kampala_44.jpg": ["workshops-training"],
  "Caritas_Kampala_82.jpg": ["chaconet-network"],
  "Caritas_Kampala_83.jpg": ["support-donations"],
  "Caritas_Kampala_84.jpg": ["chaconet-network"],
  "Caritas_Kampala_85.jpg": ["chaconet-network"],
  "Caritas_Kampala_86.jpg": ["support-donations"],
  "Caritas_Kampala_87.jpg": ["chaconet-network"],
  "Caritas_Kampala_88.jpg": ["chaconet-network"],
};

const CATEGORY_BY_ID = Object.fromEntries(
  GALLERY_CATEGORIES.map((category) => [category.id, category])
);

function readGalleryFiles(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public", "images");
  const results: GalleryImage[] = [];

  const folders = Object.keys(FOLDER_TO_CATEGORIES);

  for (const folder of folders) {
    const dir = path.join(publicDir, folder);
    if (!fs.existsSync(dir)) continue;

    const categories = FOLDER_TO_CATEGORIES[folder];
    const categoryLabel = CATEGORY_BY_ID[categories[0]].label;

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
        categories,
        categoryLabel,
        alt: filenameToAlt(file, categoryLabel),
        caption: getFactualCaption(folder),
      });
    }
  }

  const miscellanyDir = path.join(publicDir, "Miscellany");
  if (fs.existsSync(miscellanyDir)) {
    for (const [file, categories] of Object.entries(MISCELLANY_CATEGORIES)) {
      if (!fs.existsSync(path.join(miscellanyDir, file))) continue;
      const categoryLabel = CATEGORY_BY_ID[categories[0]].label;
      results.push({
        src: `/images/Miscellany/${file}`,
        categories,
        categoryLabel,
        alt: filenameToAlt(file, categoryLabel),
        caption: "Community outreach and programme activity",
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
