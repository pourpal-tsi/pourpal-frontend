import Image from "next/image";
import { truncateText } from "@/utils/truncateText";

interface ItemProps {
  item: {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
  };
}

export default function ItemCard({ item }: ItemProps) {
  return (
    <div className="card w-[19.2rem] bg-base-100 shadow-xl">
      <figure
        className="relative h-[15rem] overflow-hidden grayscale-[60%] transition-all duration-300 hover:grayscale-0">
        <Image
          className="cursor-pointer object-cover"
          src={item.image}
          alt={item.title}
          fill
        />
      </figure>
      <hr />
      <div className="card-body min-h-60">
        <h2 className="card-title">{item.title}</h2>
        <p>{truncateText(item.description, 100)}</p>
        <div className="card-actions items-center justify-between">
          <span className="text-xl">
            <strong>{item.price}</strong>
          </span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
