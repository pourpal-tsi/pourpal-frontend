import ShoppingCart from "@/app/components/header/ShoppingCart";
import User from "@/app/components/header/User";
import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-50 bg-white/90 backdrop-blur-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          PourPal
        </Link>
      </div>
      <nav className="flex-none">
        <ShoppingCart />
        <User />
      </nav>
    </header>
  );
}
