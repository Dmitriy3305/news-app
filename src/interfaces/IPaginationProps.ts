export interface PaginationProps {
  title: string;
  setCurrentPage: (title: string, page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}
