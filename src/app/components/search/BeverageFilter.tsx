"use client";
import classNames from "classnames";
import RangeSlider from "@/app/components/range-slider/RangeSlider";
import { useState } from "react";

interface BeverageFilterProps {
  className?: string;
}

export default function BeverageFilter({ className = "" }: BeverageFilterProps) {
  const [beverageType, setBeverageType] = useState("");
  const [brand, setBrand] = useState("");
  const [country, setCountry] = useState("");

  const classes = classNames(
    "flex flex-col gap-4",
    className
  );

  return (
    <div className={classes}>
      <h3 className="heading-3">Filters</h3>
      <label htmlFor="type" className="flex flex-col">
        <span className="font-semibold">Beverage Type</span>
        <select
          id="type"
          name="type"
          className="select select-bordered mt-1 p-2"
          value={beverageType}
          onChange={(e) => setBeverageType(e.target.value)}
        >
          <option value="" disabled>Choose the type</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="whiskey">Whiskey</option>
          <option value="vodka">Vodka</option>
          <option value="gin">Gin</option>
        </select>
      </label>
      <label htmlFor="brand" className="flex flex-col">
        <span className="font-semibold">Brand</span>
        <select
          className="select select-bordered mt-1 p-2"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>Choose the brand</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </label>
      <label htmlFor="country" className="flex flex-col font-semibold">
        <span className="font-semibold">Country of Origin</span>
        <select
          className="select select-bordered mt-1 p-2"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" disabled>Choose the country</option>
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
        </select>
      </label>
      <label htmlFor="price" className="flex flex-col">
        <RangeSlider />
      </label>
    </div>
  );
}
