import ISources from './ISources';

export interface ITopNewsState {
  headlines: ISources[];
  loading: boolean;
  error: string;
  currentPage: number;
  totalPages: number;
}
