"use client";

import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function GoBack() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="rounded-full p-2 duration-300 md:hover:bg-neutral-100"
    >
      <MoveLeft size={32} strokeWidth={1.25} />
    </button>
  );
}
