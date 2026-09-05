import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "../components/ThemeProvider";
import { company, seo } from "../lib/company";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: seo.title,
    template: "%s | Obsidian Tech Solution",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: company.name, url: company.url }],
  creator: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: company.url,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-cover.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f3e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  slogan: company.tagline,
  email: company.email,
  areaServed: "IN",
  sameAs: [company.url],
  makesOffer: [
    "Website Design & Development",
    "Web Application Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "Business Automation",
    "Website & Application Maintenance",
    "Technology Consulting",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets the `dark` class pre-hydration.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${jakarta.variable} ${spaceMono.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-surface-container-low p-frame-padding-mobile font-body font-body-md text-on-surface dark:bg-dark-frame dark:text-dark-ink lg:p-frame-padding-desktop">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
