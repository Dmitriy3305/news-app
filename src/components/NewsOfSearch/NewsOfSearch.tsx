import styles from './newsOfSearch.module.css';
import { useAppSelector } from '../../store/store';
import {
  selectError,
  selectLoading,
  selectCurrentPage,
} from '../../store/slices/newsOfSearchSlice';
import Article from '../Article/Article';
import Title from '../Title/Title';
import { selectArticless } from '../../store/slices/newsOfSearchSlice';
import IArticle from '../../interfaces/IArticle';

const NewsOfSearch: React.FC = (): JSX.Element => {
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const newsOfSearch = useAppSelector(selectArticless) as IArticle[];
  const currentPage = useAppSelector(selectCurrentPage);
  const ITEMS_PER_PAGE = 5;

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = newsOfSearch.slice(startIndex, endIndex);

  return (
    <section className={styles['top-headlines']}>
      <Title
        title={'NEWS FROM SEARCH'}
        totalItems={newsOfSearch.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      {newsOfSearch.length > 0 ? (
        <ul>
          {currentArticles.map((sources: IArticle, index) => (
            <Article key={index} sources={sources} index={index} />
          ))}
        </ul>
      ) : (
        <p>No search results</p>
      )}
    </section>
  );
};

export default NewsOfSearch;
