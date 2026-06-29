import "server-only";
import nodemailer from "nodemailer";

/**
 * SMTP mailer for the contact & inquiry forms. All credentials come from
 * server-only env vars (never NEXT_PUBLIC) so they are never shipped to the
 * browser:
 *
 *   SMTP_HOST   e.g. mail.uatindia.com
 *   SMTP_PORT   465 (SSL) or 587 (STARTTLS) — defaults to 465
 *   SMTP_USER   info@uatindia.com
 *   SMTP_PASS   mailbox password
 *   MAIL_TO     where submissions are delivered (defaults to SMTP_USER)
 *   MAIL_FROM   envelope/from address (defaults to SMTP_USER)
 */
const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const to = process.env.MAIL_TO || user;
const from = process.env.MAIL_FROM || user;

export function mailerConfigured() {
  return Boolean(host && user && pass);
}

export interface MailInput {
  subject: string;
  html: string;
  text: string;
  /** visitor's address — set as Reply-To so a reply goes straight to them */
  replyTo?: string;
}

export async function sendMail({ subject, html, text, replyTo }: MailInput) {
  if (!mailerConfigured()) throw new Error("SMTP is not configured");

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 → implicit TLS; 587 → STARTTLS
    auth: { user, pass },
  });

  await transport.sendMail({
    from: `"UAT Website" <${from}>`,
    to,
    subject,
    text,
    html,
    replyTo,
  });
}
