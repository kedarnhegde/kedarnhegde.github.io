import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kedar Hegde — Portfolio",
  description: "Portfolio of Kedar Hegde — Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
