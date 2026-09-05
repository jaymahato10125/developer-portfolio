import Navbar, { SecondaryBar } from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Stats from "../components/Stats";
import CaseStudies from "../components/CaseStudies";
import ProjectDetail from "../components/ProjectDetail";
import Process from "../components/Process";
import Capabilities from "../components/Capabilities";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import ContactSection from "../components/ContactSection";
import StickyCTA from "../components/StickyCTA";
import Footer, { SiteFooter } from "../components/Footer";

/**
 * Company single-page scaffold:
 * fixed nav → dot-grid wrapper → secondary bar → hero → trust → services →
 * outcomes → work → spotlight → process → technologies → testimonials →
 * FAQ → CTA → contact → bespoke footer → outer status footer.
 */
export default function Page() {
  return (
    <div className="t-theme relative flex min-h-[calc(100vh-2*theme(spacing.frame-padding-desktop))] flex-col overflow-hidden rounded-xl bg-surface text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:bg-dark-base dark:text-dark-ink">
      <Navbar />
      <main className="w-full flex-1 pt-20">
        <div className="flex w-full flex-col">
          <div className="bg-dot-grid relative w-full space-y-16 px-4 py-8 sm:px-8 lg:space-y-24 lg:px-12">
            <SecondaryBar />
            <Hero />
            <TrustBar />
            <Services />
            <Stats />
            <CaseStudies />
            <ProjectDetail />
            <Process />
            <Capabilities />
            <Testimonials />
            <FAQ />
            <CTABanner />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
