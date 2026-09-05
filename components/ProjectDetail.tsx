import { ArrowRight, Grid2x2 } from "lucide-react";
import Reveal from "./Reveal";
import { spotlight as copy } from "../lib/company";

/** Flagship engagement spotlight — website + automation. */
export default function ProjectDetail() {
  return (
    <section aria-label="Flagship engagement" className="mx-auto w-full max-w-[1440px]">
      <Reveal>
        <div className="t-theme relative overflow-hidden rounded-3xl border border-on-surface/10 bg-surface-container-high p-8 shadow-lg dark:border-white/10 dark:bg-dark-1 sm:p-12 lg:p-16">
          <div className="relative z-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-primary dark:shadow-[0_0_20px_rgba(224,101,58,0.35)]">
                  {copy.chips[0]}
                </span>
                <span className="rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink">
                  {copy.chips[1]}
                </span>
                <span className="rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
                  {copy.chips[2]}
                </span>
              </div>
              <h3 className="font-display-xl text-headline-lg-mobile uppercase leading-tight text-on-surface dark:text-dark-ink sm:text-headline-lg">
                {copy.title}
              </h3>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary shadow-sm dark:bg-dark-2 dark:text-accent-bright">
                  <Grid2x2 size={22} aria-hidden />
                </div>
                <div>
                  <span className="block font-label-mono-sm text-label-mono-sm font-bold uppercase text-primary dark:text-accent-bright">
                    {copy.specLabel}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-dark-muted">
                    {copy.specValue}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-on-surface/10 bg-surface p-6 shadow-sm dark:border-white/10 dark:bg-dark-2 lg:col-span-4">
              <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
                {copy.noteLabel}
              </div>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface dark:text-dark-ink">
                {copy.noteBody}
              </p>
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-on-surface dark:text-accent-bright dark:hover:text-dark-ink"
                  href="#contact"
                >
                  <span>{copy.cta}</span>
                  <ArrowRight size={14} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
