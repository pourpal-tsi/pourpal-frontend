import SearchField from "@/app/components/search/SearchField";
import ItemList from "@/app/components/item-card/ItemList";
import BeverageFilter from "@/app/components/search/BeverageFilter";

const fetchItems = async (title = "") => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-cache"
  });
  const data = await res.json();

  if (title)
    return data.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  return data;
};

interface Params {
  searchParams: {
    title?: string;
  };
}

export default async function HomeCatalogue({ searchParams }: Params) {
  const { title } = searchParams;
  const items = await fetchItems(title);

  return (
    <main className="min-h-screen bg-base-200 flex justify-center">
      <section className="py-10">
        <h1 className="pb-10 text-center lg:text-5xl text-4xl font-bold">PourPal Catalogue</h1>
        <SearchField className="mb-8" />
        <ItemList items={items} searchTitle={title} />
      </section>
    </main>
  );
}
