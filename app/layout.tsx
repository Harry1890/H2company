import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { companyConfig } from "@/config/company";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${companyConfig.name} — AI systems built for real work.`,
    template: `%s — ${companyConfig.name}`,
  },
  description:
    "We design and engineer production-grade AI systems for ambitious companies — while building a few of our own.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
