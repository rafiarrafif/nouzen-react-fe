import "./globals.css";
import HeroUIWrapper from "./providers/heroUI";
import ManropeFontProvider from "./providers/manropeFont";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <SessionProvider>
          <NextTopLoader easing="ease" showSpinner={false} color="#E50914" />
          <ManropeFontProvider>
            <HeroUIWrapper>{children}</HeroUIWrapper>
          </ManropeFontProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
