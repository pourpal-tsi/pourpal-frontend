import SearchItems from "@/components/search-items/search-items";
import { getItems, GetItemsQueryParams, Item } from "@/services/items";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ShoppingBasket} from "lucide-react";

export default async function Home({
  searchParams,
}: {
  searchParams: GetItemsQueryParams;
}) {
  const { items }: { items: Item[] } = await getItems(searchParams);
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col p-6">
      <div className="mx-auto grid max-w-[450px] grid-cols-1 gap-7 md:max-w-full md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <div className="flex space-x-2">
            <SearchItems />
          </div>
        </div>
        {items.length > 0 ? (
          items.map((item: Item, index: number) => (
            <div key={index} className="flex max-w-[280px] flex-col gap-2">
              <div className="max-h-[300px] rounded-xl bg-white relative transform md:hover:shadow-md duration-300">
                <Image
                  className="mx-auto aspect-[4/5] max-h-[300px] object-contain p-10 transform md:hover:scale-110 duration-300 pointer-events-none"
                  width={200}
                  height={500}
                  src={item.image_url}
                  alt="pic"
                />
                <div className="absolute text-center text-[0.725rem] text-muted-foreground bottom-2 inset-x-0">
                  {item.alcohol_volume}
                  {item.volume_unit}, {item.alcohol_volume}%
                </div>
              </div>
              <p className="overflow-hidden text-ellipsis text-nowrap text-center ">
                {item.title}
              </p>
              <div className="flex gap-2.5">
                <div className="overflow-hidden text-ellipsis text-2xl font-semibold text-orange-600">
                  {item.price}
                  {item.currency}
                  <span className="text-[0.75rem] font-light text-primary">
                    /pcs
                  </span>
                </div>
                <div className="text-muted-foreground grow line-through">
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
    </div>
  );
}
