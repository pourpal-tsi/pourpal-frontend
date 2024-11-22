import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navigation from "@/components/navigation/navigation";
import { Poppins } from "next/font/google";
import RootProvider from "@/app/providers";
import { Footer } from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

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
          <Footer />
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
