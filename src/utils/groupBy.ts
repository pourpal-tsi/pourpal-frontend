export const groupBy = <T extends Record<string, unknown>>(array: T[], key: keyof T): Record<string, T[]> => {
    return array.reduce((acc: Record<string, T[]>, item: T) => {
        const groupKey = item[key] as string;

        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }

        acc[groupKey].push(item);
        return acc;
    }, {});
};