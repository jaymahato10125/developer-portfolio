import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { assets } from "../lib/tokens";

/** Journal — dark editorial essay cards. */
export default function Journal() {
  return (
    <section
      className="mx-auto w-full max-w-[1440px] rounded-3xl bg-inverse-surface p-8 text-inverse-on-surface shadow-xl sm:p-12 lg:p-16"
      id="journal"
    >
      <Reveal>
        <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-3">
            <Eyebrow className="text-primary-fixed-dim">Journal &amp; Perspectives</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-inverse-on-surface sm:text-headline-lg">
              Essays on Modernist Software
            </h2>
            <p className="font-body-md text-body-md text-surface-dim">
              Thoughts on interface typography, software tactility, and spatial computing in
              high-density software tools.
            </p>
          </div>
          <div className="font-label-mono-sm text-label-mono-sm uppercase text-surface-dim">
            Read on Substack &amp; Read.cv
          </div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <article className="group h-full cursor-pointer space-y-6 rounded-2xl bg-surface-container-lowest/5 p-6 transition-all hover:bg-surface-container-lowest/10">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-container-highest/10">
              <div
                className="h-full w-full bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${assets.journalWoodland}')` }}
                role="img"
                aria-label="Golden hour autumnal woodland path"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-surface shadow-md">
                Theory // 042
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-label-mono-sm text-label-mono-sm text-primary-fixed-dim">
                <span>6 min read</span>
                <span>•</span>
                <span>October 2024</span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface transition-colors group-hover:text-primary-fixed-dim">
                The Return of Tactile Skeuomorphism in Enterprise Tools
              </h3>
              <p className="font-body-md text-body-md text-surface-dim">
                Why frictionless minimalism failed power users, and how tactile physical affordances
                are bringing back cognitive focus and delight in complex developer surfaces.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-primary-fixed-dim">
              <span>Read Essay</span>
              <ArrowRight size={14} />
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="group h-full cursor-pointer space-y-6 rounded-2xl bg-surface-container-lowest/5 p-6 transition-all hover:bg-surface-container-lowest/10">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-container-highest/10">
              <Image
                alt="Kai Chen studio setting with minimal lighting"
                src={assets.portrait}
                fill
                className="object-cover opacity-80 grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-surface shadow-md">
                Craft // 043
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-label-mono-sm text-label-mono-sm text-primary-fixed-dim">
                <span>8 min read</span>
                <span>•</span>
                <span>November 2024</span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface transition-colors group-hover:text-primary-fixed-dim">
                Why Micro-Interactions Define Emotional Product Loyalty
              </h3>
              <p className="font-body-md text-body-md text-surface-dim">
                Breaking down the milliseconds between user intent and dynamic visual feedback. How
                fine-grain haptics and spring physics create unforgettable product conviction.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-primary-fixed-dim">
              <span>Read Essay</span>
              <ArrowRight size={14} />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
