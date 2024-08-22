import ISources from '../../interfaces/ISources';
import styles from './topHeadlines.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectError,
  selectHeadlines,
  selectLoading,
} from '../../store/slices/newsSlice';
import { useEffect } from 'react';
import { fetchNews } from '../../api/fetchNews';

const TopHeadlines: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const topHeadlines = useAppSelector(selectHeadlines);

  useEffect(() => {
    dispatch(fetchNews({ dispatch: dispatch, activeMenu: null, item: null }));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles['top-headlines']}>
      <h2 className={styles['title']}>TOP HEADLINES</h2>
      {topHeadlines.length > 0 ? (
        <ul>
          {topHeadlines.slice(0, 5).map((sources: ISources, index) => (
            <li className={styles['article']} key={index}>
              <a
                href={sources.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['article-link']}
              >
                <p className={styles['description']}>{sources.description}</p>
                <p className={styles['name']}>{sources.name}</p>
              </a>
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
