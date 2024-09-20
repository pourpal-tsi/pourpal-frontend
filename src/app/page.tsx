import ItemCard from "@/app/components/item-card/ItemCard";
import {groupBy} from "@/utils/groupBy";
import SearchField from "@/app/components/search/SearchField";

const fetchItems = async (title = '') => {
    const res = await fetch('http://localhost:3000/api/items', {cache: 'no-cache'});
    const data = await res.json();

    if (title)
        return data.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
    return data;
};

export default async function HomeCatalogue({searchParams}) {
    const items = await fetchItems(searchParams.title);

    const groupedItems = items ? groupBy(items, 'type') : {};


    return (
        <main className="bg-base-200 min-h-screen">
            <h1 className="text-center font-bold text-4xl pt-10">PourPal Catalogue</h1>

            <section className="mx-auto py-10">
                <div className="max-w-screen-lg mx-auto px-4">
                    <div className="flex-1 mb-8">
                        <SearchField/>
                    </div>
                    {items.length === 0 ? (
                        <div className="font-bold text-4xl pt-10">
                            {searchParams.title ? `Not Found "${searchParams.title}"` : 'Not Found'}
                        </div>
                    ) : (
                        Object.keys(groupedItems).map((type) => (
                            <div key={type} className="mb-10">
                                <h2 className="text-2xl font-semibold mb-6">{type}</h2>
                                <div className="flex flex-wrap gap-4">
                                    {groupedItems[type].map((item) => (
                                        <ItemCard key={item.id} item={item}/>
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
