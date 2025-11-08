import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "K-RERA Registered Real Estate Agent | Trusted Property Services",
  description: "Trusted K-RERA registered real estate agent for buying, selling, and investing in properties. 500+ properties sold with 5+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
