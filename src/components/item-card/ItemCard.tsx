import Image from "next/image";
import { Item } from "@/service/items";


export default function ItemCard({ item }: { item: Item }) {

  return (
    <div className="card w-[19.2rem] bg-base-100 shadow-xl">
      <figure
        className="relative h-[15rem] overflow-hidden grayscale-[60%] transition-all duration-300 hover:grayscale-0">
        <Image
          className="cursor-pointer object-cover"
          src={item.image_url}
          alt={item.title}
          fill
        />
      </figure>
      <hr />
      <div className="card-body min-h-60">
        <h2 className="card-title">{item.title}</h2>
        <p className="text-sm">Volume: {item.volume.amount.$numberDecimal} {item.volume.unit}</p>
        <p className="text-sm">Alcohol: {item.alcohol_volume.amount.$numberDecimal}{item.alcohol_volume.unit}</p>
        <p className="text-sm">Country of origin: {item.origin_country_name}</p>
        <div className="card-actions items-center justify-between">
          <span className="text-xl">
            <strong>{item.price.amount.$numberDecimal} {item.price.currency}</strong>
          </span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
