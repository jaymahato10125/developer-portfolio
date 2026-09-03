import Reveal from "./Reveal";

/** Bespoke footer with watermark + outer quarterly-status footer (matches Stitch). */
export default function Footer() {
  return (
    <>
      <footer className="mx-auto w-full max-w-[1440px] space-y-12 pb-6 pt-12">
        <Reveal>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-headline-md text-headline-md uppercase tracking-tight text-on-surface dark:text-dark-ink">
                  Kai Chen
                </span>
                <span className="font-label-mono-sm text-label-mono-sm uppercase text-primary dark:text-accent-bright">
                  / Architect
                </span>
              </div>
              <p className="max-w-sm font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
                Architecting modern, tactile software interfaces, design systems, and digital
                instruments for progressive technology companies.
              </p>
              <div className="pt-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
                San Francisco • Tokyo • Remote worldwide
              </div>
            </div>
            <div className="space-y-3 md:col-span-2">
              <span className="block font-label-mono-md text-label-mono-md uppercase tracking-widest text-primary dark:text-accent-bright">
                Directory
              </span>
              <ul className="space-y-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#hero"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#cases"
                  >
                    Selected Works
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#capabilities"
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#journal"
                  >
                    Journal
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#faq"
                  >
                    About &amp; FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:col-span-2">
              <span className="block font-label-mono-md text-label-mono-md uppercase tracking-widest text-primary dark:text-accent-bright">
                Colophon
              </span>
              <ul className="space-y-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Colophon 2025
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Type: Oswald / Mono
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Design Tokens
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:col-span-3">
              <span className="block font-label-mono-md text-label-mono-md uppercase tracking-widest text-primary dark:text-accent-bright">
                Network
              </span>
              <ul className="space-y-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Twitter / X →
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    ReadCV →
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    GitHub Engine →
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Dribbble Pro →
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-primary dark:hover:text-accent-bright"
                    href="#"
                  >
                    Substack →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="w-full select-none overflow-hidden py-4 text-center" aria-hidden>
          <div className="text-outline-watermark font-display-xl text-[64px] font-bold uppercase leading-none tracking-tight sm:text-[120px] lg:text-[180px]">
            Kai Chen
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-4 font-label-mono-sm text-label-mono-sm text-on-surface-variant dark:text-dark-muted sm:flex-row">
          <span>Designed &amp; engineered with craft by Kai Chen © 2025. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span>Latency: 12ms • Time: SF (PST)</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/** Outer status footer — sits at the bottom of the cream card (matches Stitch). */
export function SiteFooter() {
  return (
    <footer className="t-theme mt-auto w-full bg-surface-container-low dark:border-t dark:border-white/10 dark:bg-dark-1">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-card-gap md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="font-headline-md text-headline-md uppercase tracking-tight text-on-surface dark:text-dark-ink">
              Kai Chen
            </div>
            <p className="max-w-md font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
              Senior Digital Product Designer architecting modernist, tactile interfaces, bespoke
              design systems, and cohesive software experiences.
            </p>
            <div className="flex items-center gap-3 pt-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant dark:text-dark-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              <span>San Francisco • Tokyo • Remote</span>
            </div>
          </div>
          <div className="space-y-3 md:col-span-3">
            <div className="font-label-mono-md text-label-mono-md uppercase tracking-widest text-primary dark:text-accent-bright">
              Directory
            </div>
            <ul className="space-y-2 font-label-mono-sm text-label-mono-sm uppercase">
              {[
                "Index / Overview",
                "Featured Case Studies",
                "Core Capabilities",
                "Thoughts & Essays",
                "Engagement FAQ",
              ].map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-2 text-on-surface-variant dark:text-dark-muted"
                >
                  <span className="text-primary dark:text-accent-bright">•</span>
                  <a
                    className="transition-colors hover:text-on-surface dark:hover:text-dark-ink"
                    href="#"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 md:col-span-4">
            <div className="font-label-mono-md text-label-mono-md uppercase tracking-widest text-primary dark:text-accent-bright">
              Quarterly Status
            </div>
            <div className="space-y-2 rounded-lg border border-on-surface/10 bg-surface-container p-4 dark:border-white/10 dark:bg-dark-2">
              <div className="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-on-secondary-container dark:text-dark-muted">
                <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
                <span className="font-bold">Currently booking</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-dark-muted">
                Accepting select digital advisory roles and end-to-end product sprints starting
                Q2/Q3.
              </p>
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-1 font-label-mono-sm text-label-mono-sm font-bold uppercase text-primary transition-colors hover:text-on-surface dark:text-accent-bright dark:hover:text-dark-ink"
                  href="#contact"
                >
                  Schedule Discovery Call →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 font-label-mono-sm text-label-mono-sm text-on-surface-variant dark:text-dark-muted sm:flex-row">
          <div className="flex items-center gap-4">
            <span>© 2025 Kai Chen. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Typeset in Oswald &amp; Space Mono</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="transition-colors hover:text-on-surface dark:hover:text-dark-ink"
              href="#"
            >
              Read.cv
            </a>
            <a
              className="transition-colors hover:text-on-surface dark:hover:text-dark-ink"
              href="#"
            >
              GitHub
            </a>
            <a
              className="transition-colors hover:text-on-surface dark:hover:text-dark-ink"
              href="#"
            >
              Are.na
            </a>
            <a
              className="transition-colors hover:text-on-surface dark:hover:text-dark-ink"
              href="#"
            >
              Sundial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
