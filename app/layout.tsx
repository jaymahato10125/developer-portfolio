import type { Metadata, Viewport } from "next";
import { Oswald, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "../components/ThemeProvider";
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
  title: "Kai Chen — Digital Product Designer Portfolio",
  description:
    "Principal Interface & Systems Architect based in San Francisco. Shaping high-conviction software, editorial interfaces, and design systems.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f3e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
