import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

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
        <div className="relative overflow-hidden rounded-3xl bg-surface-container-high p-6 shadow-lg sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
            <div className="flex items-center gap-4">
              <span className="font-display-xl text-headline-lg text-primary">01</span>
              <div>
                <span className="block font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant">
                  Featured case archive
                </span>
                <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Spatial Compute &amp; Workflow Optimization
                </h2>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 font-label-mono-md text-label-mono-md uppercase text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary"
              href="#cases"
            >
              <span>Explore the Work</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-secondary p-6 text-on-secondary shadow-xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm text-on-secondary-fixed">
                  <span>■</span>
                  <span>Enterprise spatial platform</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile uppercase leading-none tracking-tight sm:text-headline-lg">
                  Apex OS — Next-Gen Enterprise Spatial Intelligence
                </h3>
                <p className="font-body-md text-body-md text-secondary-fixed-dim">
                  Architected a tactile, high-density data canvas designed for deep network
                  orchestration and live topological telemetry.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl bg-on-secondary-fixed-variant/40 p-4 backdrop-blur-md">
                    <div className="font-headline-md text-headline-md text-secondary-fixed">
                      ▲ +142%
                    </div>
                    <div className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-secondary-fixed-dim">
                      User Retention
                    </div>
                  </div>
                  <div className="rounded-xl bg-on-secondary-fixed-variant/40 p-4 backdrop-blur-md">
                    <div className="font-headline-md text-headline-md text-on-primary">4.8M</div>
                    <div className="font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-secondary-fixed-dim">
                      Active Nodes
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-6">
                <div className="space-y-4 rounded-xl bg-inverse-surface p-5 shadow-2xl">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                      <span className="h-3 w-3 rounded-full bg-secondary" />
                      <span className="h-3 w-3 rounded-full bg-surface-dim" />
                    </div>
                    <span className="font-label-mono-sm text-label-mono-sm uppercase text-surface-dim">
                      OS_KERNEL // V4.20.9
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between font-label-mono-sm text-label-mono-sm text-secondary-fixed-dim">
                      <span>Topology synchronization</span>
                      <span>99.98% optimal</span>
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
                      Latency spread: 14ms
                    </span>
                    <span className="font-label-mono-sm text-label-mono-sm font-bold uppercase text-primary">
                      Ready to deploy
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
