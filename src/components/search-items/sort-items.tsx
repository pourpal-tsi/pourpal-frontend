"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createQueryString } from "@/utils/create-query-string";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpZA } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SortItems() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSortBy = searchParams.get("sort_by") || "";
  const currentSortOrder = searchParams.get("sort_order") || "";

  const [sortBy, setSortBy] = useState<string | undefined>(currentSortBy);
  const [sortOrder, setSortOrder] = useState<string | undefined>(
    currentSortOrder,
  );

  const updateUrl = (
    newSortBy: string | undefined,
    newSortOrder: string | undefined,
  ) => {
    const params = Object.fromEntries(searchParams.entries());
    return `${pathname}?${createQueryString({
      ...params,
      sort_by: newSortBy || undefined,
      sort_order: newSortOrder || undefined,
    })}`;
  };

  const handleSortChange = (newSortBy: string | undefined) => {
    const isEmptySortBy = newSortBy === " " ? undefined : newSortBy;
    setSortBy(isEmptySortBy);

    if (isEmptySortBy === "price" && !sortOrder) {
      setSortOrder("asc");
    } else if (isEmptySortBy === "title" && !sortOrder) {
      setSortOrder("asc");
    }
    router.push(updateUrl(isEmptySortBy, sortOrder));
  };

  const handleOrderChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    router.push(updateUrl(sortBy, newSortOrder));
  };

  useEffect(() => {
    if (sortBy === "price" && !sortOrder) {
      setSortOrder("asc");
    }
  }, [sortBy, sortOrder]);

  return (
    <div className="flex justify-center pt-2">
      <Select onValueChange={handleSortChange} defaultValue={currentSortBy}>
        <SelectTrigger className="h-[2.6rem] w-[140px] bg-white">
          <SelectValue placeholder="Select sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value={" "}>Default</SelectItem>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {sortBy === "title" && (
        <Button
          onClick={handleOrderChange}
          variant="outline"
          className="ml-2 h-[2.6rem]"
        >
          {sortOrder === "desc" ? (
            <ArrowUpZA strokeWidth={1.2} />
          ) : (
            <ArrowUpAZ strokeWidth={1.2} />
          )}
        </Button>
      )}
      {sortBy === "price" && (
        <Button
          onClick={handleOrderChange}
          variant="outline"
          className="ml-2 h-[2.6rem]"
        >
          {sortOrder === "asc" ? (
            <ArrowUp01 strokeWidth={1.2} />
          ) : (
            <ArrowUp10 strokeWidth={1.2} />
          )}
        </Button>
      )}
    </div>
  );
}
