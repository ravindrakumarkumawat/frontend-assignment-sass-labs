import { useState, useMemo } from 'react';
import { ITEMS_PER_PAGE } from '../constants/config';

export function usePagination<T>(items: T[] = []) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => 
    Math.max(1, Math.ceil((items?.length || 0) / ITEMS_PER_PAGE)),
    [items]
  );

  const paginatedItems = useMemo(() => {
    if (!items?.length) return [];
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange
  };
}