import { ArrowRight, Grid2x2 } from "lucide-react";
import Reveal from "./Reveal";

/** Project detail spotlight block — Kinetic Liquidity Matrix. */
export default function ProjectDetail() {
  return (
    <section className="mx-auto w-full max-w-[1440px]" id="about">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-surface-container-high p-8 shadow-lg sm:p-12 lg:p-16">
          <div className="relative z-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-primary">
                  Fintech platform
                </span>
                <span className="rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface">
                  Design lead
                </span>
                <span className="rounded-full bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
                  2024 deploy
                </span>
              </div>
              <h3 className="font-display-xl text-headline-lg-mobile uppercase leading-tight text-on-surface sm:text-headline-lg">
                Kinetic Liquidity Matrix
              </h3>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary shadow-sm">
                  <Grid2x2 size={22} />
                </div>
                <div>
                  <span className="block font-label-mono-sm text-label-mono-sm font-bold uppercase text-primary">
                    Verified system specification
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Real-time orderbook rendering in &lt;1.8ms
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl bg-surface p-6 shadow-sm lg:col-span-4">
              <div className="font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-widest text-primary">
                [ Art direction note ]
              </div>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface">
                Redefining algorithmic liquidity through visceral clarity and low-latency
                interaction models, creating sensory confidence in high-stake moments.
              </p>
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-on-surface"
                  href="#contact"
                >
                  <span>Request Case Study Deck</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
