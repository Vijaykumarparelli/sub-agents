import { NextResponse } from "next/server";
import { properties } from "@/lib/properties";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(properties);
}
