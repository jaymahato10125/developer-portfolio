import { Database, Monitor, Server } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { capabilities as copy } from "../lib/content";

const icons = [Monitor, Server, Database];
const tiles = copy.tiles.map((t, i) => ({ ...t, icon: icons[i]! }));

/** Capabilities — stack and engineering tiles. */
export default function Capabilities() {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="capabilities">
      <Reveal>
        <div className="max-w-2xl space-y-4 pb-8">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            {copy.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            {copy.body}
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08}>
            <div
              className={
                t.dark
                  ? "group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-secondary p-8 text-on-secondary shadow-sm transition-all hover:bg-secondary/95"
                  : "t-theme group flex h-full flex-col justify-between rounded-3xl border border-on-surface/10 bg-surface-container-low p-8 shadow-sm transition-all hover:bg-surface-container dark:border-white/10 dark:bg-dark-1 dark:hover:bg-dark-2"
              }
            >
              <div className="space-y-6">
                <div
                  className={
                    t.dark
                      ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-fixed-variant shadow-sm transition-transform group-hover:scale-105"
                      : "flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-primary shadow-sm transition-transform group-hover:scale-105 dark:bg-dark-2 dark:text-accent-bright"
                  }
                >
                  <t.icon size={26} />
                </div>
                <div className="space-y-2">
                  <h3
                    className={
                      t.dark
                        ? "font-headline-md text-headline-md uppercase text-on-secondary"
                        : "font-headline-md text-headline-md uppercase text-on-surface dark:text-dark-ink"
                    }
                  >
                    {t.title}
                  </h3>
                  <p
                    className={
                      t.dark
                        ? "font-body-md text-body-md text-secondary-fixed-dim dark:text-[#d9e9dc]"
                        : "font-body-md text-body-md text-on-surface-variant dark:text-dark-muted"
                    }
                  >
                    {t.body}
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-8">
                <span
                  className={
                    t.dark
                      ? "block font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-secondary-fixed"
                      : "block font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-primary dark:text-accent-bright"
                  }
                >
                  Deliverables:
                </span>
                <div
                  className={
                    t.dark
                      ? "flex flex-wrap gap-2 font-label-mono-sm text-label-mono-sm text-on-secondary"
                      : "flex flex-wrap gap-2 font-label-mono-sm text-label-mono-sm text-on-surface-variant dark:text-dark-muted"
                  }
                >
                  {t.chips.map((c) => (
                    <span
                      key={c}
                      className={
                        t.dark
                          ? "rounded bg-surface-container-lowest/10 px-2.5 py-1 dark:bg-white/10"
                          : "rounded bg-surface px-2.5 py-1 dark:border dark:border-white/10 dark:bg-dark-2"
                      }
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
