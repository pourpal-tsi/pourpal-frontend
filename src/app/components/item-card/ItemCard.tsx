import Image from 'next/image';
import {truncateText} from "@/utils/truncateText";

interface Item {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
}

export default function ItemCard<Item>({item}) {
    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure
                className="relative h-52 w-full overflow-hidden grayscale-[60%] hover:grayscale-[0%] transition-all duration-300">
                <Image
                    className="cursor-pointer object-cover"
                    src={item.image}
                    alt={item.title}
                    fill
                />
            </figure>
            <hr/>
            <div className="card-body min-h-60">
                <h2 className="card-title">{item.title}</h2>
                <p>{truncateText(item.description, 100)}</p>
                <div className="card-actions justify-between items-center">
                    <span className="text-xl"><strong>{item.price}</strong></span>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
