import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

function clientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const siteOrigin = new URL(request.url).origin;
  if (origin && origin !== siteOrigin) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  const key = clientKey(request);
  const now = Date.now();
  const entry = requests.get(key);
  if (entry && entry.resetAt > now && entry.count >= MAX_REQUESTS) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  requests.set(key, entry && entry.resetAt > now ? { count: entry.count + 1, resetAt: entry.resetAt } : { count: 1, resetAt: now + WINDOW_MS });

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || body.website) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const fields = ["name", "email", "subject", "message"] as const;
  if (fields.some((field) => typeof body[field] !== "string" || !body[field].trim())) {
    return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (String(body.name).length > 100 || String(body.email).length > 254 || String(body.phone ?? "").length > 30 || String(body.message).length > 4000) {
    return NextResponse.json({ error: "Submission is too long" }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ error: "Contact service is not configured" }, { status: 503 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: body.name, email: body.email, phone: body.phone ?? "", subject: body.subject, message: body.message }),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Contact service rejected the message" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Contact service unavailable" }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
