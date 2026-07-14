import nodemailer from "nodemailer";
import type { MessageInput, OrderInput } from "@/lib/types";

// Mailgun SMTP. The From address must be on the domain verified in Mailgun;
// with a sandbox domain, mail only reaches "authorized recipients".
const FROM =
  process.env.EMAIL_FROM ??
  "Travels in Mongolia <no-reply@mail.tourinmongolia.com>";
const ADMIN_EMAIL = "info@sunpath-mongolia.com";

function hasEmail(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.mailgun.org",
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(to: string, subject: string, html: string) {
  await getTransporter().sendMail({ from: FROM, to, subject, html });
}

async function sendPair(
  label: string,
  userEmail: string,
  userSubject: string,
  userHtml: string,
  adminSubject: string,
  adminHtml: string
) {
  if (!hasEmail()) {
    console.log(`[${label}] SMTP_USER/SMTP_PASS not set — skipping emails`);
    return;
  }
  const results = await Promise.allSettled([
    sendEmail(userEmail, userSubject, userHtml),
    sendEmail(ADMIN_EMAIL, adminSubject, adminHtml),
  ]);
  results.forEach((result, i) => {
    if (result.status === "rejected") {
      const recipient = i === 0 ? userEmail : ADMIN_EMAIL;
      console.error(`[${label}] failed to email ${recipient}:`, result.reason);
    }
  });
}

export async function sendOrderEmails(order: OrderInput) {
  const isGroup = order.enquiryType === "group";
  const rows = [
    ["Tour", order.tourName],
    ["Booking type", isGroup ? "Group departure" : "Private tour"],
    ...(isGroup && order.departure ? [["Departure", order.departure]] : []),
    ["Name", `${order.title ?? ""} ${order.name}`.trim()],
    ["Email", order.email],
    ["Country", order.country ?? ""],
    ["Adults", String(order.adults ?? 1)],
    ["Children", String(order.children ?? 0)],
    ["Arrival date", order.arrivalDate ?? ""],
    ["Comment", order.comment ?? ""],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">${k}</td><td style="padding:4px 0;">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  const details = `<table style="border-collapse:collapse;">${rows}</table>`;

  await sendPair(
    "orders",
    order.email,
    `We received your enquiry — ${order.tourName}`,
    `<p>Dear ${escapeHtml(order.name)},</p>
     <p>Thank you for your enquiry about <strong>${escapeHtml(order.tourName)}</strong>.
     Our team will get back to you shortly to confirm the details.</p>
     ${details}
     <p>Best regards,<br/>Travels in Mongolia</p>`,
    isGroup
      ? `New GROUP departure booking: ${order.tourName}${order.departure ? ` — ${order.departure}` : ""}`
      : `New private tour enquiry: ${order.tourName}`,
    `<p>A new ${isGroup ? "group departure booking" : "private tour enquiry"} was submitted.</p>${details}`
  );
}

export async function sendMessageEmails(message: MessageInput) {
  const details = `<table style="border-collapse:collapse;">
    <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td style="padding:4px 0;">${escapeHtml(message.name)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td style="padding:4px 0;">${escapeHtml(message.email)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Message</td><td style="padding:4px 0;">${escapeHtml(message.comment)}</td></tr>
  </table>`;

  await sendPair(
    "messages",
    message.email,
    "We received your message",
    `<p>Dear ${escapeHtml(message.name)},</p>
     <p>Thank you for contacting us. We have received your message and will
     reply as soon as possible.</p>
     ${details}
     <p>Best regards,<br/>Travels in Mongolia</p>`,
    `New contact message from ${message.name}`,
    `<p>A new contact message was submitted.</p>${details}`
  );
}
