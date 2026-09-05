import Reveal from "./Reveal";
import { trustBar as copy } from "../lib/company";

/** Trust strip — industries served + core tech, no fake logos. */
export default function TrustBar() {
  return (
    <section
      aria-label="Industries and technologies"
      className="mx-auto w-full max-w-[1440px]"
      id="trust"
    >
      <Reveal>
        <div className="t-theme flex flex-col gap-4 rounded-2xl border border-on-surface/10 bg-surface-container-low px-6 py-5 shadow-sm dark:border-white/10 dark:bg-dark-1 lg:flex-row lg:items-center lg:justify-between">
          <span className="shrink-0 font-label-mono-md text-label-mono-md font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
            ◆ {copy.label}
          </span>
          <ul className="flex flex-wrap items-center gap-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
            {copy.industries.map((ind) => (
              <li
                key={ind}
                className="rounded-full bg-surface px-3 py-1 dark:border dark:border-white/10 dark:bg-dark-2"
              >
                {ind}
              </li>
            ))}
          </ul>
          <ul
            aria-label="Core technologies"
            className="flex flex-wrap items-center gap-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-faint"
          >
            {copy.tech.map((t) => (
              <li key={t} className="rounded px-2 py-1">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
