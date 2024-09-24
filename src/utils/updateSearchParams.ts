export const updateSearchParams = (
  params: URLSearchParams,
  key: string,
  value: string | string[] | number[],
  defaultValue: string | string[] | number[] | null = null
): void => {
  if (Array.isArray(value)) {
    const isEqualArrays =
      Array.isArray(defaultValue) &&
      value.length === defaultValue.length &&
      value.every((v, i) => v === defaultValue[i]);

    // Если массив не равен значению по умолчанию
    if (!isEqualArrays) {
      // Удаляем старые значения по ключу
      params.delete(key);
      // Добавляем все новые значения
      value.forEach(val => {
        params.append(key, String(val)); // Приводим к строке
      });
    } else {
      params.delete(key);
    }
  } else {
    if (value && value !== defaultValue) {
      params.set(key, String(value)); // Приводим к строке
    } else {
      params.delete(key);
    }
  }
};
