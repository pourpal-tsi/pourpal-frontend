import SearchItems from "@/components/search-items/search-items";
import { getItems, GetItemsQueryParams, Item } from "@/services/items";
import Image from "next/image";

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
            <div key={index} className="flex max-w-[300px] flex-col gap-2">
              <div className="max-h-[300px] rounded-xl bg-white">
                <Image
                  className="mx-auto aspect-[4/5] max-h-[300px] p-10"
                  width={200}
                  height={500}
                  src={item.image_url}
                  alt="pic"
                  unoptimized
                />
              </div>
              <p className="overflow-hidden text-ellipsis text-nowrap pt-2 text-center ">
                {item.title}
              </p>
              <div className="flex justify-between">
                <div className="overflow-hidden text-ellipsis text-2xl font-semibold text-orange-600">
                  {item.price}
                  {item.currency}
                </div>
                <div className="text-muted-foreground line-through">
                  {item.price}
                  {item.currency}
                </div>
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
