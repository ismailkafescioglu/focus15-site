"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          // Honeypot — see the field below and route.ts for what this is.
          company: form.get("company"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
      {/* Honeypot — invisible to real visitors (off-screen, unreachable by
          keyboard, hidden from screen readers), but bots that blindly fill
          every field on a form fill this one too. route.ts silently
          pretends to succeed whenever it's non-empty, rather than erroring,
          so a bot has no signal to adapt against. Added 2026-09-14 after
          the first wave of spam submissions. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Name</span>
        <input
          name="name"
          type="text"
          required
          style={{
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "10px 12px",
            fontSize: "0.95rem",
            fontFamily: "inherit",
          }}
        />
      </label>
      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Email</span>
        <input
          name="email"
          type="email"
          required
          style={{
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "10px 12px",
            fontSize: "0.95rem",
            fontFamily: "inherit",
          }}
        />
      </label>
      <label style={{ display: "grid", gap: 6 }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          style={{
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "10px 12px",
            fontSize: "0.95rem",
            fontFamily: "inherit",
            resize: "vertical",
          }}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          justifySelf: "start",
          background: "var(--navy)",
          color: "var(--paper)",
          border: "none",
          borderRadius: 6,
          padding: "12px 24px",
          fontSize: "0.95rem",
          fontWeight: 700,
          fontFamily: "inherit",
          cursor: "pointer",
          opacity: status === "sending" ? 0.6 : 1,
        }}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p style={{ color: "#1a7f37", fontSize: "0.9rem" }}>
          Thanks — we&apos;ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#b42318", fontSize: "0.9rem" }}>
          Something went wrong — please email{" "}
          <a href="mailto:contact@focus15.co.uk" style={{ fontWeight: 600 }}>
            contact@focus15.co.uk
          </a>{" "}
          directly instead.
        </p>
      )}
    </form>
  );
}
