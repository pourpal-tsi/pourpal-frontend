import { useQuery } from "@tanstack/react-query";
import { getItemBrands } from "@/services/item-brands";
import { ComboBox, ComboBoxProps } from "@/components/ui/combobox";

export type BrandComboBoxProps = Omit<
  ComboBoxProps,
  "items" | "loading" | "disabled"
>;

export default function BrandComboBox(props: BrandComboBoxProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getItemBrands,
  });

  const items =
    data?.map(({ brand_id, brand }) => ({
      value: brand_id,
      label: brand,
    })) ?? [];

  return (
    <ComboBox
      {...props}
      items={items}
      loading={isLoading}
      disabled={items.length == 0}
    />
  );
}
