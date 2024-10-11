"use client";

import { SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCloseOnPathChange, {
  UseCloseOnPathChangeResult,
} from "@/hooks/use-close-on-path-change";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/createQueryString";
import FilterItem from "@/components/search-items/filter-items";

export default function SearchItems() {
  const { isOpen, setIsOpen, pathname }: UseCloseOnPathChangeResult =
    useCloseOnPathChange();
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const [_search, setSearch] = useState(initialSearch);
  const [search] = useDebouncedValue(_search, 500);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    if (search !== initialSearch) {
      delete params.page_number;
    }
    const url = `${pathname}?${createQueryString({ ...params, search, page_size: 24 })}`;
    router.push(url, { scroll: false });
  }, [pathname, search, router, searchParams, initialSearch]);

  const currentFilters = Object.fromEntries(searchParams.entries());

  return (
    <>
      {/* SEARCH */}
      <Input
        type="search"
        placeholder="Search..."
        className="w-[240px] bg-white py-5 md:w-full"
        value={_search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTERS */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="button-like flex gap-2 py-[200px]">
            <SlidersHorizontal size={20} className="md:text-neutral-200" />
            <p className="hidden text-sm text-white md:block">Filters</p>
          </div>
        </SheetTrigger>
        <SheetContent className="min-w-[100vw] overflow-auto p-6 md:min-w-[500px]">
          <SheetHeader>
            <SheetTitle className="text-left">Filters</SheetTitle>
            <SheetDescription className="text-justify">
              Set filters to refine your search for alcoholic beverages by
              category, type, or brand. Quickly find what you’re looking
              for—wine, beer, or spirits. Enjoy!
            </SheetDescription>
            <FilterItem setIsOpen={setIsOpen} filters={currentFilters} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
