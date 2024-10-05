export const groupBy = <T extends Record<string, never>>(
  array: T[],
  key: keyof T,
): Record<string, T[]> => {
  return array.reduce((acc: Record<string, T[]>, item: T) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);
    return acc;
  }, {});
};
