import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launcher - AI-Powered Launch Copy for Indie Hackers",
  description:
    "Generate ready-to-post launch content for Twitter, Reddit, Hacker News, and Product Hunt in seconds. Ship your product launch faster.",
  keywords: [
    "launch copy",
    "product launch",
    "indie hacker",
    "AI copywriting",
    "Twitter posts",
    "Reddit marketing",
    "Hacker News",
    "Product Hunt",
  ],
  authors: [{ name: "Launcher" }],
  openGraph: {
    title: "Launcher - AI-Powered Launch Copy for Indie Hackers",
    description:
      "Generate ready-to-post launch content for Twitter, Reddit, Hacker News, and Product Hunt in seconds.",
    url: "https://launcher.dev",
    siteName: "Launcher",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launcher - AI-Powered Launch Copy for Indie Hackers",
    description:
      "Generate ready-to-post launch content for Twitter, Reddit, Hacker News, and Product Hunt in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
