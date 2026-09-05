"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { company, navLinks } from "../lib/company";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

/**
 * Fixed top nav pill — brand lockup, capacity badge, centered links,
 * "Start a Project" CTA. Collapses to a mobile menu < lg.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="t-theme fixed left-frame-padding-mobile right-frame-padding-mobile top-frame-padding-mobile z-50 rounded-t-xl bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-b dark:border-white/10 dark:bg-dark-base/85 lg:left-frame-padding-desktop lg:right-frame-padding-desktop lg:top-frame-padding-desktop">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-12">
        <div className="flex items-center gap-5">
          <BrandMark />
          <div className="hidden items-center gap-2 rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-secondary-fixed-variant xl:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span>{company.availability}</span>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="t-theme hidden items-center gap-1 rounded-full bg-surface-container-low px-2 py-1.5 dark:border dark:border-white/10 dark:bg-dark-2 lg:flex"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "rounded-full bg-surface-container-highest px-4 py-1.5 font-label-mono-md text-label-mono-md font-bold uppercase text-on-surface shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] transition-colors dark:bg-white/10 dark:text-dark-ink dark:shadow-none"
                  : "rounded-full px-4 py-1.5 font-label-mono-md text-label-mono-md uppercase text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface dark:text-dark-muted dark:hover:bg-white/10 dark:hover:text-dark-ink"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="t-theme hidden items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase tracking-wider text-on-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all hover:bg-secondary dark:shadow-[0_0_24px_rgba(224,101,58,0.35)] dark:hover:bg-primary dark:hover:shadow-[0_0_32px_rgba(224,101,58,0.55)] sm:inline-flex"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} aria-hidden />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-on-surface dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-4 overflow-hidden rounded-2xl bg-surface-container-low dark:border dark:border-white/10 dark:bg-dark-1 lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-label-mono-md text-label-mono-md uppercase text-on-surface transition-colors hover:bg-surface-container dark:text-dark-ink dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-label-mono-md text-label-mono-md uppercase text-on-primary dark:shadow-[0_0_24px_rgba(224,101,58,0.35)]"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} aria-hidden />
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-on-surface/10 px-5 py-3 font-label-mono-md text-label-mono-md uppercase text-on-surface dark:border-white/10 dark:text-dark-ink"
              >
                Get a Free Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Scrolling secondary pill bar rendered at the top of the dot-grid. */
export function SecondaryBar() {
  return (
    <div className="t-theme mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 rounded-full bg-surface-container-low px-5 py-3 shadow-sm dark:border dark:border-white/10 dark:bg-dark-1">
      <div className="flex items-center gap-3">
        <BrandMark compact />
        <div className="hidden items-center gap-2 rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-secondary-fixed-variant md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          <span>{company.availability}</span>
        </div>
      </div>
      <nav
        aria-label="Secondary"
        className="hidden items-center gap-6 font-label-mono-md text-label-mono-md uppercase text-on-surface-variant dark:text-dark-muted lg:flex"
      >
        <a
          className="transition-colors hover:text-primary dark:hover:text-accent-bright"
          href="#services"
        >
          Services
        </a>
        <a
          className="transition-colors hover:text-primary dark:hover:text-accent-bright"
          href="#work"
        >
          Work
        </a>
        <a
          className="transition-colors hover:text-primary dark:hover:text-accent-bright"
          href="#process"
        >
          Process
        </a>
        <a
          className="transition-colors hover:text-primary dark:hover:text-accent-bright"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="transition-colors hover:text-primary dark:hover:text-accent-bright"
          href="#contact"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase tracking-wider text-on-primary shadow-sm transition-all hover:bg-secondary dark:shadow-[0_0_24px_rgba(224,101,58,0.35)] dark:hover:bg-primary dark:hover:shadow-[0_0_32px_rgba(224,101,58,0.55)]"
          href="#contact"
        >
          <span>Get Free Consultation</span>
        </a>
      </div>
    </div>
  );
}
