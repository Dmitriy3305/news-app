import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './topHeadlines.module.css';
import {
  selectCurrentPageTopNews,
  selectError,
  selectHeadlines,
  selectLoading,
} from '@/store/slices/topNewsSlice';
import { getCurrentArticles } from '@/utils/getCurrentArticles';
import ISources from '@/interfaces/ISources';
import { useEffect } from 'react';
import { fetchTopNews } from '@/api/fetchTopNews';
import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import { ITEMS_PER_PAGE } from '@/const/itemsPerPage';
import Article from '../Article/Article';

const TopHeadlines: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const topHeadlines = useAppSelector(selectHeadlines);
  const currentPage = useAppSelector(selectCurrentPageTopNews);
  const currentArticles = getCurrentArticles(
    currentPage,
    topHeadlines
  ) as ISources[];

  useEffect(() => {
    dispatch(
      fetchTopNews({ dispatch: dispatch, activeMenu: null, item: null })
    );
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

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
            <Article key={sources.id} sources={sources} index={index} />
          ))}
        </ul>
      ) : (
        <p>No headlines available</p>
      )}
    </section>
  );
};

export default TopHeadlines;
