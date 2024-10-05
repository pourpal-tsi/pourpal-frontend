import { useQuery } from "@tanstack/react-query";
import {ComboBox, ComboBoxProps} from "@/components/ui/combobox";
import {getCountries} from "@/services/countries";

export type CountryComboBoxProps = Omit<ComboBoxProps, "items" | "loading" | "disabled">

export default function CountryComboBox(props: CountryComboBoxProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const items =
    data?.map(({ code, name, emoji }) => ({
      value: code,
      label: `${emoji} ${name}`,
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
