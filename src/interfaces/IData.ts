import IArticle from './IArticle';
import ISources from './ISources';

interface IData {
  articles: Array<IArticle>;
  status: string;
  totalResults: number;
  sources: Array<ISources>;
}

export default IData;
