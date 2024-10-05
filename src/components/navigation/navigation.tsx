"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/navigation/sidebar";
import { Bell, Menu, ShoppingCart } from "lucide-react";
import Ping from "@/components/ping/ping";
import Link from "next/link";
import useCloseOnPathChange, {
  UseCloseOnPathChangeResult,
} from "@/hooks/use-close-on-path-change";

export default function Navigation() {
  const { isOpen, setIsOpen }: UseCloseOnPathChangeResult =
    useCloseOnPathChange();

  return (
    <header className="sticky top-0 z-50 flex min-h-[73px] items-center justify-between gap-1 border-b bg-white/90 px-2 backdrop-blur-lg">
      {/* SIDEBAR */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="icon-hover">
            <Menu />
          </div>
        </SheetTrigger>
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
      <div className="icon-hover">
        <ShoppingCart strokeWidth={1.2} />
      </div>

      {/* NOTIFICATION */}
      <div className="icon-hover relative">
        <Bell strokeWidth={1.2} />
        <Ping />
      </div>
    </header>
  );
}
