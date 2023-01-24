import Container from "@/components/container";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-gray-900 bg-gray-50">
        <Navigation />
        <main className="mt-24">
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
