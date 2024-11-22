"use client";

import { LoaderCircle, LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import UserProfile from "@/components/user-profile";
import { userContext } from "@/context/user-context";

export default function Navigation() {
  const { user, isAuthenticated, logoutUser, loading } = userContext();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-[73px] items-center justify-between gap-1 border-b bg-white/90 px-2 backdrop-blur-lg">
      {/* APPLICATION NAME */}
      <span className="grow p-1 text-xl text-foreground">
        <Link
          href="/catalogue"
          className="grow rounded-lg p-2 hover:bg-transparent"
        >
          PourPal
        </Link>
      </span>

      {/* SHOPPING CART */}
      <div className="icon-hover pr-3">
        <Link href="/shopping-cart">
          <ShoppingCart strokeWidth={1.2} />
        </Link>
      </div>

      {/* USER AUTHENTICATION */}
      <div className="pr-2">
        {loading ? (
          <LoaderCircle className="animate-spin" strokeWidth={1.2} />
        ) : isAuthenticated ? (
          <UserProfile user={user} logoutUser={logoutUser} />
        ) : (
          <Link href="/login">
            <LogIn strokeWidth={1.2} />
          </Link>
        )}
      </div>
    </header>
  );
}
