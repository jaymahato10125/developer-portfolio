"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "../lib/company";

/** Sticky mobile conversion bar — shows after hero, hides near #contact. */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;
      const contact = document.getElementById("contact");
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.8
        : false;
      setVisible(past && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-40 flex items-center gap-3 rounded-2xl border border-on-surface/10 bg-surface/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-dark-1/95 lg:hidden"
      role="region"
      aria-label="Quick contact actions"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={company.phoneHref}
        aria-label={`Call ${company.name}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-on-surface/10 text-on-surface dark:border-white/10 dark:text-dark-ink"
      >
        <Phone size={18} aria-hidden />
      </a>
      <a
        href="#contact"
        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary font-label-mono-md text-label-mono-md uppercase text-on-primary"
      >
        <span>Start a Project</span>
        <ArrowRight size={14} aria-hidden />
      </a>
    </div>
  );
}
