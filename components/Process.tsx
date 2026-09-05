import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { process as copy } from "../lib/company";

/** Process — 5-step delivery path from discovery to maintenance. */
export default function Process() {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="process">
      <Reveal>
        <div className="flex max-w-2xl flex-col gap-4 pb-8">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            {copy.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            {copy.body}
          </p>
        </div>
      </Reveal>
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {copy.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07}>
            <li className="t-theme flex h-full flex-col justify-between rounded-3xl border border-on-surface/10 bg-surface-container-low p-7 shadow-sm dark:border-white/10 dark:bg-dark-1">
              <div className="space-y-4">
                <span className="font-display-xl text-headline-lg leading-none text-primary dark:text-accent-bright">
                  {s.n}
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface dark:text-dark-ink">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
                  {s.body}
                </p>
              </div>
              <span className="mt-6 inline-flex w-fit rounded-full bg-surface-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:bg-dark-2 dark:text-dark-muted">
                {s.chip}
              </span>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <a
            href="#contact"
            className="t-theme inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-label-mono-md text-label-mono-md uppercase tracking-wider text-on-primary shadow-md transition-all hover:bg-secondary dark:shadow-[0_0_24px_rgba(224,101,58,0.35)] dark:hover:bg-primary"
          >
            <span>{copy.cta}</span>
            <ArrowRight size={14} aria-hidden />
          </a>
          <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
            Free first call · Quote in 48h
          </span>
        </div>
      </Reveal>
    </section>
  );
}
