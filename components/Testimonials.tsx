"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { assets } from "../lib/tokens";

const testimonials = [
  {
    quote:
      "Kai has that rare ability to bridge deep technical complexity with emotional editorial elegance. Our conversion tripled after the relaunch.",
    name: "Sarah Jenkins",
    role: "VP of Product at Stripe & Partner at Foundry",
  },
  {
    quote:
      "The rigor Kai brought to our multi-brand token system cut our frontend sprint cycles in half. He is a truly singular product mind.",
    name: "Marcus Vance",
    role: "Head of Engineering at Monolith Labs",
  },
];

/** Testimonials — carousel with engagement summary card. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index % testimonials.length]!;

  return (
    <section className="mx-auto w-full max-w-[1440px] py-6">
      <div className="t-theme rounded-3xl border border-on-surface/10 bg-surface-container-low p-8 shadow-sm dark:border-white/10 dark:bg-dark-1 sm:p-12 lg:p-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="space-y-2">
              <Eyebrow className="text-primary dark:text-accent-bright">Endorsements</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
                Peer &amp; Leadership Testimonial
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous review"
                onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface/10 bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:border-primary dark:hover:bg-primary dark:hover:text-on-primary"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                aria-label="Next review"
                onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface/10 bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:border-primary dark:hover:bg-primary dark:hover:text-on-primary"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-center gap-8 pt-4 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <span className="block select-none font-display-xl text-display-xl leading-none text-primary dark:text-accent-bright">
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
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface-container-highest shadow-sm dark:bg-dark-2">
                    <div
                      className="h-full w-full bg-cover bg-center dark:brightness-[.92]"
                      style={{ backgroundImage: `url('${assets.testimonialPortrait}')` }}
                      role="img"
                      aria-label="Portrait of testimonial author"
                    />
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
                [ Engagement summary ]
              </div>
              <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant dark:text-dark-muted">
                <div className="flex justify-between gap-4 pb-2">
                  <span>Scope:</span>
                  <span className="text-right font-bold text-on-surface dark:text-dark-ink">
                    Design System Re-architecture
                  </span>
                </div>
                <div className="flex justify-between gap-4 pb-2">
                  <span>Duration:</span>
                  <span className="font-bold text-on-surface dark:text-dark-ink">
                    14 Weeks Sprint
                  </span>
                </div>
                <div className="flex justify-between gap-4 pb-2">
                  <span>Impact:</span>
                  <span className="font-bold text-primary dark:text-accent-bright">
                    +210% Velocity
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <span className="rounded bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
                  Verified reference
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
