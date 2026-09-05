import { ArrowDown, ArrowRight, Hexagon } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { company, hero as copy } from "../lib/company";

/** Company hero — outcome headline + proof panel with dual CTAs. */
export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] pt-4 lg:pt-8" id="hero">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-4 lg:col-span-7">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap sm:gap-6">
            <h1 className="font-display-xl text-display-xl-mobile uppercase tracking-tight text-on-surface dark:text-dark-ink sm:text-display-xl">
              {copy.titleA}{" "}
              <span className="text-primary dark:text-accent-bright">{copy.titleB}</span>
            </h1>
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-carbon text-cream shadow-md dark:border dark:border-white/10 sm:h-28 sm:w-28"
              aria-hidden
            >
              <Hexagon className="h-10 w-10 sm:h-14 sm:w-14" strokeWidth={1.8} />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {copy.pills.map((p, i) => (
              <span
                key={p}
                className={
                  i === 1
                    ? "rounded bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant"
                    : i === 2
                      ? "rounded bg-tertiary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-tertiary-fixed"
                      : "rounded bg-surface-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-muted"
                }
              >
                {p}
              </span>
            ))}
          </div>
          <p className="pt-2 font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-muted">
            {copy.serviceStrip}
          </p>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="t-theme flex flex-col justify-between gap-6 rounded-2xl border border-on-surface/10 bg-surface-container-low p-6 shadow-sm dark:border-white/10 dark:bg-dark-1 sm:p-8">
            <div className="space-y-4">
              <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
                {copy.panelLabel}
              </div>
              <p className="font-body-xl text-body-xl leading-relaxed text-on-surface dark:text-dark-ink">
                {copy.panelBody}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="t-theme inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-primary transition-all hover:bg-secondary dark:shadow-[0_0_24px_rgba(224,101,58,0.3)] dark:hover:bg-primary"
                href="#contact"
              >
                <span>{copy.primaryCta}</span>
                <ArrowRight size={14} aria-hidden />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-colors hover:bg-surface-container dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:bg-white/10"
                href="#services"
              >
                <span>{copy.secondaryCta}</span>
                <ArrowDown size={14} aria-hidden />
              </a>
            </div>
            <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
              {copy.microTrust}
            </p>
            <p className="sr-only">
              Contact {company.name} at {company.email} or {company.phoneDisplay}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
