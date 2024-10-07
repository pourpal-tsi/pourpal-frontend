"use client";

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

interface PagingProps {
  count: number;
  page_size: number;
  page_number: number;
  total_count: number;
  total_pages: number;
  first_page: boolean;
  last_page: boolean;
}

export default function Pagination({ paging }: { paging: PagingProps }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageLink = (page_number: number) => {
    const params = Object.fromEntries(searchParams.entries());
    if (page_number === 1) {
      delete params.page_number;
    } else {
      params.page_number = String(page_number);
    }
    return `${pathname}?${new URLSearchParams(params).toString()}`;
  };

  return (
    <>
      <PaginationContent>
        <PaginationPrevious
          className={`${paging.first_page ? "pointer-events-none text-muted-foreground" : ""}`}
          href={createPageLink(paging.page_number - 1)}
        />
        {paging.page_number > 1 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(1)}>1</PaginationLink>
          </PaginationItem>
        )}
        {paging.page_number > 2 && <PaginationEllipsis />}
        {paging.page_number > 2 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(paging.page_number - 1)}>
              {paging.page_number - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            className="pointer-events-none bg-primary text-secondary"
            isActive
          >
            {paging.page_number}
          </PaginationLink>
        </PaginationItem>
        {paging.page_number < paging.total_pages - 1 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(paging.page_number + 1)}>
              {paging.page_number + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {paging.page_number < paging.total_pages - 2 && <PaginationEllipsis />}
        {paging.page_number < paging.total_pages && (
          <PaginationItem>
            <PaginationLink href={createPageLink(paging.total_pages)}>
              {paging.total_pages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationNext
          className={`${paging.last_page || paging.total_pages === 0 ? "pointer-events-none text-muted-foreground" : ""}`}
          href={createPageLink(paging.page_number + 1)}
        />
      </PaginationContent>
    </>
  );
}
