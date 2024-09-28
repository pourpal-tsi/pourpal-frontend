export interface Item {
  item_id: string;
  title: string;
  image_url: string;
  description: string;
  type_id: string;
  type_name: string;
  price: {
    amount: {
      $numberDecimal: string;
    };
    currency: string;
  };
  volume: {
    amount: {
      $numberDecimal: string;
    };
    unit: string;
  };
  alcohol_volume: {
    amount: {
      $numberDecimal: string;
    };
    unit: string;
  };
  quantity: number;
  origin_country_code: string;
  origin_country_name: string;
  brand_id: string;
  brand_name: string;
  updated_at: {
    $date: string;
  };
  added_at: {
    $date: string;
  };
}

export async function getItems(
  search?: string,
  types?: string[],
  countries?: string[],
  brands?: string[],
  min_price?: number,
  max_price?: number
): Promise<Item[]> {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (types && types.length > 0) params.append("types", types.join(","));
  if (countries && countries.length > 0) params.append("countries", countries.join(","));
  if (brands && brands.length > 0) params.append("brands", brands.join(","));
  if (min_price !== undefined) params.append("min_price", min_price.toString());
  if (max_price !== undefined) params.append("max_price", max_price.toString());

  const apiUrl = params.toString()
    ? `${process.env.BACKEND_URL}/items?${params}`
    : `${process.env.BACKEND_URL}/items`;

  try {
    const res = await fetch(apiUrl, {
      cache: "no-cache"
    });

    const data = await res.json();

    return data.items;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    throw error;
  }
}

export async function getItemById(
  id: string
): Promise<Item> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/items/${id}`);

    const data = await res.json();

    return data.item;
  } catch (error) {
    console.error("Failed to fetch item:", error);
    throw error;
  }
}