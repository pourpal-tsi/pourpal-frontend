"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/navigation/sidebar";
import {Bell, Menu, ShoppingCart} from "lucide-react";
import Ping from "@/components/ping/ping";
import Link from "next/link";
import useCloseOnPathChange, {UseCloseOnPathChangeResult} from "@/hooks/use-close-on-path-change";

export default function Navigation() {
    const { isOpen, setIsOpen }: UseCloseOnPathChangeResult = useCloseOnPathChange();

    return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-lg flex justify-between gap-1 items-center min-h-[73px] px-2 border-b z-50">
      {/* SIDEBAR */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="icon-hover">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-full p-4 overflow-auto">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* APPLICATION NAME */}
      <span className="grow text-xl p-1 text-foreground">
        <Link
          href="/catalogue"
          className="grow p-2 transform md:hover:bg-neutral-100 rounded-lg "
        >
          PourPal
        </Link>
      </span>

      {/* SHOPPING CART */}
      <div className="icon-hover">
        <ShoppingCart strokeWidth={1.2} />
      </div>

      {/* NOTIFICATION */}
      <div className="relative icon-hover">
        <Bell strokeWidth={1.2} />
        <Ping />
      </div>
    </header>
  );
}
