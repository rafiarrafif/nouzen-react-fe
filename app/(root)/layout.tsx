import React from "react";
import Navbar from "./components/navbar/main";

export default function IndexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
