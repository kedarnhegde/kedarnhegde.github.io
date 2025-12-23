import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Kedar Hegde — Portfolio",
  description: "Portfolio of Kedar Hegde — Software Engineer",
  metadataBase: new URL("https://kedarnhegde.github.io"),
  openGraph: {
    title: "Kedar Hegde — Software Engineer",
    description:
      "Frontend & full-stack engineer: Rails, Vue/Nuxt, React/Next, GraphQL.",
    url: "https://kedarnhegde.github.io",
    siteName: "Kedar Hegde",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kedar Hegde — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedar Hegde — Software Engineer",
    description:
      "Frontend & full-stack engineer: Rails, Vue/Nuxt, React/Next, GraphQL.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-foreground antialiased">
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
