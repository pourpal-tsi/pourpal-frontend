"use client";

import { SlidersHorizontal } from "lucide-react";

import { Label } from "@/components/ui/label";
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
import TypeComboBox from "@/components/form/type-combobox";
import CountryComboBox from "@/components/form/country-combobox";
import BrandComboBox from "@/components/form/brand-combobox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/utils/createQueryString";

export default function SearchItems() {
  const { isOpen, setIsOpen, pathname }: UseCloseOnPathChangeResult =
    useCloseOnPathChange();
  const router = useRouter();

  const [_search, setSearch] = useState("");
  const [search] = useDebouncedValue(_search, 500);

  useEffect(() => {
    const url = `${pathname}?${createQueryString({
      search: search,
    })}`;

    router.push(url, { scroll: false });
  }, [pathname, search, router]);

  return (
    <>
      <Input
        type="search"
        placeholder="Search..."
        className="bg-white py-5 w-[240px] md:w-full"
        value={_search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="button-like flex gap-2 py-[200px]">
            <SlidersHorizontal size={20} className="md:text-neutral-200" />
            <p className="hidden text-sm text-white md:block">Filters</p>
          </div>
        </SheetTrigger>
        <SheetContent className="w-full overflow-auto p-6 md:max-w-[50vw]">
          <SheetHeader>
            <SheetTitle className="text-left">Filters</SheetTitle>
            <SheetDescription className="text-justify">
              Set filters to refine your search for alcoholic beverages by
              category, type, or brand. Quickly find what you’re looking
              for—wine, beer, or spirits. Enjoy!
            </SheetDescription>
            <div className="w-full space-y-4 pt-2">
              <div className="space-y-2">
                <div className="text-left">
                  <Label>Type</Label>
                </div>
                <div className="flex min-h-[42px] flex-col [&_button]:grow">
                  <TypeComboBox id="type" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-left">
                  <Label>Country</Label>
                </div>
                <div className="flex min-h-[42px] flex-col [&_button]:grow">
                  <CountryComboBox id="country" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-left">
                  <Label>Brand</Label>
                </div>
                <div className="flex min-h-[42px] flex-col [&_button]:grow">
                  <BrandComboBox />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-left">
                    <Label htmlFor="minPrice">From</Label>
                  </div>
                  <Input
                    id="minPrice"
                    className="mt-2 py-5"
                    placeholder="Enter min price"
                  />
                </div>
                <div>
                  <div className="text-left">
                    <Label htmlFor="maxPrice">To</Label>
                  </div>
                  <Input
                    id="maxPrice"
                    className="mt-2 py-5"
                    placeholder="Enter max price"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button>Apply</Button>
                <Button variant="destructive">Clear</Button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
