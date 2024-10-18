"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  MenuGroup,
  MenuItem,
  menuList,
} from "@/components/navigation/menu-config";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[95vh] flex-col">
      <nav className="flex grow flex-col gap-4">
        <div>
          {menuList.map((menu: MenuGroup, menuKey: number) => (
            <div key={menuKey}>
              <NavLabel>{menu.group}</NavLabel>
              <ul className="space-y-1">
                {menu.options.map((option: MenuItem, optionKey: number) => {
                  const isActive = pathname === option.href;
                  return (
                    <NavEntry
                      key={optionKey}
                      href={option.href}
                      isActive={isActive}
                    >
                      {option.icon} {option.label}
                    </NavEntry>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <div className="text-center text-sm font-extralight italic text-neutral-400">
        <Link
          target="_blank"
          href="https://e.tsi.lv/pluginfile.php/151322/mod_resource/content/2/1.5.3.NormalDensityFunction.pdf"
        >
          version: 0.3989
        </Link>
      </div>
    </div>
  );
}

function NavLabel({ children }: { children: ReactNode }) {
  return <div className="p-1 text-sm text-muted-foreground">{children}</div>;
}

interface NavEntryProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
}

function NavEntry({ href, isActive, children }: NavEntryProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary pointer-events-none dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground",
        )}
      >
        <div className="flex flex-row items-center">{children}</div>
      </Link>
    </li>
  );
}
