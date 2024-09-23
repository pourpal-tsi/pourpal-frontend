import classNames from "classnames";

interface BeverageFilterProps {
  className?: string;
}

export default function BeverageFilter({ className }: BeverageFilterProps) {

  const classes = classNames(
    "",
    className
  )

  return (
    <div className={classes}>
      <h2 className="text-3xl font-bold">Filters</h2>
      <label htmlFor="type" className="flex flex-col">
        Beverage Type
        <select id="type" name="type" className="mt-1 p-2 border rounded">
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="whiskey">Whiskey</option>
          <option value="vodka">Vodka</option>
          <option value="gin">Gin</option>
        </select>
      </label>
      <label htmlFor="price" className="flex flex-col">
        Price Range
        <input type="range" id="price" name="price" className="mt-1" />
      </label>
      <label htmlFor="brand" className="flex flex-col">
        Brand
        <select id="brand" name="brand" className="mt-1 p-2 border rounded">
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </label>
      <label htmlFor="country" className="flex flex-col">
        Country of Origin
        <select id="country" name="country" className="mt-1 p-2 border rounded">
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
        </select>
      </label>
    </div>
  );
}