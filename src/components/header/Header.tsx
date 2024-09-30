"use client";
import ShoppingCart from "@/components/header/ShoppingCart";
import User from "@/components/header/User";
import Link from "next/link";
import MobileNavigation from "@/components/header/navigation/MobileNavigation";

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-50 bg-white/90 backdrop-blur-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          PourPal
        </Link>
      </div>

      {/* Desktop */}
      <nav className="flex-none hidden md:flex">
        <ShoppingCart />
        <User />
      </nav>

      {/* Mobile */}
      <MobileNavigation>
        <li><a>Profile</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
        <li><a>Shopping Cart</a></li>
      </MobileNavigation>
    </header>
  );
}
