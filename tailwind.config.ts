import type { Config } from "tailwindcss";
import { colors, spacing, radii } from "./lib/tokens";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      spacing: {
        "frame-padding-mobile": spacing["frame-padding-mobile"],
        "frame-padding-desktop": spacing["frame-padding-desktop"],
        "section-gap": spacing["section-gap"],
        "card-gap": spacing["card-gap"],
        "grid-dot-gap": spacing["grid-dot-gap"],
        "grid-dot-size": spacing["grid-dot-size"],
      },
      borderRadius: {
        DEFAULT: radii.DEFAULT,
        lg: radii.lg,
        xl: radii.xl,
        full: radii.full,
      },
      fontFamily: {
        display: ["Oswald", "Archivo Narrow", "Anton", "sans-serif"],
        body: ["var(--font-geist-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["Space Mono", "var(--font-geist-mono)", "monospace"],
        // Stitch token aliases (font-display-xl, font-headline-md, ...)
        "display-xl": ["Oswald", "sans-serif"],
        "display-xl-mobile": ["Oswald", "sans-serif"],
        "headline-lg": ["Oswald", "sans-serif"],
        "headline-lg-mobile": ["Oswald", "sans-serif"],
        "headline-md": ["Oswald", "sans-serif"],
        "body-xl": ["var(--font-geist-sans)", "Plus Jakarta Sans", "sans-serif"],
        "body-md": ["var(--font-geist-sans)", "Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["var(--font-geist-sans)", "Plus Jakarta Sans", "sans-serif"],
        "label-mono-md": ["Space Mono", "monospace"],
        "label-mono-sm": ["Space Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["96px", { lineHeight: "96px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl-mobile": [
          "56px",
          { lineHeight: "58px", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "headline-lg": ["56px", { lineHeight: "60px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-lg-mobile": [
          "36px",
          { lineHeight: "40px", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        "headline-md": ["32px", { lineHeight: "36px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-xl": ["20px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", letterSpacing: "0em", fontWeight: "400" }],
        "label-mono-md": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "700" },
        ],
        "label-mono-sm": [
          "11px",
          { lineHeight: "14px", letterSpacing: "0.14em", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
