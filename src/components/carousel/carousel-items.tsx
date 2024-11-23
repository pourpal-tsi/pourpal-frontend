import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Item } from "@/services/items";

interface CarouselItemsProps {
  items: Item[];
}

export function CarouselItems({ items }: CarouselItemsProps) {
  if (!items.length) return null;

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto flex max-w-sm px-2 md:max-w-xl lg:max-w-5xl"
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
              <Card>
                <CardContent>
                  <Link href={`/catalogue/${item.id}`}>
                    <div className="relative max-h-[300px] rounded-xl bg-white duration-300">
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
                  <div className="mt-2 flex items-center justify-center gap-2.5">
                    <div className="overflow-hidden text-ellipsis text-nowrap text-2xl font-semibold">
                      {item.price}
                      {item.currency}
                      <span className="text-[0.75rem] font-light text-primary">
                        /pcs
                      </span>
                    </div>
                    {/*<div className="grow text-muted-foreground line-through">*/}
                    {/*  {item.price}*/}
                    {/*  {item.currency}*/}
                    {/*</div>*/}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
