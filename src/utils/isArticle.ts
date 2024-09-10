import IArticle from '../interfaces/IArticle';
import ISources from '../interfaces/ISources';

export const isArticle = (source: ISources | IArticle): source is IArticle => {
  return (source as IArticle).title !== undefined;
};
