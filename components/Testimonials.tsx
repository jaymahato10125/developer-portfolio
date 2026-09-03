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
      <div className="rounded-3xl bg-surface-container-low p-8 shadow-sm sm:p-12 lg:p-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="space-y-2">
              <Eyebrow className="text-primary">Endorsements</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface sm:text-headline-lg">
                Peer &amp; Leadership Testimonial
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous review"
                onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                aria-label="Next review"
                onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-center gap-8 pt-4 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <span className="block select-none font-display-xl text-display-xl leading-none text-primary">
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
                <p className="font-headline-md text-headline-md uppercase leading-snug text-on-surface">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface-container-highest shadow-sm">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${assets.testimonialPortrait}')` }}
                      role="img"
                      aria-label="Portrait of testimonial author"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-xl uppercase leading-tight text-on-surface">
                      {t.name}
                    </h4>
                    <p className="font-label-mono-sm text-label-mono-sm uppercase text-primary">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="space-y-4 rounded-2xl bg-surface p-6 shadow-sm sm:p-8">
              <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary">
                [ Engagement summary ]
              </div>
              <div className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex justify-between gap-4 pb-2">
                  <span>Scope:</span>
                  <span className="text-right font-bold text-on-surface">
                    Design System Re-architecture
                  </span>
                </div>
                <div className="flex justify-between gap-4 pb-2">
                  <span>Duration:</span>
                  <span className="font-bold text-on-surface">14 Weeks Sprint</span>
                </div>
                <div className="flex justify-between gap-4 pb-2">
                  <span>Impact:</span>
                  <span className="font-bold text-primary">+210% Velocity</span>
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
