import backend from "@/lib/client-config";
import type { ItemSchema } from "@/schemes/items";

export interface Item {
  id: string;
  sku: string;
  title: string;
  type_id: string;
  type_name: string;
  brand_id: string;
  brand_name: string;
  price: string;
  currency: string;
  origin_country_code: string;
  origin_country_name: string;
  volume: string;
  volume_unit: "ml" | "cl" | "dl" | "l";
  alcohol_volume: string;
  quantity: number;
  description: string;
  image_url: string;
}

export interface PagingResponse {
  count: number;
  page_size: number;
  page_number: number;
  total_count: number;
  total_pages: number;
  first_page: boolean;
  last_page: boolean;
}

interface ItemsResponse {
  items: ItemResponse[];
  paging: PagingResponse;
}

interface ItemResponse {
  item_id: string;
  title: string;
  sku: string;
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
    unit: "ml" | "cl" | "dl" | "l";
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

export interface GetItemsQueryParams {
  search?: string;
  page_size?: number;
  page_number?: number;
}

export async function getItems(props: GetItemsQueryParams = {}) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(props)) {
    if (value) searchParams.set(key, value);
  }

  const result = (await backend.get(`/items?${searchParams}`)) as ItemsResponse;
  return {
    items: result.items.map(convert),
    paging: result.paging,
  };
}

export async function createItem(item: ItemSchema) {
  await backend.post("/items", { json: { ...item, id: undefined } });
}

export async function updateItem(item: ItemSchema) {
  await backend.put(`/item/${item.id}`, { json: { ...item, id: undefined } });
}

export async function deleteItem(id: string) {
  await backend.delete(`/item/${id}`);
}

function convert(response: ItemResponse): Item {
  return {
    id: response.item_id,
    sku: response.sku,
    title: response.title,
    type_id: response.type_id,
    type_name: response.type_name,
    brand_id: response.brand_id,
    brand_name: response.brand_name,
    price: response.price.amount.$numberDecimal,
    currency: response.price.currency,
    origin_country_code: response.origin_country_code,
    origin_country_name: response.origin_country_name,
    volume: response.volume.amount.$numberDecimal,
    volume_unit: response.volume.unit,
    alcohol_volume: response.alcohol_volume.amount.$numberDecimal,
    quantity: response.quantity,
    description: response.description,
    image_url: response.image_url,
  };
}
