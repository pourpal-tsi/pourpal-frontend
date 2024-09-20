"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading/Loading";

interface SearchFieldProps {
  className?: string;
}

export default function SearchField({ className }: SearchFieldProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const classes = classNames(
    "input input-bordered flex items-center gap-2 input-primary focus:ring-0",
    className,
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoading(false);
      if (query.trim()) router.push(`/?title=${query}`);
      else router.push(`/`);
    }, 500);

    setLoading(true);

    return () => {
      clearTimeout(handler);
      setLoading(false);
    };
  }, [query, router]);

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
