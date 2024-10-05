"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-10">
        <AvatarImage src="https://tsi.lv/wp-content/uploads/2020/02/alexander_grakovski.png" />
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <div className="overflow-hidden shrink">
        <p className="font-semibold text-sm text-ellipsis overflow-hidden text-nowrap">Aleksandr Grakovsky</p>
        <p className="text-neutral-600 text-sm  text-ellipsis overflow-hidden">sashka@numerical.com</p>
      </div>
    </div>
  );
}
