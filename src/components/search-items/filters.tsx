import TypeComboBox from "@/components/form/type-combobox";
import CountryComboBox from "@/components/form/country-combobox";
import BrandComboBox from "@/components/form/brand-combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createQueryString } from "@/utils/createQueryString";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const filtersSchema = z
  .object({
    types: z.string().optional(),
    countries: z.string().optional(),
    brands: z.string().optional(),
    min_price: z
      .number({ message: "Field is empty" })
      .nonnegative("Min price must be positive"),
    max_price: z
      .number({ message: "Field is empty" })
      .nonnegative({ message: "Max price must be positive" }),
  })
  .refine((data) => data.min_price <= data.max_price, {
    message: "Min price must be less than or equal to max price",
    path: ["min_price"],
  });

type Filters = z.infer<typeof filtersSchema>;

const defaultFilters: Filters = {
  types: "",
  countries: "",
  brands: "",
  min_price: 0,
  max_price: 10000,
};

interface FiltersProps {
  setIsOpen: (isOpen: boolean) => void;
  filters: {
    types?: string;
    countries?: string;
    brands?: string;
    min_price?: number | string;
    max_price?: number | string;
    page_number?: number | string;
    page_size?: number | string;
    search?: string;
  };
}

export default function FilterItem({ setIsOpen, filters }: FiltersProps) {
  const form = useForm<Filters>({
    defaultValues: {
      ...defaultFilters,
      ...(Object.keys(filters).length > 0
        ? {
            types: filters.types ?? defaultFilters.types,
            countries: filters.countries ?? defaultFilters.countries,
            brands: filters.brands ?? defaultFilters.brands,
            min_price: Number(filters.min_price) || defaultFilters.min_price,
            max_price: Number(filters.max_price) || defaultFilters.max_price,
          }
        : {}),
    },
    resolver: zodResolver(filtersSchema),
  });

  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const handleForm = (values: Filters) => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.page_number;
    const url = `${pathname}?${createQueryString({ ...params, ...values })}`;
    router.push(url, { scroll: false });
    setIsOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleForm)}
        className="w-full space-y-4 pt-2"
        noValidate
      >
        {/* TYPE */}
        <FormField
          control={form.control}
          name="types"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div>Type</div>
              </FormLabel>
              <FormControl>
                <div className="flex min-h-[42px] flex-col [&_button]:grow">
                  <TypeComboBox
                    selectedItem={field.value}
                    onItemChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* COUNTRY */}
        <FormField
          control={form.control}
          name="countries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div>Country</div>
              </FormLabel>
              <FormControl>
                <div className="flex min-h-[42px] flex-col [&_button]:grow">
                  <CountryComboBox
                    selectedItem={field.value}
                    onItemChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* BRAND */}
        <FormField
          control={form.control}
          name="brands"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left">
                <div>Brand</div>
              </FormLabel>
              <FormControl>
                <div className="flex min-h-[42px] flex-col overflow-auto [&_button]:grow">
                  <BrandComboBox
                    selectedItem={field.value}
                    onItemChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PRICE */}
        <div className="grid grid-cols-2 gap-3">
          {/* MIN PRICE FIELD */}
          <FormField
            control={form.control}
            name="min_price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div>Min Price</div>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    className={`mt-2 py-5 ${form.formState?.errors?.min_price ? "border-red-500" : ""}`}
                    placeholder="Enter min price"
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MAX PRICE FIELD */}
          <FormField
            control={form.control}
            name="max_price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div>Max Price</div>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    className={`mt-2 py-5 ${form.formState?.errors?.max_price ? "border-red-500" : ""}`}
                    placeholder="Enter max price"
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* APPLY AND CLEAR BUTTONS */}
        <div className="grid grid-cols-2 gap-3">
          <Button type="submit">Apply</Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => form.reset(defaultFilters)}
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
}
