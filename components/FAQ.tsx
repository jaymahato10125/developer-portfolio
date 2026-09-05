"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "../lib/cn";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { faq as copy } from "../lib/company";

/** FAQ accordion — single-open behavior, buyer questions. */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="faq">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Reveal className="space-y-4 lg:col-span-4">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            {copy.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            {copy.body}
          </p>
          <div className="pt-4">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-all hover:bg-surface-container dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:bg-white/10"
              href="#contact"
            >
              <span>{copy.cta}</span>
              <MessageCircle size={14} aria-hidden />
            </a>
          </div>
        </Reveal>
        <div className="space-y-4 lg:col-span-8">
          {copy.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="t-theme rounded-2xl border border-on-surface/10 bg-surface-container-low p-6 shadow-sm transition-all dark:border-white/10 dark:bg-dark-1">
                  <button
                    type="button"
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
                      <ChevronDown size={18} aria-hidden />
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
