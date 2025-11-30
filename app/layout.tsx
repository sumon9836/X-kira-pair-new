import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X-kira MD - FREE WhatsApp Bot",
  description: "Free WhatsApp Bot with advanced features. Pair your WhatsApp number and start using X-kira MD bot today.",
  keywords: ["whatsapp bot", "x-kira", "whatsapp automation", "free bot", "pairing"],
  authors: [{ name: "X-kira MD" }],
  creator: "X-kira MD",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "X-kira MD - FREE WhatsApp Bot",
    description: "Free WhatsApp Bot with advanced features",
    siteName: "X-kira MD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.ibb.co/j99hTVHV/IMG-20251111-WA0012.jpg" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://i.ibb.co/j99hTVHV/IMG-20251111-WA0012.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.ibb.co/j99hTVHV/IMG-20251111-WA0012.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
