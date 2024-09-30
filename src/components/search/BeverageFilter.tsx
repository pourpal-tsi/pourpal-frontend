"use client";
import RangeSlider from "@/components/search/filters/RangeSlider";
import { useState } from "react";
import SelectInput from "@/components/search/filters/SelectInput";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ItemBrand } from "@/service/brands";
import { ItemCountry } from "@/service/contries";
import { ItemType } from "@/service/types";

interface BeverageFilterProps {
  className?: string;
  brands: ItemBrand[];
  countries: ItemCountry[];
  types: ItemType[];
}

interface BeverageFilterState {
  beverageType: string;
  brand: string;
  country: string;
  min_price: number;
  max_price: number;
}

const defaultFilters: BeverageFilterState = {
  beverageType: "",
  brand: "",
  country: "",
  min_price: 0,
  max_price: 1000
};

export default function BeverageFilter({ brands, countries, types, className = "" }: BeverageFilterProps) {
  const [filters, setFilters] = useState(defaultFilters);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { beverageType, brandId, countryCode, min_price, max_price } = filters;

  const onApply = () => {
    const params = new URLSearchParams(searchParams.toString());


    updateSearchParams(params, "types", beverageType);
    updateSearchParams(params, "brands", brandId);
    updateSearchParams(params, "countries", countryCode);
    updateSearchParams(params, "min_price", min_price);
    updateSearchParams(params, "max_price", max_price);

    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  const handleClear = () => setFilters(defaultFilters);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const classes = classNames("flex flex-col gap-4", className);

  return (
    <div className={classes}>
      <h3 className="heading-3">Filters</h3>
      <SelectInput
        label="Beverage Type"
        options={types}
        value={beverageType}
        onChange={(value) => handleFilterChange("beverageType", value)}
      />
      <SelectInput
        label="Brand"
        options={brands}
        value={brandId}
        onChange={(value) => handleFilterChange("brandId", value)}
      />
      <SelectInput
        label="Country"
        options={countries}
        value={countryCode}
        onChange={(value) => handleFilterChange("countryCode", value)}
      />
      <RangeSlider
        title="Eur"
        value={[min_price, max_price]}
        min={0}
        max={1000}
        step={10}
        onChange={(value) => {
          handleFilterChange("min_price", value[0]);
          handleFilterChange("max_price", value[1]);
        }}
      />
      <div className="flex justify-end gap-2">
        <button onClick={handleClear} className="btn btn-ghost">Clear</button>
        <button onClick={onApply} className="btn btn-active btn-primary">Apply</button>
      </div>
    </div>
  );
}