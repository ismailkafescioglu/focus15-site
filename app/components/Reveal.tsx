"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades + lifts children into place the first time they scroll into view.
// Unlike a CSS animation that plays once on page load (useless for
// anything below the fold, since it's long finished by the time someone
// scrolls there), this actually triggers on scroll. Reduced-motion is
// handled purely in CSS (see .reveal in globals.css) so this component
// never needs to know about it.
export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
