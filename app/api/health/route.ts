import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { status: "ok", service: "caritas-charities" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
