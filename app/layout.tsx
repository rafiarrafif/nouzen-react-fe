import "./globals.css";
import HeroUIWrapper from "./providers/heroUI";
import ManropeFontProvider from "./providers/manropeFont";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <ManropeFontProvider>
          <HeroUIWrapper>{children}</HeroUIWrapper>
        </ManropeFontProvider>
      </body>
    </html>
  );
}
