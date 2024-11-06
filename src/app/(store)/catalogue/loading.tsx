import SearchItems from "@/components/search-items/search-items";
import SortItems from "@/components/search-items/sort-items";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col p-6">
      <div className="mx-auto grid max-w-[450px] grid-cols-1 gap-7 md:max-w-full md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <div className="flex space-x-2">
            <SearchItems />
          </div>
          <SortItems />
        </div>
        {Array.from({ length: 24 }, (_, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Skeleton className="h-[250px] min-w-[240px] max-w-[280px]" />
            <div className="space-y-2">
              <Skeleton className="mt-3 h-5" />
              <div className="flex gap-2.5">
                <Skeleton className="h-9 grow" />
                <Skeleton className="h-9 w-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
