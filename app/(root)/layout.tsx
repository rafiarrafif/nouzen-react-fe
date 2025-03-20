import React from "react";
import Navbar from "./components/navbar/main";

export default function IndexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <h1>Hello from Index Layout</h1>
      {children}
    </div>
  );
}
