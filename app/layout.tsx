import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} ${spaceMono.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-surface-container-low p-frame-padding-mobile font-body font-body-md text-on-surface lg:p-frame-padding-desktop">
        {children}
      </body>
    </html>
  );
}
