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
  const title = searchParams.title || "";
  const items = await fetchItems(title);

  return (
    <main className="min-h-screen bg-base-200 flex justify-center">
      <aside className="2xl:block hidden w-80 pr-8 mt-[17rem]">
        <div className="sticky top-32 bg-white px-6 py-5 shadow-xl rounded-xl">
          <BeverageFilter />
        </div>
      </aside>
      <section className="py-10">
        <h1 className="heading-1">PourPal Catalogue</h1>
        <SearchField className="mb-8 lg:w-[970px] md:w-[640px]" />
        <ItemList items={items} searchTitle={title} />
      </section>
    </main>
  );
}
