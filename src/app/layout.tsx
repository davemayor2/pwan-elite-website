import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "EliteHub Properties - Building Wealth Through Real Estate Ownership",
  description: "Secure your future with premium land investments from Nigeria's trusted real estate network. EliteHub Properties offers verified properties, flexible payment plans, and expert advisory services.",
  keywords: "real estate, property investment, land sales, Nigeria real estate, EliteHub Properties, property development",
  authors: [{ name: "EliteHub Properties" }],
  icons: {
    icon: [
      { url: "/elitehub.webp", type: "image/webp", sizes: "32x32" },
      { url: "/elitehub.webp", type: "image/webp", sizes: "16x16" },
    ],
    shortcut: "/elitehub.webp",
    apple: "/elitehub.webp",
  },
  openGraph: {
    title: "EliteHub Properties - Building Wealth Through Real Estate Ownership",
    description: "Secure your future with premium land investments from Nigeria's trusted real estate network.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
