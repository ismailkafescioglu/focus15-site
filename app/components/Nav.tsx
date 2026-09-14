"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "./nav-links";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        background: "var(--paper)",
        zIndex: 40,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Link href="/" style={{ display: "flex" }} onClick={() => setOpen(false)}>
          <Image
            src="/focus15-logo.svg"
            alt="focus15"
            width={300}
            height={122}
            unoptimized
            priority
            style={{ width: "auto", height: 44 }}
          />
        </Link>

        <nav
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: active ? "var(--navy)" : "var(--ink-soft)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 8,
            width: 40,
            height: 40,
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--ink)",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          className="nav-mobile"
          style={{
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            padding: "8px 24px 20px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
                fontWeight: 600,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
        @media (min-width: 761px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
