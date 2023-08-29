import "./globals.css";
import Footer from "@/structures/footer";
import { Navigation } from "@/structures/navigation";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "Rachouan | A fullstack developer, designer and illustrator from Belgium.",
    icons: {
      icon: "/favicon.svg",
    },
    description:
      "A fullstack developer, designer and illustrator from Belgium.",
    keywords: [
      "Fullstack",
      "developer",
      "React",
      "Typescript",
      "Javascript",
      "Next.js",
    ],
    openGraph: {
      title: "Rachouan®",
      description:
        "A fullstack developer, designer and illustrator from Belgium.",
      url: "https://rachouan.com",
      siteName: "Rachouan.com",
      locale: "en_US",
      type: "website",
    },
    authors: [{ name: "Rachouan Rejeb" }],
    creator: "Rachouan Rejeb",
    publisher: "Sebastian Markbåge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
