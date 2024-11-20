import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navigation from "@/components/navigation/navigation";
import { Poppins } from "next/font/google";
import RootProvider from "@/app/providers";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PourPal - Alcohol store",
  description:
    "PourPal is your go-to online store for premium alcoholic beverages. Discover a wide selection of wines, spirits, and exclusive collections. With a user-friendly interface and fast delivery, shopping with us is convenient and enjoyable.",
  keywords: [
    "wine",
    "spirits",
    "alcohol",
    "beverages",
    "shop",
    "store",
    "online",
    "delivery",
    "premium",
    "exclusive",
    "alcoholic beverages",
    "buy wine",
    "premium spirits",
    "online alcohol store",
    "whiskey",
    "vodka",
    "gin",
    "wine delivery",
  ],
  authors: [
    { name: "PourPal", url: "https://www.youtube.com/watch?v=mHrtsCGR8yk" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <Navigation />
          <main className="w-full grow bg-gray-50 pt-[4.5rem]">{children}</main>
          <footer className="border-t bg-white py-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  &copy; {new Date().getFullYear()} Ragazzo Sporco
                </span>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/elvis.placis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com/elonmusk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://youtu.be/5tSvWqLmDYA?si=srpTalOESC2IM8nt&t=26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              <div className="flex space-x-6 text-sm text-gray-600 hover:text-gray-800">
                <Link href="/about"> About Us </Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>
            </div>
          </footer>
        </RootProvider>
      </body>
    </html>
  );
}
