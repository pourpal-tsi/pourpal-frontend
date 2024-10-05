"use client";
import { ReactNode } from "react";
import {
  Accessibility,
  CircleUser,
  Contact,
  Headset,
  Home,
  Landmark,
  MessageCircleQuestion,
  Settings,
} from "lucide-react";

export interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface MenuGroup {
  group: string;
  options: MenuItem[];
}

export type MenuList = MenuGroup[];

export const menuList: MenuList = [
  {
    group: "Store",
    options: [
      {
        label: "Home",
        href: "/catalogue",
        icon: <Home className="mr-2 size-4" />,
      },
      {
        label: "About Us",
        href: "/about",
        icon: <Accessibility className="mr-2 size-4" />,
      },
      {
        label: "Contact",
        href: "/contact",
        icon: <Contact className="mr-2 size-4" />,
      },
    ],
  },
  {
    group: "Settings",
    options: [
      {
        label: "Profile",
        href: "/profile",
        icon: <CircleUser className="mr-2 size-4" />,
      },
      {
        label: "Billing",
        href: "/billing",
        icon: <Landmark className="mr-2 size-4" />,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: <Settings className="mr-2 size-4" />,
      },
    ],
  },
  {
    group: "Help",
    options: [
      {
        label: "Support",
        href: "/support",
        icon: <Headset className="mr-2 size-4" />,
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: <MessageCircleQuestion className="mr-2 size-4" />,
      },
    ],
  },
];
