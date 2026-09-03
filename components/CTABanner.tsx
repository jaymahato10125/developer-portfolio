import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { assets } from "../lib/tokens";
import { cta as copy, profile } from "../lib/content";

/** Closing CTA banner — forest panel with foliage bleed. */
export default function CTABanner() {
  return (
    <section className="mx-auto w-full max-w-[1440px]" id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-on-surface/10 bg-secondary p-8 text-on-secondary shadow-xl dark:border-white/10 sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 overflow-hidden rounded-full opacity-30 blur-xl">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${assets.ctaFoliage}')` }}
              role="img"
              aria-label="Warm autumnal foliage glow"
            />
          </div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed">
              <Eyebrow glyph="◆" className="text-on-secondary-fixed">
                {copy.badge}
              </Eyebrow>
            </div>
            <h2 className="font-display-xl text-headline-lg-mobile uppercase leading-none tracking-tight sm:text-display-xl">
              {copy.heading}
            </h2>
            <p className="max-w-xl font-body-xl text-body-xl text-secondary-fixed-dim dark:text-[#d9e9dc]">
              {copy.body}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                className="t-theme inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-label-mono-md text-label-mono-md uppercase tracking-wider text-on-primary shadow-md transition-all hover:bg-on-surface dark:shadow-[0_0_36px_rgba(224,101,58,0.45)] dark:hover:bg-primary dark:hover:shadow-[0_0_48px_rgba(224,101,58,0.6)]"
                href={`mailto:${profile.email}`}
              >
                <span>{copy.primary}</span>
                <ArrowRight size={14} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/10 px-8 py-4 font-label-mono-md text-label-mono-md uppercase text-on-secondary transition-colors hover:bg-surface-container-lowest/20"
                href={`mailto:${profile.email}`}
              >
                <span>{copy.secondary}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
