import { getItem, getItems } from "@/services/items";
import type { Item } from "@/services/items";
import Image from "next/image";
import CartButton from "@/components/cart-button/cart-button";
import { CarouselItems } from "@/components/carousel/carousel-items";
import GoBack from "@/components/navigation/go-back";

interface ItemProps {
  params: {
    id: string;
  };
}

export default async function Item({ params }: ItemProps) {
  const item: Item = await getItem(params.id);
  const sameBrandItems: Item[] = (
    await getItems({
      brands: [item.brand_id],
      page_size: 10,
    })
  ).items;
  const sameTypeItems: Item[] = (
    await getItems({
      types: [item.type_id],
      page_size: 10,
    })
  ).items;

  const filteredBrandItems = sameBrandItems.filter(
    (brandItem) => brandItem.id !== item.id,
  );
  const filteredTypeItems = sameTypeItems.filter(
    (typeItem) => typeItem.id !== item.id,
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl bg-white">
      <div className="pl-8 pt-5">
        <GoBack />
      </div>
      {/* CURRENT ITEM */}
      <div className="mx-4 flex flex-col items-center justify-center gap-10 md:flex-row lg:items-start">
        <Image
          className="aspect-[4/5] max-h-[300px] min-h-[400px] min-w-[300px] select-none object-contain p-5 md:ml-10"
          width={400}
          height={400}
          src={item.image_url}
          alt={item.title ?? "Item"}
        />
        <div className="space-y-1 p-10">
          <h1 className="text-ellipsis text-2xl font-semibold">{item.title}</h1>
          <p className="text-ellipsis text-xl text-muted-foreground">
            {item.origin_country_name}, {item.brand_name}, {item.type_name}
          </p>
          <p className="text-muted-foreground">
            {item.volume}
            {item.volume_unit}, {item.alcohol_volume}%
          </p>
          <div className="w-40 pt-5">
            <CartButton
              id={item.id}
              maxQuantity={item.quantity}
              price={item.price}
              currency={item.currency}
              priceSize="large"
            />
          </div>
          <p className="pt-5 text-muted-foreground">{item.description}</p>
        </div>
      </div>

      {/* DETAILED INFO */}
      <div className="m-10 rounded-lg bg-slate-50">
        <h2 className="p-5 text-2xl font-semibold">Detailed information</h2>
        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Brand</h3>
            <p>{item.brand_name}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Type</h3>
            <p>{item.type_name}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Country of origin</h3>
            <p>
              {item.origin_country_name}, {item.origin_country_code}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Volume</h3>
            <p>
              {item.volume}
              {item.volume_unit}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Alcohol volume</h3>
            <p>{item.alcohol_volume}%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Price</h3>
            <p>
              {item.price}
              {item.currency}
            </p>
          </div>
        </div>
      </div>

      {/* RELATED ITEMS */}
      {filteredBrandItems.length >= 4 && (
        <div className="m-10">
          <h2 className="p-5 text-2xl font-semibold">
            {item.brand_name} Alcohol
          </h2>
          <CarouselItems items={filteredBrandItems} />
        </div>
      )}
      {filteredTypeItems.length >= 4 && (
        <div className="m-10">
          <h2 className="p-5 text-2xl font-semibold">
            Related {item.type_name}
          </h2>
          <CarouselItems items={filteredTypeItems} />
        </div>
      )}
      {/*COMMENTS SECTION*/}
      <div className="pb-10"></div>
    </div>
  );
}
