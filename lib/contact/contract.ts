export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export const CONTACT_SUBJECTS = ["general", "donations", "partnerships", "media", "other"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactSubmission(value: unknown): ContactSubmission | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;
  if (body.website) return null;

  const required = ["name", "email", "subject", "message"] as const;
  if (required.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) return null;

  const submission = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    phone: typeof body.phone === "string" ? body.phone.trim() : "",
    subject: String(body.subject).trim(),
    message: String(body.message).trim(),
  };

  if (!emailPattern.test(submission.email)) return null;
  if (!(CONTACT_SUBJECTS as readonly string[]).includes(submission.subject)) return null;
  if (submission.name.length > 100 || submission.email.length > 254 || submission.phone.length > 30 || submission.message.length > 4000) return null;
  return submission;
}
