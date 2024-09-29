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

    if (!isEqualArrays) {
      params.delete(key);
      value.forEach(val => {
        params.append(key, String(val));
      });
    } else {
      params.delete(key);
    }
  } else {
    if (value && value !== defaultValue) {
      params.set(key, String(value));
    } else {
      params.delete(key);
    }
  }
};
