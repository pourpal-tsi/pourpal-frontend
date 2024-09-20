import ItemCard from "@/app/components/item-card/ItemCard";
import { groupBy } from "@/utils/groupBy";
import SearchField from "@/app/components/search/SearchField";

const fetchItems = async (title = "") => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-cache",
  });
  const data = await res.json();

  if (title)
    return data.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  return data;
};

interface Params {
  searchParams: {
    title?: string;
  };
}

export default async function HomeCatalogue({ searchParams }: Params) {
  const items = await fetchItems(searchParams.title);

  const groupedItems = items ? groupBy(items, "type") : {};

  return (
    <main className="min-h-screen bg-base-200">
      <h1 className="pt-10 text-center text-4xl font-bold">
        PourPal Catalogue
      </h1>

      <section className="mx-auto py-10">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="mb-8 flex-1">
            <SearchField />
          </div>
          {items.length === 0 ? (
            <div className="pt-10 text-4xl font-bold">
              {searchParams.title
                ? `Not Found "${searchParams.title}"`
                : "Not Found"}
            </div>
          ) : (
            Object.keys(groupedItems).map((type) => (
              <div key={type} className="mb-10">
                <h2 className="mb-6 text-2xl font-semibold">{type}</h2>
                <div className="flex flex-wrap gap-4">
                  {groupedItems[type].map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
