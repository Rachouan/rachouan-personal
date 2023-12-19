"use client";

import "./globals.css";
import Footer from "@/structures/footer";
import { Navigation } from "@/structures/navigation";
import useTheme from "@/hooks/use-dark-mode";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme] = useTheme();

  return (
    <html lang="en" className={theme}>
      <head />
      <body
        className={
          "text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-all"
        }
      >
        <Navigation />
        <main className="pt-20 min-h-screen flex flex-col">
          {children}
          <Footer className="flex-grow" />
        </main>
        <Script
          src="https://watermelon-cm1.pages.dev/lib/banner.min.js"
          onLoad={() => {
            window.PBanner.create("#banner", { theme: "dark", fixed: false });
          }}
        />
      </body>
    </html>
  );
}
