import SearchItems from "@/components/search-items/search-items";
import { getItems, Item, PagingResponse } from "@/services/items";
import Image from "next/image";

interface CatalogueItems {
  items: Item[];
  paging: PagingResponse;
}

export default async function Home({ searchParams }) {
  const { items }: CatalogueItems = await getItems(searchParams);
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto p-6">
      <div className="grid rows grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-7 max-w-[450px] md:max-w-full mx-auto">
        <div className="col-span-1 md:col-span-3 lg:col-span-4">
          <div className="flex space-x-2">
            <SearchItems />
          </div>
        </div>
        {items.length > 0 ? (
          items.map((item: Item, index: number) => (
            <div key={index} className="flex flex-col gap-2 max-w-[300px]">
              <div className="bg-white rounded-xl max-h-[300px]">
                <Image
                  className="aspect-[4/5] p-10 max-h-[300px] mx-auto"
                  width={200}
                  height={500}
                  src={item.image_url}
                  alt="pic"
                />
              </div>
              <p className="text-center text-ellipsis pt-2 text-nowrap overflow-hidden ">
                {item.title}
              </p>
              <div className="flex justify-between">
                <div className="text-orange-600 font-semibold text-2xl overflow-hidden overflow-ellipsis">
                  {Math.round(item.price * 0.3).toFixed(2)}
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
          <div className="text-2xl text-muted-foreground w-full">
            No items found
          </div>
        )}
      </div>
    </div>
  );
}
