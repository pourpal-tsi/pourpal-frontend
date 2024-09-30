export interface ItemBrand {
  brand_id: string;
  brand: string;
}

export async function getItemBrands(): Promise<ItemBrand[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/items/brands`, {});

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    return data.brands;
  } catch (error) {
    console.error("Failed to fetch item brands:", error);
    throw error;
  }
}
