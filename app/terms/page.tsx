import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Reveal from "../../components/Reveal";
import Eyebrow from "../../components/Eyebrow";
import Footer, { SiteFooter } from "../../components/Footer";
import { company } from "../../lib/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${company.name} (${company.domain}) — engagement, pricing, and support terms.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="t-theme relative flex min-h-[calc(100vh-2*theme(spacing.frame-padding-desktop))] flex-col overflow-hidden rounded-xl bg-surface text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:bg-dark-base dark:text-dark-ink">
      <Navbar />
      <main className="w-full flex-1 pt-20">
        <div className="bg-dot-grid relative w-full space-y-16 px-4 py-8 sm:px-8 lg:px-12">
          <Reveal>
            <article className="mx-auto w-full max-w-3xl space-y-6 rounded-3xl border border-on-surface/10 bg-surface-container-low p-8 dark:border-white/10 dark:bg-dark-1 sm:p-12">
              <Eyebrow className="text-primary dark:text-accent-bright">Legal</Eyebrow>
              <h1 className="font-headline-lg text-headline-lg-mobile uppercase sm:text-headline-lg">
                Terms of Service
              </h1>
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant dark:text-dark-muted">
                <p>
                  Every engagement with {company.name} is governed by a written proposal stating
                  scope, timeline, fixed pricing, and payment milestones. Work begins after written
                  approval and the agreed advance.
                </p>
                <p>
                  You own the final deliverables upon full payment. We retain the right to reuse
                  general know-how and to showcase anonymized work unless an NDA says otherwise.
                </p>
                <p>
                  Maintenance plans cover the items listed in the plan. For questions, contact{" "}
                  <a
                    className="text-primary dark:text-accent-bright"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                  .
                </p>
                <p>Last updated: 2026.</p>
              </div>
            </article>
          </Reveal>
          <Footer />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
