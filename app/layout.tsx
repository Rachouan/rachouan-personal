import "./globals.css";
import Container from "@/components/container";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-ballinger text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 transition-all">
        <Navigation />
        <main className="pt-20 min-h-screen flex flex-col">
          <Container>{children}</Container>
          <Footer className="flex-grow" />
        </main>
      </body>
    </html>
  );
}
