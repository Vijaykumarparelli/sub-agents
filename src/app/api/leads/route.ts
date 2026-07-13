import { NextRequest, NextResponse } from "next/server";

type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type LeadErrors = Partial<Record<keyof LeadInput, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { errors: { form: "Request body must be valid JSON" } },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json(
      { errors: { form: "Request body must be a JSON object" } },
      { status: 400 }
    );
  }

  const raw = body as Record<string, unknown>;
  const name = asTrimmedString(raw.name);
  const email = asTrimmedString(raw.email);
  const phone = asTrimmedString(raw.phone);
  const message = asTrimmedString(raw.message);

  const errors: LeadErrors = {};
  if (!name) {
    errors.name = "Name is required";
  }
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!message) {
    errors.message = "Message is required";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const lead: LeadInput = {
    name,
    email,
    ...(phone ? { phone } : {}),
    message,
  };

  // Stand-in for a future database write.
  console.log("[lead] New lead received:", JSON.stringify(lead));

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out! An agent will contact you within one business day.",
  });
}
