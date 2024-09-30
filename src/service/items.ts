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

interface queryParams {
  search?: string;
  types?: string[];
  countries?: string[];
  brands?: string[];
  min_price?: number;
  max_price?: number;
}

export async function getItems({
                                 search = "",
                                 types = [],
                                 countries = [],
                                 brands = [],
                                 min_price,
                                 max_price
                               }: queryParams = {}): Promise<Item[]> {
  const params = new URLSearchParams();

  if (search) params.append("search", search);

  const addArrayParam = (key: string, values: string | string[]) => {
    if (Array.isArray(values) && values.length > 0) {
      params.append(key, values.join(","));
    } else if (typeof values === "string") {
      params.append(key, values);
    }
  };

  addArrayParam("types", types);
  addArrayParam("countries", countries);
  addArrayParam("brands", brands);

  if (min_price !== undefined) params.append("min_price", String(min_price));
  if (max_price !== undefined) params.append("max_price", String(max_price));

  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/items${params.toString() ? `?${params}` : ""}`;

  console.log("Fetching items from:", apiUrl);
  try {
    const res = await fetch(apiUrl, { cache: "no-cache" });
    const data = await res.json();
    return data.items as Item[];
  } catch (error) {
    console.error("Failed to fetch items:", error);
    throw error;
  }
}
