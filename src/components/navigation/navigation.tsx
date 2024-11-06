"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/navigation/sidebar";
import { LoaderCircle, LogIn, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCloseOnPathChange, {
  UseCloseOnPathChangeResult,
} from "@/hooks/use-close-on-path-change";
import { DialogTitle } from "@/components/ui/dialog";
import UserProfile from "@/components/user-profile";
import { userContext } from "@/context/user-context";

export default function Navigation() {
  const { isOpen, setIsOpen }: UseCloseOnPathChangeResult =
    useCloseOnPathChange();
  const { user, isAuthenticated, logoutUser, loading } = userContext();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-[73px] items-center justify-between gap-1 border-b bg-white/90 px-2 backdrop-blur-lg">
      {/* SIDEBAR */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <DialogTitle>
          <SheetTrigger>
            <div className="icon-hover">
              <Menu />
            </div>
          </SheetTrigger>
        </DialogTitle>
        <SheetContent side="left" className="w-full overflow-auto p-4">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* APPLICATION NAME */}
      <span className="grow p-1 text-xl text-foreground">
        <Link
          href="/catalogue"
          className="grow rounded-lg p-2 md:hover:bg-neutral-100"
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
