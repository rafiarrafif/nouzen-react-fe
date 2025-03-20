import React from "react";

export default function IndexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Hello from Index Layout</h1>
      {children}
    </div>
  );
}
