import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono, Hanken_Grotesk, Shrikhand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Shrikhand({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "700",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Frente Trans Londrina",
  description: "Site da Frente Trans Londrina: notícias, artigos e guias.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${body.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
