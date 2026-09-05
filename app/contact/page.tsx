import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer, { SiteFooter } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project",
  description:
    "Contact Obsidian Tech Solution for websites, apps, software, and automation. Free consultation, response within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="t-theme relative flex min-h-[calc(100vh-2*theme(spacing.frame-padding-desktop))] flex-col overflow-hidden rounded-xl bg-surface text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:bg-dark-base dark:text-dark-ink">
      <Navbar />
      <main className="w-full flex-1 pt-20">
        <div className="bg-dot-grid relative w-full space-y-16 px-4 py-8 sm:px-8 lg:px-12">
          <ContactSection />
          <Footer />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
