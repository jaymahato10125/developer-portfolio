import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { assets } from "../lib/tokens";
import { journal as copy } from "../lib/content";

/** Journal — engineering notes (draft placeholders). */
export default function Journal() {
  return (
    <section
      className="t-theme mx-auto w-full max-w-[1440px] rounded-3xl bg-inverse-surface p-8 text-inverse-on-surface shadow-xl dark:border dark:border-white/10 dark:bg-dark-1 dark:text-dark-ink sm:p-12 lg:p-16"
      id="journal"
    >
      <Reveal>
        <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl space-y-3">
            <Eyebrow className="text-primary-fixed-dim">{copy.eyebrow}</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg-mobile uppercase text-inverse-on-surface dark:text-dark-ink sm:text-headline-lg">
              {copy.heading}
            </h2>
            <p className="font-body-md text-body-md text-surface-dim dark:text-dark-muted">
              {copy.body}
            </p>
          </div>
          <div className="font-label-mono-sm text-label-mono-sm uppercase text-surface-dim">
            {copy.meta}
          </div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <article className="group h-full cursor-pointer space-y-6 rounded-2xl border border-transparent bg-surface-container-lowest/5 p-6 transition-all hover:bg-surface-container-lowest/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-container-highest/10 dark:bg-white/5">
              <div
                className="h-full w-full bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105 dark:brightness-[.9] dark:saturate-[.92]"
                style={{ backgroundImage: `url('${assets.journalWoodland}')` }}
                role="img"
                aria-label="Golden hour autumnal woodland path"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-surface shadow-md dark:bg-dark-ink dark:text-dark-base">
                {copy.posts[0].badge}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-label-mono-sm text-label-mono-sm text-primary-fixed-dim">
                <span>{copy.posts[0].meta}</span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface transition-colors group-hover:text-primary-fixed-dim dark:text-dark-ink dark:group-hover:text-accent-bright">
                {copy.posts[0].title}
              </h3>
              <p className="font-body-md text-body-md text-surface-dim dark:text-dark-muted">
                {copy.posts[0].body}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-primary-fixed-dim dark:text-accent-bright dark:hover:text-dark-ink">
              <span>Read Note</span>
              <ArrowRight size={14} />
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="group h-full cursor-pointer space-y-6 rounded-2xl border border-transparent bg-surface-container-lowest/5 p-6 transition-all hover:bg-surface-container-lowest/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-container-highest/10 dark:bg-white/5">
              <Image
                alt="Developer desk setup with minimal lighting"
                src={assets.portrait}
                fill
                className="object-cover opacity-80 grayscale transition-transform duration-700 group-hover:scale-105 dark:brightness-[.88] dark:saturate-[.9]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-on-surface shadow-md dark:bg-dark-ink dark:text-dark-base">
                {copy.posts[1].badge}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-label-mono-sm text-label-mono-sm text-primary-fixed-dim">
                <span>{copy.posts[1].meta}</span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface transition-colors group-hover:text-primary-fixed-dim dark:text-dark-ink dark:group-hover:text-accent-bright">
                {copy.posts[1].title}
              </h3>
              <p className="font-body-md text-body-md text-surface-dim dark:text-dark-muted">
                {copy.posts[1].body}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 font-label-mono-md text-label-mono-md font-bold uppercase text-primary transition-colors hover:text-primary-fixed-dim dark:text-accent-bright dark:hover:text-dark-ink">
              <span>Read Note</span>
              <ArrowRight size={14} />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
