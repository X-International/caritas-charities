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
    label: "Parish Outreach Programme",
    shortLabel: "Outreach",
  },
  {
    id: "event-02",
    folder: "Event 02",
    label: "Emergency Relief Distribution",
    shortLabel: "Relief",
  },
  {
    id: "event-03",
    folder: "Event 03",
    label: "Community Empowerment",
    shortLabel: "Empowerment",
  },
  {
    id: "charities",
    folder: "Charities",
    label: "Partner Charities",
    shortLabel: "Charities",
  },
  {
    id: "event-04",
    folder: "Event 04",
    label: "Annual Celebration",
    shortLabel: "Celebration",
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
