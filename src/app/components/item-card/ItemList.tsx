import ItemCard from "@/app/components/item-card/ItemCard";
import { groupBy } from "@/utils/groupBy";

interface ItemListProps {
  items: any[];
  searchTitle?: string;
}

export default function ItemList({ items, searchTitle }: ItemListProps) {
  const groupedItems = groupBy(items, "type");

  if (items.length === 0) {
    return (
      <div className="pt-10 text-4xl font-bold">
        {searchTitle ? `Not Found "${searchTitle}"` : "Not Found"}
      </div>
    );
  }

  return (
    <>
      {Object.keys(groupedItems).map((type) => (
        <div key={type} className="mb-10">
          <h2 className="heading-2">{type}</h2>
          <div className="grid gap-x-5 gap-y-6 lg:max-w-screen-xl md:max-w-screen-md grid-cols-autofit">
            {groupedItems[type].map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

