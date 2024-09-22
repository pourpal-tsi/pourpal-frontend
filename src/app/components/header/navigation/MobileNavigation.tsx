import { ReactNode } from "react";
import User from "@/app/components/header/User";
import Image from "next/image";

export default function MobileNavigation({children}: ReactNode) {
  return (
    <nav className="md:hidden">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-72 p-4">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
}