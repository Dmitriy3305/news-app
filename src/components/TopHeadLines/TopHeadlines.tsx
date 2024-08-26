import ISources from '../../interfaces/ISources';
import styles from './topHeadlines.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectError,
  selectHeadlines,
  selectLoading,
  selectCurrentPage,
} from '../../store/slices/newsSlice';
import { useEffect } from 'react';
import { fetchNews } from '../../api/fetchNews';
import Article from '../Article/Article';
import Title from '../Title/Title';

const TopHeadlines: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const topHeadlines = useAppSelector(selectHeadlines);
  const currentPage = useAppSelector(selectCurrentPage);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    dispatch(fetchNews({ dispatch: dispatch, activeMenu: null, item: null }));
  }, [dispatch]);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = topHeadlines.slice(startIndex, endIndex);

  return (
    <section className={styles['top-headlines']}>
      <Title
        title={'TOP HEADLINES'}
        totalItems={topHeadlines.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      {topHeadlines.length > 0 ? (
        <ul>
          {currentArticles.map((sources: ISources, index) => (
            <Article key={index} sources={sources} index={index} />
          ))}
        </ul>
      ) : (
        <p>No headlines available</p>
      )}
    </section>
  );
};

export default TopHeadlines;
