export const ALL_CATEGORY_ID = "all";

export type GalleryCategory = {
  id: string;
  folder: string;
  label: string;
  shortLabel: string;
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "events",
    folder: "Event 01",
    label: "Events",
    shortLabel: "Events",
  },
  {
    id: "programmes",
    folder: "Event 03",
    label: "Programmes",
    shortLabel: "Programmes",
  },
  {
    id: "chaconet-partners",
    folder: "Charities",
    label: "Chaconet & Partners",
    shortLabel: "Chaconet & Partners",
  },
  {
    id: "workshops-training",
    folder: "Event 06",
    label: "Workshops & Training",
    shortLabel: "Workshops & Training",
  },
  {
    id: "charity-shop",
    folder: "Charity Shop",
    label: "Charity Shop",
    shortLabel: "Charity Shop",
  },
];

export type GalleryImage = {
  src: string;
  categoryId: string;
  categoryLabel: string;
  alt: string;
  caption: string;
};

const FOLDER_TO_CATEGORY = Object.fromEntries(
  GALLERY_CATEGORIES.map((c) => [c.folder, c])
) as Record<string, GalleryCategory>;

export function folderToCategory(folder: string): GalleryCategory | undefined {
  return FOLDER_TO_CATEGORY[folder];
}

export function filenameToAlt(filename: string, categoryLabel: string): string {
  const base = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${categoryLabel} — ${base}`;
}

export const GALLERY_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
