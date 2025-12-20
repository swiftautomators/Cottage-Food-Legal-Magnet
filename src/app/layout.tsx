import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "2025 Cottage Food Legal Hub",
  description: "Navigate the 2025 cottage food legislative shifts with ease. Interactive state database, labeling compliance matrix, and privacy protocols.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-brand-gradient min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}