"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "../lib/cn";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is your typical engagement model and availability?",
    a: "I collaborate as a dedicated principal design partner on 6–12 week sprint engagements or advisory retainers for seed through Series B startups. For enterprise brands, I provide dedicated design system governance and principal architectural oversight.",
  },
  {
    q: "Do you write production code and design systems?",
    a: "Yes. I bridge the gap between design and engineering by authoring production-grade design token pipelines in Style Dictionary, Tailwind presets, and React / SwiftUI component interfaces to ensure zero visual degradation during handoff.",
  },
  {
    q: "How do you approach client collaboration and async time zones?",
    a: "I operate on an asynchronous-first communication cadence via Loom, Linear, and Notion, supplemented by two weekly live strategic syncs. This accommodates stakeholders across San Francisco (PST), New York (EST), and Tokyo (JST) seamlessly.",
  },
  {
    q: "Can you assist with developer handoff and QA testing?",
    a: "Quality assurance is a primary pillar of every sprint. I embed directly in engineering GitHub PR reviews and participate in visual QA cycles right up until staging and production release.",
  },
];

/** FAQ accordion — single-open behavior matching Stitch. */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="faq">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Reveal className="space-y-4 lg:col-span-4">
          <Eyebrow className="text-primary dark:text-accent-bright">Frequently asked</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            Engagement &amp; Process FAQ
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            Clear parameters on availability, delivery cadence, design systems, and developer
            collaboration.
          </p>
          <div className="pt-4">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-all hover:bg-surface-container dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:bg-white/10"
              href="#contact"
            >
              <span>Ask Custom Question</span>
              <MessageCircle size={14} />
            </a>
          </div>
        </Reveal>
        <div className="space-y-4 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="t-theme rounded-2xl border border-on-surface/10 bg-surface-container-low p-6 shadow-sm transition-all dark:border-white/10 dark:bg-dark-1">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-headline-md text-body-xl uppercase text-on-surface dark:text-dark-ink">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform dark:bg-dark-2 dark:text-accent-bright",
                        isOpen && "rotate-180"
                      )}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 font-body-md text-body-md leading-relaxed text-on-surface-variant dark:text-dark-muted">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
