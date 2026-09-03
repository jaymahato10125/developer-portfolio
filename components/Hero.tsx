import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import ThesisStatement from "./ThesisStatement";
import { assets } from "../lib/tokens";

/** Hero — giant condensed headline with inline photo tile + thesis panel. */
export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] pt-4 lg:pt-8" id="hero">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-4 lg:col-span-7">
          <Eyebrow className="text-primary">Principal Interface &amp; Systems Architect</Eyebrow>
          <div className="flex flex-wrap items-baseline gap-4 sm:flex-nowrap sm:gap-6">
            <h1 className="font-display-xl text-display-xl-mobile uppercase tracking-tight text-on-surface sm:text-display-xl">
              I&rsquo;m Kai Chen
            </h1>
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-surface-container-highest shadow-md sm:h-28 sm:w-28">
              <Image
                alt="Kai Chen portrait in design studio"
                src={assets.portrait}
                width={224}
                height={224}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="rounded bg-surface-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
              Loc: San Francisco, CA
            </span>
            <span className="rounded bg-secondary-container px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-secondary-fixed-variant">
              10+ yrs exp
            </span>
            <span className="rounded bg-tertiary-fixed px-3 py-1 font-label-mono-sm text-label-mono-sm uppercase text-on-tertiary-fixed">
              Dir. level
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-5">
          <ThesisStatement />
        </Reveal>
      </div>
    </section>
  );
}
