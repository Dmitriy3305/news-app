import ISource from "./source";

interface IArticle {
  title: string;
  author: string;
  content: string;
  description: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
  source: ISource;
}

export default IArticle;
