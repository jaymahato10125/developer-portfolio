import {
  AppWindow,
  ArrowRight,
  Boxes,
  Compass,
  Globe,
  PenTool,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { services as copy } from "../lib/company";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  "app-window": AppWindow,
  smartphone: Smartphone,
  boxes: Boxes,
  "pen-tool": PenTool,
  workflow: Workflow,
  "shield-check": ShieldCheck,
  compass: Compass,
};

/** Services — 8 B2B offerings in a responsive card grid. */
export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-6" id="services">
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {copy.items.map((s, i) => {
          const Icon = icons[s.icon] ?? Globe;
          const featured = "featured" in s && s.featured;
          return (
            <Reveal key={s.slug} delay={(i % 4) * 0.07}>
              <article
                className={
                  featured
                    ? "group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-secondary p-7 text-on-secondary shadow-sm transition-all hover:bg-secondary/95"
                    : "t-theme group flex h-full flex-col justify-between rounded-3xl border border-on-surface/10 bg-surface-container-low p-7 shadow-sm transition-all hover:bg-surface-container dark:border-white/10 dark:bg-dark-1 dark:hover:bg-dark-2"
                }
              >
                <div className="space-y-5">
                  <div
                    className={
                      featured
                        ? "h-13 w-13 flex items-center justify-center rounded-2xl bg-secondary-fixed p-3.5 text-on-secondary-fixed-variant shadow-sm transition-transform group-hover:scale-105"
                        : "flex w-fit items-center justify-center rounded-2xl bg-surface p-3.5 text-primary shadow-sm transition-transform group-hover:scale-105 dark:bg-dark-2 dark:text-accent-bright"
                    }
                  >
                    <Icon size={24} aria-hidden />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={
                        featured
                          ? "font-headline-md text-headline-md uppercase leading-tight text-on-secondary"
                          : "font-headline-md text-headline-md uppercase leading-tight text-on-surface dark:text-dark-ink"
                      }
                    >
                      {s.title}
                    </h3>
                    <p
                      className={
                        featured
                          ? "font-body-md text-body-md text-secondary-fixed-dim dark:text-[#d9e9dc]"
                          : "font-body-md text-body-md text-on-surface-variant dark:text-dark-muted"
                      }
                    >
                      {s.outcome}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="flex flex-wrap gap-2 font-label-mono-sm text-label-mono-sm uppercase">
                    {s.chips.map((c) => (
                      <span
                        key={c}
                        className={
                          featured
                            ? "rounded bg-surface-container-lowest/10 px-2.5 py-1 text-on-secondary dark:bg-white/10"
                            : "rounded bg-surface px-2.5 py-1 text-on-surface-variant dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-muted"
                        }
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    aria-label={`${copy.cta} — ${s.title}`}
                    className={
                      featured
                        ? "inline-flex items-center gap-2 font-label-mono-md text-label-mono-md font-bold uppercase text-secondary-fixed transition-colors hover:text-on-secondary"
                        : "inline-flex items-center gap-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-on-surface dark:text-accent-bright dark:hover:text-dark-ink"
                    }
                  >
                    <span>{copy.cta}</span>
                    <ArrowRight size={14} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
