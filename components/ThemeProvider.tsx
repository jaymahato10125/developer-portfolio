"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Class-based theme provider. Resolves `system` (prefers-color-scheme) on
 * first visit, then persists an explicit choice to localStorage (`theme`).
 * next-themes injects its blocking no-flash script automatically, so the
 * correct `dark` class is present before hydration.
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
