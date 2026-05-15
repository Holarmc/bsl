import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Header from "./components/header"
import Footer from "./components/footer"

import "./globals.css";

const manrope = Manrope({
  // variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  // variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BSL | Engineering Reliable IT &amp; Business Growth",
  description: "Enterprise-grade IT Support, Managed Services, Infrastructure Solutions, and Training designed for scalable business growth.",
  icons: {
    icon: 'https://res.cloudinary.com/dumgkpy4c/image/upload/v1778454288/thumbnail_nsntwj.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.className} ${inter.className} h-full antialiased scroll-smooth`}
    >
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
