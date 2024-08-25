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
import Article from '../Article/Article';
import Title from '../Title/Title';

const TopHeadlines: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const topHeadlines = useAppSelector(selectHeadlines).slice(0, 5);
  const [previousHeadlines, setPreviousHeadlines] = useState<ISources[]>([]);

  useEffect(() => {
    dispatch(fetchNews({ dispatch: dispatch, activeMenu: null, item: null }));
  }, [dispatch]);

  useEffect(() => {
    setPreviousHeadlines(topHeadlines);
  }, [topHeadlines]);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles['top-headlines']}>
      <Title title={'TOP HEADLINES'} />
      {topHeadlines.length > 0 ? (
        <ul>
          {topHeadlines.map((sources: ISources, index) => (
            <Article sources={sources} index={index} />
          ))}
          {previousHeadlines.length > 0 &&
            previousHeadlines.map((sources: ISources, index) => (
              <Article sources={sources} index={index} />
            ))}
        </ul>
      ) : (
        <p>No headlines available</p>
      )}
    </section>
  );
};

export default TopHeadlines;
