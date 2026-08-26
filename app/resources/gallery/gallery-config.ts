export const ALL_CATEGORY_ID = "all";

export type GalleryCategory = {
  id: string;
  folder: string;
  label: string;
  shortLabel: string;
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "event-01",
    folder: "Event 01",
    label: "Community Events",
    shortLabel: "Events",
  },
  {
    id: "charities",
    folder: "Charities",
    label: "Partner Charities",
    shortLabel: "Charities",
  },
  {
    id: "workshops",
    folder: "Event 06",
    label: "Workshops",
    shortLabel: "Workshops",
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
