import "./globals.css";
import HeroUIWrapper from "./providers/heroUI";
import ManropeFontProvider from "./providers/manropeFont";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <NextTopLoader easing="ease" showSpinner={false} />
        <ManropeFontProvider>
          <HeroUIWrapper>{children}</HeroUIWrapper>
        </ManropeFontProvider>
      </body>
    </html>
  );
}
