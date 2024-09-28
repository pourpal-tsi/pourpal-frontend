import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PourPal",
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
    "wine delivery"
  ],
  authors: [
    { name: "PourPal", url: "https://www.youtube.com/watch?v=mHrtsCGR8yk" }
  ]
};

export default function RootLayout({
                                     children
                                   }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
    <body className="bg-gray-200">
    <Header />
    {children}
    <Footer />
    </body>
    </html>
  );
}
