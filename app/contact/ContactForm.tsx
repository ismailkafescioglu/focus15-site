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
