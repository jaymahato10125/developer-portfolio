import { ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { caseStudies as copy } from "../lib/content";

/** Shipped-work index — stacked interactive rows. */
export default function CaseStudies() {
  return (
    <section
      className="t-theme mx-auto w-full max-w-[1440px] rounded-3xl bg-inverse-surface p-8 text-inverse-on-surface shadow-xl dark:border dark:border-white/10 dark:bg-dark-1 dark:text-dark-ink sm:p-12 lg:p-16"
      id="cases"
    >
      <Reveal>
        <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-3">
            <Eyebrow className="text-primary-fixed-dim">{copy.eyebrow}</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-inverse-on-surface dark:text-dark-ink sm:text-headline-lg">
              {copy.heading}
            </h2>
            <p className="font-body-md text-body-md text-surface-dim">{copy.body}</p>
          </div>
          <div className="font-label-mono-sm text-label-mono-sm uppercase text-surface-dim">
            {copy.indexLabel}
          </div>
        </div>
      </Reveal>
      <div className="space-y-4">
        {copy.cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="group flex cursor-pointer flex-col justify-between gap-6 rounded-2xl border border-transparent bg-surface-container-lowest/5 p-6 transition-all hover:bg-surface-container-lowest/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:p-8 md:flex-row md:items-center">
              <div className="space-y-2">
                <span className="block font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
                  {c.index}
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface transition-colors group-hover:text-primary-fixed-dim dark:text-dark-ink dark:group-hover:text-accent-bright">
                  {c.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-label-mono-sm text-label-mono-sm text-surface-dim dark:text-dark-muted">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-surface-container-lowest/10 px-2.5 py-0.5 uppercase dark:bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden font-label-mono-sm text-label-mono-sm uppercase text-secondary-fixed-dim dark:text-dark-faint sm:inline">
                  {c.status}
                </span>
                <div
                  className={
                    c.active
                      ? "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-transform group-hover:translate-x-2 dark:shadow-[0_0_24px_rgba(224,101,58,0.4)]"
                      : "flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest/20 text-inverse-on-surface transition-all group-hover:translate-x-2 group-hover:bg-primary group-hover:text-on-primary dark:bg-white/10 dark:text-dark-ink dark:group-hover:bg-primary dark:group-hover:text-on-primary"
                  }
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
