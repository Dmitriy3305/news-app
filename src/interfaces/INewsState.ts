import ISources from './ISources';

export interface INewsState {
  headlines: ISources[];
  loading: boolean;
  error: string;
  currentPage: number;
  totalPages: number;
}
