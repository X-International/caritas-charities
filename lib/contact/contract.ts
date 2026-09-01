export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export const CONTACT_SUBJECTS = [
  "General Enquiry",
  "Donations & Giving",
  "Current Appeal",
  "Volunteer Enquiry",
  "Partnership Enquiry",
  "Charity Shop",
  "Chaconet Network",
  "Programmes & Services",
  "Media & Communications",
  "Website Feedback",
  "Other",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactSubmission(value: unknown): ContactSubmission | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;

  // Honeypot check: if 'website' or 'b_name' is populated, reject submission
  if (body.website && String(body.website).trim() !== "") return null;
  if (body.b_name && String(body.b_name).trim() !== "") return null;

  const required = ["name", "email", "subject", "message"] as const;
  if (
    required.some(
      (field) => typeof body[field] !== "string" || !String(body[field]).trim()
    )
  ) {
    return null;
  }

  const name = String(body.name).trim();
  const email = String(body.email).trim();
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject = String(body.subject).trim();
  const message = String(body.message).trim();

  // Validate lengths & format
  if (name.length < 2 || name.length > 120) return null;
  if (!emailPattern.test(email) || email.length > 254) return null;
  if (phone.length > 30) return null;
  if (subject.length < 2 || subject.length > 120) return null;
  if (message.length < 5 || message.length > 5000) return null;

  return {
    name,
    email,
    phone: phone || undefined,
    subject,
    message,
  };
}

/**
 * Escapes special HTML characters to prevent XSS in email bodies.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
