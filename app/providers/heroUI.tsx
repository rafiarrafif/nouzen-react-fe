"use client";

import React, { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export default function HeroUIWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {mounted ? (
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
        </NextThemesProvider>
      ) : (
        <main className="dark text-foreground bg-background">{children}</main>
      )}
    </HeroUIProvider>
  );
}
