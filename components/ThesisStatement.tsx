import { ArrowDown, ArrowRight } from "lucide-react";
import { content } from "../lib/tokens";

/** Right-hand thesis panel of the hero — eyebrow, paragraph, CTAs, email pill. */
export default function ThesisStatement() {
  return (
    <div className="t-theme flex flex-col justify-between gap-6 rounded-2xl border border-on-surface/10 bg-surface-container-low p-6 shadow-sm dark:border-white/10 dark:bg-dark-1 sm:p-8">
      <div className="space-y-4">
        <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
          [ Thesis 01 / Form &amp; Function ]
        </div>
        <p className="font-body-xl text-body-xl leading-relaxed text-on-surface dark:text-dark-ink">
          A Visionary Digital Product Designer Based in San Francisco. Shaping high-conviction
          software, editorial interfaces, and design systems for forward-thinking technology
          companies.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          className="t-theme flex items-center gap-2 rounded-full bg-on-surface px-4 py-2.5 font-label-mono-md text-label-mono-md uppercase text-surface transition-colors hover:bg-primary dark:bg-dark-ink dark:text-dark-base dark:shadow-[0_0_24px_rgba(224,101,58,0.3)] dark:hover:bg-accent-bright dark:hover:text-dark-base"
          href="#cases"
        >
          <span>View Selected Works</span>
          <ArrowDown size={14} />
        </a>
        <a
          className="rounded-full bg-surface px-4 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-colors hover:bg-surface-container dark:border dark:border-white/10 dark:bg-dark-2 dark:text-dark-ink dark:hover:bg-white/10"
          href="#about"
        >
          Download CV
        </a>
        <a
          className="rounded-full bg-surface px-4 py-2.5 font-label-mono-md text-label-mono-md lowercase text-primary shadow-sm transition-colors hover:bg-surface-container dark:border dark:border-white/10 dark:bg-dark-2 dark:text-accent-bright dark:hover:bg-white/10"
          href={`mailto:${content.email}`}
        >
          {content.email}
        </a>
      </div>
    </div>
  );
}

export function ThesisArrow() {
  return <ArrowRight size={14} />;
}
