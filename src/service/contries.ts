interface ItemCountry {
  code: string;
  unicode: string;
  name: string;
  emoji: string;
}

export async function getItemCountries(): Promise<{ countries: ItemCountry[] }> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/items/countries`, {});

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    return data.countries;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    throw error;
  }
}
