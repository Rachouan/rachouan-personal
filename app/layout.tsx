import "./globals.css";
import Container from "@/components/container";
import Footer from "@/structures/footer";
import { Navigation } from "@/structures/navigation";

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
          "text-gray-900 dark:text-white bg-gray-50/50 dark:bg-gray-900 transition-all"
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
