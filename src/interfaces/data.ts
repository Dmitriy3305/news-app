import IArticle from "./article";
import ISources from "./sources";

interface IData {
  articles: Array<IArticle>;
  status: string;
  totalResults: number;
  sources: Array<ISources>;
}

export default IData;
