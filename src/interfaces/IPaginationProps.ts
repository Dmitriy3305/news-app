export interface PaginationProps {
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}
