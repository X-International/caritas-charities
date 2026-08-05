import { NextResponse } from "next/server";
import { requestIdFrom } from "@/lib/observability/logger";

export function GET(request: Request) {
  const requestId = requestIdFrom(request);
  return NextResponse.json(
    { status: "ok", service: "caritas-charities", requestId },
    { headers: { "Cache-Control": "no-store", "X-Request-ID": requestId } }
  );
}
