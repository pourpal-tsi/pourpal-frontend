import { NextResponse } from "next/server";
import { items } from "@/local-db";

export async function GET() {
  const URL = process.env.BACKEND_URL;
  if (!URL) return NextResponse.json(items);

  try {
    const res = await fetch(`${URL}/items`, {
      cache: "no-cache",
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
