"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-10">
        <AvatarImage src="https://tsi.lv/wp-content/uploads/2020/02/alexander_grakovski.png" />
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <div className="overflow-hidden">
        <p className="overflow-hidden text-ellipsis text-nowrap text-sm font-semibold">
          Aleksandr Grakovskiy
        </p>
        <p className="overflow-hidden text-ellipsis text-sm text-neutral-600">
          sashka@numerical.com
        </p>
      </div>
    </div>
  );
}
