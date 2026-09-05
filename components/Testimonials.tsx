"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { testimonials as copy } from "../lib/company";

/** Client testimonials — carousel with typical-engagement summary card. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  if (!copy.enabled) return null;
  const t = copy.quotes[index % copy.quotes.length]!;
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      aria-label="Client testimonials"
      className="mx-auto w-full max-w-[1440px] py-6"
      id="testimonials"
    >
      <div className="t-theme rounded-3xl border border-on-surface/10 bg-surface-container-low p-8 shadow-sm dark:border-white/10 dark:bg-dark-1 sm:p-12 lg:p-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="space-y-2">
              <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
                {copy.heading}
              </h2>
              <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-faint">
                {copy.note}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => setIndex((i) => (i === 0 ? copy.quotes.length - 1 : i - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface/10 bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:border-primary dark:hover:bg-primary dark:hover:text-on-primary"
              >
                <ArrowLeft size={18} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => setIndex((i) => (i === copy.quotes.length - 1 ? 0 : i + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface/10 bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:border-primary dark:hover:bg-primary dark:hover:text-on-primary"
              >
                <ArrowRight size={18} aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-center gap-8 pt-4 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <span
              aria-hidden
              className="block select-none font-display-xl text-display-xl leading-none text-primary dark:text-accent-bright"
            >
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-headline-md text-headline-md uppercase leading-snug text-on-surface dark:text-dark-ink">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-carbon font-headline-md text-body-xl text-cream dark:bg-dark-ink dark:text-dark-base"
                  >
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-xl uppercase leading-tight text-on-surface dark:text-dark-ink">
                      {t.name}
                    </h4>
                    <p className="font-label-mono-sm text-label-mono-sm uppercase text-primary dark:text-accent-bright">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="space-y-4 rounded-2xl border border-on-surface/10 bg-surface p-6 shadow-sm dark:border-white/10 dark:bg-dark-2 sm:p-8">
              <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
                {copy.summary.label}
              </div>
              <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant dark:text-dark-muted">
                {copy.summary.rows.map((r) => (
                  <div key={r.k} className="flex justify-between gap-4 pb-2">
                    <span>{r.k}</span>
                    <span
                      className={
                        "accent" in r && r.accent
                          ? "text-right font-bold text-primary dark:text-accent-bright"
                          : "text-right font-bold text-on-surface dark:text-dark-ink"
                      }
                    >
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <span className="rounded bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
                  {copy.summary.badge}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
