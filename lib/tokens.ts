/**
 * Central design tokens — Terracotta Editorial theme
 * (Oswald + Geist/Plus Jakarta Sans + Space Mono), originally scaffolded
 * from the Stitch export and extended with a deliberate dark palette.
 *
 * Edit palette here; components reference Tailwind color names (e.g. bg-surface, text-primary)
 * so tweaks propagate everywhere. Do not hardcode hex values in components.
 * Site copy lives in `lib/company.ts`, not here.
 */

export const colors = {
  // Canvas / cream paper
  surface: "#fef9ee",
  "surface-bright": "#fef9ee",
  "surface-dim": "#dedacf",
  "surface-lowest": "#ffffff",
  "surface-container-lowest": "#ffffff",
  "surface-container-low": "#f8f3e8",
  "surface-container": "#f2ede2",
  "surface-container-high": "#ede8dd",
  "surface-container-highest": "#e7e2d7",
  "surface-variant": "#e7e2d7",
  background: "#fef9ee",

  // Ink
  "on-surface": "#1d1c15",
  "on-background": "#1d1c15",
  "on-surface-variant": "#59413c",
  "inverse-surface": "#323029", // near-black carbon block (#0D0D0D family in comps)
  "inverse-on-surface": "#f5f0e5",
  carbon: "#0d0d0d",
  carbon2: "#141414",

  // Hairlines
  outline: "#8d716a",
  "outline-variant": "#e1bfb8",
  "surface-tint": "#ae3117",

  // Terracotta / ember accent (outer shell #E85A3C)
  primary: "#ab2e14",
  "on-primary": "#ffffff",
  "primary-container": "#cd472b",
  "on-primary-container": "#fffbff",
  "inverse-primary": "#ffb4a4",
  "primary-fixed": "#ffdad3",
  "primary-fixed-dim": "#ffb4a4",
  "on-primary-fixed": "#3e0500",
  "on-primary-fixed-variant": "#8c1800",
  ember: "#e85a3c",
  emberDeep: "#d84d30",

  // Forest green (deep botanical #16261C / #1D3325)
  secondary: "#516256",
  "on-secondary": "#ffffff",
  "secondary-container": "#d1e5d5",
  "on-secondary-container": "#55675a",
  "secondary-fixed": "#d4e7d8",
  "secondary-fixed-dim": "#b8cbbc",
  "on-secondary-fixed": "#0f1f15",
  "on-secondary-fixed-variant": "#3a4b3f",
  forest: "#16261c",
  forest2: "#1d3325",

  // Warm tertiary
  tertiary: "#ab2d13",
  "on-tertiary": "#ffffff",
  "tertiary-container": "#ce4629",
  "on-tertiary-container": "#fffbff",
  "tertiary-fixed": "#ffdad3",
  "tertiary-fixed-dim": "#ffb4a4",
  "on-tertiary-fixed": "#3e0500",
  "on-tertiary-fixed-variant": "#8c1700",

  // Warm architectural cream alternates
  cream: "#f3eee3",
  creamBright: "#faf7f0",

  // Status / error (kept for completeness)
  error: "#ba1a1a",
  "on-error": "#ffffff",
  "error-container": "#ffdad6",
  "on-error-container": "#93000a",

  // Dot-grid ink
  dot: "#d5cebe",

  // Deliberate dark theme — elevated near-black layering, not inverted cream.
  // Base #0B0B0A, cards step up through #131311 → #1B1A17 so depth comes from
  // layering. Accent stays terracotta; accent-bright (#e0653a) is the raised
  // variant for text/icons on dark (5.0–5.7:1, WCAG AA).
  "dark-frame": "#060605",
  "dark-base": "#0b0b0a",
  "dark-1": "#131311",
  "dark-2": "#1b1a17",
  "dark-ink": "#f2f0ea",
  "dark-muted": "#b9ac9c",
  "dark-faint": "#8a7f70",
  "accent-bright": "#e0653a",

  // Obsidian brand anchor — semantic alias of the near-black base.
  obsidian: "#0b0b0a",
} as const;

export const spacing = {
  "frame-padding-desktop": "1.5rem",
  "frame-padding-mobile": "0.75rem",
  "section-gap": "6rem",
  "card-gap": "2rem",
  "grid-dot-size": "1.5px",
  "grid-dot-gap": "24px",
} as const;

/** Type scale from Stitch DESIGN.md — Oswald display / Jakarta body / Space Mono labels */
export const typeScale = {
  displayXl: {
    fontFamily: "Oswald",
    fontSize: "96px",
    lineHeight: "96px",
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  displayXlMobile: {
    fontFamily: "Oswald",
    fontSize: "56px",
    lineHeight: "58px",
    letterSpacing: "-0.01em",
    fontWeight: "700",
  },
  headlineLg: {
    fontFamily: "Oswald",
    fontSize: "56px",
    lineHeight: "60px",
    letterSpacing: "0.01em",
    fontWeight: "600",
  },
  headlineLgMobile: {
    fontFamily: "Oswald",
    fontSize: "36px",
    lineHeight: "40px",
    letterSpacing: "0.01em",
    fontWeight: "600",
  },
  headlineMd: {
    fontFamily: "Oswald",
    fontSize: "32px",
    lineHeight: "36px",
    letterSpacing: "0.02em",
    fontWeight: "600",
  },
  bodyXl: {
    fontFamily: "Geist Sans, Plus Jakarta Sans",
    fontSize: "20px",
    lineHeight: "34px",
    letterSpacing: "-0.01em",
    fontWeight: "400",
  },
  bodyMd: {
    fontFamily: "Geist Sans, Plus Jakarta Sans",
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "0em",
    fontWeight: "400",
  },
  bodySm: {
    fontFamily: "Geist Sans, Plus Jakarta Sans",
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0em",
    fontWeight: "400",
  },
  labelMonoMd: {
    fontFamily: "Space Mono",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.12em",
    fontWeight: "700",
  },
  labelMonoSm: {
    fontFamily: "Space Mono",
    fontSize: "11px",
    lineHeight: "14px",
    letterSpacing: "0.14em",
    fontWeight: "400",
  },
} as const;

export const radii = {
  sm: "0.25rem",
  DEFAULT: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
} as const;

/** Local brand imagery — no remote hosts. Company site uses CSS/SVG, not photos. */
export const assets = {
  logo: "/logo.svg",
  ogCover: "/og-cover.svg",
} as const;
