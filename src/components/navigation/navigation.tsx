"use client";

import { History, LoaderCircle, LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import UserProfile from "@/components/user-profile";
import { userContext } from "@/context/user-context";
import { useEffect } from "react";
import Ping from "@/components/ping/ping";
import { useCart } from "@/context/cart-context";

export default function Navigation() {
  const { user, isAuthenticated, logoutUser, loading } = userContext();
  const { isCartEmpty } = useCart();

  useEffect(() => {
    console.log("OLEG NE SHALI");
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-[73px] items-center justify-between gap-2 border-b bg-white/90 px-2 backdrop-blur-lg">
      {/* APPLICATION NAME */}
      <span className="grow p-1 text-xl text-foreground">
        <Link
          href="/catalogue"
          className="grow rounded-lg p-2 md:hover:bg-neutral-100"
        >
          PourPal
        </Link>
      </span>

      {/* ORDERS HISTORY */}
      {isAuthenticated && (
        <div className="icon-hover translate-x-1">
          <Link href="/history">
            <History strokeWidth={1.2} />
          </Link>
        </div>
      )}

      {/* SHOPPING CART */}
      <div className="icon-hover relative">
        <Link href="/shopping-cart">
          <ShoppingCart strokeWidth={1.2} />
        </Link>
        {!isCartEmpty() && (
          <Ping
            pingClassName="-right-2 -top-0.5"
            circleClassName="-right-2 -top-0.5"
          />
        )}
      </div>

      {/* USER AUTHENTICATION */}
      <div className="pr-2">
        {loading ? (
          <LoaderCircle className="animate-spin" strokeWidth={1.2} />
        ) : isAuthenticated ? (
          <UserProfile user={user} logoutUser={logoutUser} />
        ) : (
          <div className="icon-hover">
            <Link href="/login">
              <LogIn strokeWidth={1.2} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
