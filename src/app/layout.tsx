import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { PageLoader } from "@/components/layout/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEAR24 | Premium Streetwear Collection",
  description: "Discover the latest in urban minimalist fashion. Premium streetwear designed for the modern lifestyle.",
  keywords: ["streetwear", "fashion", "clothing", "urban style", "minimalist"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <PageLoader />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
