import SearchField from "@/components/search/SearchField";
import ItemList from "@/components/item-card/ItemList";
import BeverageFilter from "@/components/search/BeverageFilter";
import { getItems } from "@/service/items";


export default async function HomeCatalogue({ searchParams }: any) {
  const { search } = searchParams;
  const items = await getItems(search);

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
        <ItemList items={items} searchTitle={search} />
      </section>
    </main>
  );
}
