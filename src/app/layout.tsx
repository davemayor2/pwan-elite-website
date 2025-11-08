import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "PWAN Elite - Building Wealth Through Real Estate Ownership",
  description: "Secure your future with premium land investments from Nigeria's trusted real estate network. PWAN Elite offers verified properties, flexible payment plans, and expert advisory services.",
  keywords: "real estate, property investment, land sales, Nigeria real estate, PWAN Elite, property development",
  authors: [{ name: "PWAN Elite" }],
  openGraph: {
    title: "PWAN Elite - Building Wealth Through Real Estate Ownership",
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
        <Analytics />
      </body>
    </html>
  );
}
