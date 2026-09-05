import { NextResponse } from "next/server";

/**
 * POST /api/contact — validates the lead form, applies a lightweight
 * per-IP rate limit, and logs the enquiry server-side.
 * Wire RESEND_API_KEY / CONTACT_TO to send real emails (see .env.example).
 */

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-()]{6,18}$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries. Please try again later or contact us directly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const name = String(b.name ?? "").trim();
  const contact = String(b.contact ?? "").trim();
  const service = String(b.service ?? "").trim();
  const budget = String(b.budget ?? "").trim();
  const message = String(b.message ?? "").trim();
  const honeypot = String(b.website ?? "").trim();

  // Spam trap — pretend success so bots learn nothing.
  if (honeypot) return NextResponse.json({ ok: true });

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!(EMAIL_RE.test(contact) || PHONE_RE.test(contact))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email or phone number." },
      { status: 400 }
    );
  }
  if (!service) {
    return NextResponse.json({ ok: false, error: "Please choose a service." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Please describe your project (10+ characters)." },
      { status: 400 }
    );
  }

  // TODO: send via Resend/SMTP using CONTACT_TO. Kept server-side only.
  console.log("[contact]", { ip, name, contact, service, budget, message: message.slice(0, 500) });

  return NextResponse.json({ ok: true });
}
