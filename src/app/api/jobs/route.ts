import { NextResponse } from "next/server";
import { enqueueJob } from "@/server/services/jobs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const type = (body?.type || "").toString();
  const payload = (body?.payload || {}) as Record<string, unknown>;
  if (!type) return NextResponse.json({ error: "Missing type" }, { status: 400 });

  try {
    const job = await enqueueJob(type, payload);
    return NextResponse.json({ job }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
