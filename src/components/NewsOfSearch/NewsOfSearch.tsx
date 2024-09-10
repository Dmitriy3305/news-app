import { useAppSelector } from '@/store/store';
import styles from './newsOfSearch.module.css';
import { selectError, selectLoading } from '@/store/slices/topNewsSlice';
import {
  selectArticless,
  selectCurrentPageNewsOfSearch,
} from '@/store/slices/newsOfSearchSlice';
import { getCurrentArticles } from '@/utils/getCurrentArticles';
import IArticle from '@/interfaces/IArticle';
import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import { ITEMS_PER_PAGE } from '@/const/itemsPerPage';
import Article from '../Article/Article';

const NewsOfSearch: React.FC = (): JSX.Element => {
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const newsOfSearch = useAppSelector(selectArticless) as IArticle[];
  const currentPage = useAppSelector(selectCurrentPageNewsOfSearch);
  const currentArticles = getCurrentArticles(
    currentPage,
    newsOfSearch
  ) as IArticle[];

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

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
