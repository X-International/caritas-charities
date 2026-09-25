export interface PublicationDocument {
  id: string;
  title: string;
  year: number;
  period?: string;
  category: "annual-needs" | "annual-report";
  pdfUrl: string | null;
  summaryPdfUrl?: string | null;
  fileSize?: string;
  description: string;
  secondaryDescription?: string;
}

/**
 * 2027 Annual Needs & Priorities Document Definition
 *
 * Published PDF Location:
 *   public/Caritas_Kampala_2027_Needs_List_REDESIGNED_v2.pdf
 * Public URL:
 *   /Caritas_Kampala_2027_Needs_List_REDESIGNED_v2.pdf
 */
export const ANNUAL_NEEDS_2027: PublicationDocument = {
  id: "2027-needs-list-and-needs-based-budget",
  title: "2027 Needs List & Needs-Based Budget",
  year: 2027,
  period: "January–December 2027",
  category: "annual-needs",
  pdfUrl: "/Caritas_Kampala_2027_Needs_List_REDESIGNED_v2.pdf",
  summaryPdfUrl: null,
  description:
    "The 2027 document sets out priority needs and proposed support packages identified across the Charity Office programme for the January–December 2027 period.",
  secondaryDescription:
    "It supports planning, collaboration, resource mobilisation and targeted assistance towards identified needs.",
};

/**
 * Annual Reports Archive Architecture
 *
 * Prepared for future publications. When published:
 * - Primary action "VIEW REPORT →" opens the PDF in a new browser tab inline
 * - Secondary action "DOWNLOAD PDF" triggers download
 */
export const ANNUAL_REPORTS_ARCHIVE: PublicationDocument[] = [];
