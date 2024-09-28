interface ItemType {
  type_id: string;
  type: string;
}

export async function getItemTypes(): Promise<{ types: ItemType[] }> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/items/types`);

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    return data.types;
  } catch (error) {
    console.error("Failed to fetch item types:", error);
    throw error;
  }
}
