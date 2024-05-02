import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function MyPagination({
  max,
  currentPage,
}: {
  max: number;
  currentPage: number | undefined;
}) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const query = params.get("search") ? `search=${params.get("search")}&` : "";
  return (
    <Pagination>
      <PaginationContent>
        {currentPage && currentPage > 1 && (
          <PaginationItem>
            <Link href={currentPage ? `?${query}page=${currentPage - 1}` : "/"}>
              Previous
            </Link>
          </PaginationItem>
        )}
        <PaginationItem>
          <Link href={`?${query}page=1`}>1</Link>
        </PaginationItem>
        {max >= 2 && (
          <PaginationItem>
            <Link
              href={
                currentPage && currentPage > 2
                  ? `?${query}page=${currentPage}`
                  : `?${query}page=2`
              }
            >
              {currentPage && currentPage > 2 ? currentPage : 2}
            </Link>
          </PaginationItem>
        )}
        {max >= 3 && (
          <PaginationItem>
            <Link
              href={
                currentPage && currentPage > 2
                  ? `?${query}page=${Number(currentPage) + 1}`
                  : `?${query}page=3`
              }
            >
              {currentPage && currentPage > 2 ? Number(currentPage) + 1 : 3}
            </Link>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Link href={`?${query}page=${max}`}>{max}</Link>
        </PaginationItem>
        {!(currentPage && currentPage >= max) && (
          <PaginationItem>
            <Link
              href={
                currentPage
                  ? `?${query}page=${Number(currentPage) + 1}`
                  : `?${query}page=2`
              }
            >
              Next
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
