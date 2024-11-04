import { ITEMS_PER_PAGE } from '../const/itemsPerPage';
import IArticle from '../interfaces/IArticle';
import ISources from '../interfaces/ISources';

export const getCurrentArticles = (
  currentPage: number,
  news: IArticle[] | ISources[]
) => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return news.slice(startIndex, endIndex);
};
