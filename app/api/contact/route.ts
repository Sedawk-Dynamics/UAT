import { NextResponse } from "next/server";
import { sendMail, mailerConfigured } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Give the SMTP handshake headroom over Vercel's default function timeout.
export const maxDuration = 30;

/** Order/labels for known fields; any extra fields are appended after these. */
const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  product: "Product / Category",
  industry: "Industry",
  capacity: "Required capacity / airflow",
  message: "Message",
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't retry, but send nothing.
  if (typeof data.botcheck === "string" && data.botcheck.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (name.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  if (!mailerConfigured()) {
    // Lets the form fall back to its mailto link with a clear message.
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 503 },
    );
  }

  const formType = data.formType === "inquiry" ? "Inquiry" : "Contact";
  const subject = `New website ${formType.toLowerCase()} — UAT${
    data.product ? ` (${String(data.product)})` : ""
  }`;

  // Build ordered rows from known fields, then any extras (excluding internals).
  const skip = new Set(["botcheck", "formType", "subject"]);
  const entries = Object.entries(data).filter(
    ([k, v]) => !skip.has(k) && v != null && String(v).trim() !== "",
  );
  entries.sort((a, b) => {
    const ia = Object.keys(FIELD_LABELS).indexOf(a[0]);
    const ib = Object.keys(FIELD_LABELS).indexOf(b[0]);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  const text = entries
    .map(([k, v]) => `${FIELD_LABELS[k] ?? k}: ${String(v)}`)
    .join("\n");

  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#0f2e8f;vertical-align:top;white-space:nowrap">${escapeHtml(
          FIELD_LABELS[k] ?? k,
        )}</td><td style="padding:6px 12px;color:#0b1220">${escapeHtml(String(v)).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:auto">
      <h2 style="color:#0f2e8f;margin:0 0 4px">New ${formType.toLowerCase()} from the UAT website</h2>
      <p style="color:#475569;margin:0 0 16px;font-size:13px">Universal Air Technologies — Cleaning Air, Saving Lives</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0;border-radius:8px">${rows}</table>
    </div>`;

  try {
    await sendMail({ subject, html, text, replyTo: email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail send failed:", err);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }
}
