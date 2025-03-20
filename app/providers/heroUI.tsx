"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";

export default function HeroUIWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
