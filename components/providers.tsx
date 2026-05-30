"use client";

import { ThemeProvider } from "next-themes";

/** next-themes present but locked to light (per brief). */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
