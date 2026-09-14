import { NextResponse } from "next/server";

// Sends contact-form submissions via Resend (matches the email provider
// already used in bizplan-app). Needs RESEND_API_KEY and CONTACT_TO_EMAIL
// set in the environment — until then this route responds 503 so the form
// fails loudly instead of silently swallowing messages, and the contact
// page's mailto link keeps working as a fallback either way.
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Contact form isn't configured yet" },
      { status: 503 }
    );
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // focus15.co.uk is verified in Resend, so we can send from our own
    // domain (and to any recipient) instead of the shared onboarding@resend.dev
    // sandbox address, which only allowed sending back to the account owner.
    from: "Focus15 site <no-reply@focus15.co.uk>",
    to: toEmail,
    replyTo: email,
    subject: `New contact form message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    // Logged server-side (visible in Vercel's Runtime Logs) rather than
    // returned to the client, so the public API doesn't leak internal detail.
    console.error("Resend send failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
