import IArticle from './IArticle';

export interface INewsOfSearchState {
  articles: IArticle[];
  loading: boolean;
  error: string;
  currentPage: number;
  totalPages: number;
}
