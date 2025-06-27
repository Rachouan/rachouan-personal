import "./globals.css";
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
          "text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-all"
        }
      >
        <Navigation />
        <main className="min-h-screen flex flex-col">
          {children}
          <Footer className="flex-grow" />
        </main>
      </body>
    </html>
  );
}
