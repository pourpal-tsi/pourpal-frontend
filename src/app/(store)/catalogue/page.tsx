import SearchItems from "@/components/search-items/search-items";
import {
  getItems,
  GetItemsQueryParams,
  Item,
  PagingResponse,
} from "@/services/items";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Pagination from "@/components/pagination/pagination";
import SortItems from "@/components/search-items/sort-items";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: GetItemsQueryParams;
}) {
  const { items, paging }: { items: Item[]; paging: PagingResponse } =
    await getItems(searchParams);
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col p-6">
      <div className="mx-auto grid max-w-[450px] grid-cols-1 gap-7 md:max-w-full md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <div className="flex space-x-2">
            <SearchItems />
          </div>
          <SortItems />
        </div>
        {items.length > 0 ? (
          items.map((item: Item) => (
            <div
              key={item.id}
              className="flex max-w-[300px] flex-col justify-center gap-2"
            >
              <Link href={`/catalogue/${item.id}`}>
                <div className="relative max-h-[300px] rounded-xl bg-white duration-300 active:shadow-md md:hover:shadow-md">
                  <Image
                    className="mx-auto aspect-[4/5] max-h-[300px] select-none object-contain p-10 duration-300 active:scale-110 md:hover:scale-105"
                    width={200}
                    height={500}
                    src={item.image_url}
                    alt={item.title ?? "Item"}
                  />
                  <div className="absolute inset-x-0 bottom-2 text-center text-[0.725rem] text-muted-foreground">
                    {item.volume}
                    {item.volume_unit}, {item.alcohol_volume}%
                  </div>
                </div>
              </Link>
              <p className="overflow-hidden text-ellipsis text-nowrap text-center font-[500]">
                {item.title}
              </p>
              <div className="flex gap-2.5">
                <div className="overflow-hidden text-ellipsis text-nowrap text-2xl font-semibold text-orange-600">
                  {item.price}
                  {item.currency}
                  <span className="text-[0.75rem] font-light text-primary">
                    /pcs
                  </span>
                </div>
                <div className="grow text-muted-foreground line-through">
                  {item.price}
                  {item.currency}
                </div>
                <Button>
                  <ShoppingBasket strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-2xl text-muted-foreground">
            No items found
          </div>
        )}
      </div>
      <span className="mx-auto mt-10 rounded-xl bg-white p-1">
        <Pagination paging={paging} />
      </span>
    </div>
  );
}
