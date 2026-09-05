import Navbar from "../components/Navbar";
import Footer, { SiteFooter } from "../components/Footer";

/** Branded 404 — keeps visitors inside the conversion path. */
export default function NotFound() {
  return (
    <div className="t-theme relative flex min-h-[calc(100vh-2*theme(spacing.frame-padding-desktop))] flex-col overflow-hidden rounded-xl bg-surface text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:bg-dark-base dark:text-dark-ink">
      <Navbar />
      <main className="flex w-full flex-1 items-center justify-center px-6 pt-20">
        <div className="max-w-xl space-y-4 py-24 text-center">
          <p className="font-label-mono-md text-label-mono-md font-bold uppercase tracking-widest text-primary dark:text-accent-bright">
            ◆ 404 — Page not found
          </p>
          <h1 className="font-display-xl text-headline-lg uppercase">
            Lost? Let&apos;s get you back.
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
            The page you&apos;re looking for moved or never existed. Explore our services or start a
            project instead.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="/"
              className="rounded-full bg-primary px-6 py-3 font-label-mono-md text-label-mono-md uppercase text-on-primary"
            >
              Back to Home
            </a>
            <a
              href="/contact"
              className="rounded-full border border-on-surface/10 px-6 py-3 font-label-mono-md text-label-mono-md uppercase dark:border-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <SiteFooter />
    </div>
  );
}
