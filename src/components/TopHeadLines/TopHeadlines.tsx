import ISources from '../../interfaces/ISources';
import styles from './topHeadlines.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectError,
  selectHeadlines,
  selectLoading,
} from '../../store/slices/newsSlice';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../api/fetchNews';
import NewsLink from '../newsLink/NewsLink';

const TopHeadlines: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const topHeadlines = useAppSelector(selectHeadlines);
  const [previousHeadlines, setPreviousHeadlines] = useState<ISources[]>([]);

  useEffect(() => {
    dispatch(fetchNews({ dispatch: dispatch, activeMenu: null, item: null }));
  }, [dispatch]);

  useEffect(() => {
    setPreviousHeadlines(topHeadlines.slice(0, 5));
  }, [topHeadlines]);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles['top-headlines']}>
      <h2 className={styles['title']}>TOP HEADLINES</h2>
      {topHeadlines.length > 0 ? (
        <ul>
          {topHeadlines.slice(0, 5).map((sources: ISources, index) => (
            <li
              className={`${styles['article']} ${styles['slide-in']}`}
              key={index}
            >
              <NewsLink sources={sources} />
            </li>
          ))}
          {previousHeadlines.length > 0 &&
            previousHeadlines.map((sources: ISources, index) => (
              <li
                className={`${styles['article']} ${styles['slide-out']}`}
                key={index + 10}
              >
                <NewsLink sources={sources} />
              </li>
            ))}
        </ul>
      ) : (
        <p>No headlines available</p>
      )}
    </section>
  );
};

export default TopHeadlines;
