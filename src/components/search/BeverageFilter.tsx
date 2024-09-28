"use client";
import RangeSlider from "@/components/search/filters/RangeSlider";
import { useState } from "react";
import SelectInput from "@/components/search/filters/SelectInput";
import { beverageOptions, brandOptions, countryOptions } from "@/components/search/filters/filters";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils/updateSearchParams";

interface BeverageFilterProps {
  className?: string;
}

export default function BeverageFilter({ className = "" }: BeverageFilterProps) {
  const [filters, setFilters] = useState({
    beverageType: "",
    brand: "",
    country: "",
    priceRange: [0, 1000]
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { beverageType, brand, country, priceRange } = filters;

  const onApply = () => {
    const params = new URLSearchParams(searchParams.toString());

    updateSearchParams(params, "beverageType", beverageType);
    updateSearchParams(params, "brand", brand);
    updateSearchParams(params, "country", country);
    updateSearchParams(params, "priceRange", priceRange, [0, 1000]);
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  const handleClear = () => {
    setFilters({
      beverageType: "",
      brand: "",
      country: "",
      priceRange: [0, 1000]
    });
  };

  const handleFilterChange = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

  const classes = classNames("flex flex-col gap-4", className);

  return (
    <div className={classes}>
      <h3 className="heading-3">Filters</h3>
      <SelectInput label="Beverage Type" options={beverageOptions} value={beverageType}
                   onChange={(value) => handleFilterChange("beverageType", value)} />
      <SelectInput label="Brand" options={brandOptions} value={brand}
                   onChange={(value) => handleFilterChange("brand", value)} />
      <SelectInput label="Country" options={countryOptions} value={country}
                   onChange={(value) => handleFilterChange("country", value)} />
      <RangeSlider title="Eur" value={priceRange} min={0} max={1000} step={10}
                   onChange={(value) => handleFilterChange("priceRange", value)} />
      <div className="flex justify-end gap-2">
        <button onClick={handleClear} className="btn btn-ghost">Clear</button>
        <button onClick={onApply} className="btn btn-active btn-primary">Apply</button>
      </div>
    </div>
  );
}
