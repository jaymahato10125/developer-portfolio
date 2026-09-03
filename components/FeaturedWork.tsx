import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { featuredWork } from "../lib/content";

const bars = [
  25, 35, 45, 32, 20, 50, 42, 30, 52, 38, 26, 46, 34, 22, 54, 40, 28, 44, 36, 24, 48, 32, 42, 26,
  50,
];
const accentIdx = new Set([8, 14]);

/** Featured archival project card with deep-forest mock console. */
export default function FeaturedWork() {
  return (
    <section className="mx-auto w-full max-w-[1440px]">
      <Reveal>
        <div className="t-theme relative overflow-hidden rounded-3xl border border-on-surface/10 bg-surface-container-high p-6 shadow-lg dark:border-white/10 dark:bg-dark-1 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
            <div className="flex items-center gap-4">
              <span className="font-display-xl text-headline-lg text-primary dark:text-accent-bright">
                {featuredWork.index}
              </span>
              <div>
                <span className="block font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-muted">
                  {featuredWork.kicker}
                </span>
                <h2 className="font-headline-md text-headline-md uppercase text-on-surface dark:text-dark-ink">
                  {featuredWork.title}
                </h2>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-on-surface/10 bg-surface px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:border-primary dark:hover:bg-primary dark:hover:text-on-primary"
              href="#cases"
            >
              <span>{featuredWork.cta}</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-on-surface/10 bg-secondary p-6 text-on-secondary shadow-xl dark:border-white/10 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-secondary-fixed">
                  <span>■</span>
                  <span>{featuredWork.panel.badge}</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile uppercase leading-none tracking-tight sm:text-headline-lg">
                  {featuredWork.panel.heading}
                </h3>
                <p className="font-body-md text-body-md text-secondary-fixed-dim dark:text-[#d9e9dc]">
                  {featuredWork.panel.body}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {featuredWork.panel.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-on-secondary-fixed-variant/40 p-4 backdrop-blur-md"
                    >
                      <div className="font-headline-md text-headline-md text-secondary-fixed">
                        {m.value}
                      </div>
                      <div className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-secondary-fixed-dim dark:text-[#d9e9dc]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative lg:col-span-6">
                <div className="space-y-4 rounded-xl border border-on-surface/10 bg-inverse-surface p-5 shadow-2xl dark:border-white/10 dark:bg-[#0e0e0d]">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                      <span className="h-3 w-3 rounded-full bg-secondary" />
                      <span className="h-3 w-3 rounded-full bg-surface-dim" />
                    </div>
                    <span className="font-label-mono-sm text-label-mono-sm uppercase text-surface-dim">
                      {featuredWork.panel.console.title}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between font-label-mono-sm text-label-mono-sm text-secondary-fixed-dim">
                      <span>{featuredWork.panel.console.syncLabel}</span>
                      <span>{featuredWork.panel.console.syncValue}</span>
                    </div>
                    <svg
                      className="h-20 w-full text-primary-fixed-dim"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 300 60"
                      aria-hidden
                    >
                      {bars.map((h, i) => (
                        <rect
                          key={i}
                          fill={accentIdx.has(i) ? "#E85A3C" : "currentColor"}
                          height={h}
                          opacity={accentIdx.has(i) ? 1 : 0.3 + ((i * 37) % 60) / 100}
                          width={8}
                          x={i * 12}
                          y={60 - h}
                        />
                      ))}
                    </svg>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-inverse-on-surface/10 p-3 text-secondary-fixed">
                    <span className="font-label-mono-sm text-label-mono-sm uppercase">
                      {featuredWork.panel.console.latencyLabel}
                    </span>
                    <span className="font-label-mono-sm text-label-mono-sm font-bold uppercase text-primary dark:text-accent-bright">
                      {featuredWork.panel.console.latencyStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
