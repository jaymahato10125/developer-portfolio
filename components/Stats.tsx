import { BadgeCheck, Gauge } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { stats as copy } from "../lib/company";

const cards = [
  {
    dot: "bg-primary",
    valueClass: "text-on-surface dark:text-dark-ink",
    badge: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-surface dark:bg-dark-2 dark:text-dark-ink">
        <BadgeCheck size={14} className="text-secondary" aria-hidden />
        <span>{copy.cards[0].badge}</span>
      </span>
    ),
  },
  {
    dot: "bg-secondary",
    valueClass: "text-primary dark:text-accent-bright",
    badge: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-primary-fixed">
        <span>{copy.cards[1].badge}</span>
      </span>
    ),
  },
  {
    dot: "bg-secondary",
    valueClass: "text-on-surface dark:text-dark-ink",
    badge: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-secondary-fixed-variant">
        <Gauge size={14} className="text-secondary" aria-hidden />
        <span>{copy.cards[2].badge}</span>
      </span>
    ),
  },
];

/** Outcomes strip — business-level results, not personal tenure. */
export default function Stats() {
  return (
    <section aria-label="Outcomes" className="mx-auto w-full max-w-[1440px] py-6" id="outcomes">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <Reveal className="space-y-4 lg:col-span-4">
          <Eyebrow className="text-primary dark:text-accent-bright">{copy.eyebrow}</Eyebrow>
          <h2 className="font-headline-md text-headline-md uppercase text-on-surface dark:text-dark-ink">
            {copy.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            {copy.body}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-8">
          {copy.cards.map((s, i) => (
            <Reveal key={s.kicker} delay={i * 0.1}>
              <div className="t-theme flex h-full flex-col justify-between rounded-2xl border border-on-surface/10 bg-surface-container-low p-6 shadow-sm transition-transform hover:translate-y-[-2px] dark:border-white/10 dark:bg-dark-1">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider text-primary dark:text-accent-bright">
                    {s.kicker}
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full ${cards[i]!.dot}`} aria-hidden />
                </div>
                <div className="my-4">
                  <div
                    className={`font-display-xl text-headline-lg leading-none ${cards[i]!.valueClass}`}
                  >
                    {s.value}
                  </div>
                  <p className="pt-2 font-body-sm text-body-sm text-on-surface-variant dark:text-dark-muted">
                    {s.body}
                  </p>
                </div>
                {cards[i]!.badge}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
