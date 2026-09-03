import { Layers, Palette, Smartphone } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const tiles = [
  {
    icon: Palette,
    title: "Branding & Identity",
    body: "Visual language systems, corporate brand books, custom typography, art direction, and editorial asset pipelines for tech leaders.",
    dark: false,
    chips: ["Brand Guides", "Iconography", "Art Direction"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Multi-Platform",
    body: "Native iOS & Android design patterns, spatial tactile physics, fluid gesture navigation, and reactive micro-interactions.",
    dark: true,
    chips: ["SwiftUI Mocks", "Haptics Specs", "Mobile Apps"],
  },
  {
    icon: Layers,
    title: "Product Architecture",
    body: "Complex SaaS software workflows, headless design token architectures, multi-tenant navigation trees, and design system governance.",
    dark: false,
    chips: ["Design Tokens", "Figma Libs", "Workflow Engine"],
  },
];

/** Capabilities — three tactile craft tiles. */
export default function Capabilities() {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="capabilities">
      <Reveal>
        <div className="max-w-2xl space-y-4 pb-8">
          <Eyebrow className="text-primary dark:text-accent-bright">Capabilities</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-on-surface dark:text-dark-ink sm:text-headline-lg">
            Craft &amp; Strategic Competencies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            Core craft competencies refined across a decade of high-growth digital product design,
            architectural prototyping, and execution.
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
