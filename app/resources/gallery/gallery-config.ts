export const ALL_CATEGORY_ID = "all";

export type GalleryCategory = {
  id: string;
  label: string;
  shortLabel: string;
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "support-donations",
    label: "Support & Donations",
    shortLabel: "Support & Donations",
  },
  {
    id: "events-visits",
    label: "Events & Visits",
    shortLabel: "Events & Visits",
  },
  {
    id: "chaconet-network",
    label: "Chaconet Network",
    shortLabel: "Chaconet Network",
  },
  {
    id: "workshops-training",
    label: "Workshops & Training",
    shortLabel: "Workshops & Training",
  },
  {
    id: "charity-shop",
    label: "Charity Shop",
    shortLabel: "Charity Shop",
  },
];

export type GalleryImage = {
  src: string;
  categories: string[];
  categoryLabel: string;
  alt: string;
  caption: string;
};

export function filenameToAlt(filename: string, categoryLabel: string): string {
  const base = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${categoryLabel}, ${base}`;
}

export const GALLERY_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
