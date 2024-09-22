"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/components/loading/Loading";

interface SearchFieldProps {
  className?: string;
}

export default function SearchField({ className }: SearchFieldProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  /* Reset the state of the query after page switching */
  useEffect(() => {
    setQuery(searchParams.get("title") || "");
  }, [searchParams, pathname]);

  /* Trigger the search after 500ms of inactivity */
  useEffect(() => {
    if (query === searchParams.get("title")) return; // Prevent redundant requests

    const handler = setTimeout(() => {
      setLoading(false);
      router.push(query.trim() ? `/?title=${query}` : `/`);
    }, 500);

    setLoading(true);

    return () => {
      clearTimeout(handler);
      setLoading(false);
    };
  }, [query, router, searchParams]);

  const classes = classNames(
    "input input-bordered flex items-center gap-2 input-primary focus:ring-0",
    className
  );

  return (
    <>
      <label className={classes}>
        <input
          type="search"
          placeholder="Search items"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="grow"
        />
        {loading && <Loading />}
        {query && (
          <span className="cursor-pointer" onClick={() => setQuery("")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}
      </label>
    </>
  );
}
