import styles from './topHeadlines.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectError,
  selectHeadlines,
  selectLoading,
} from '../../store/slices/newsSlice';
import { useEffect } from 'react';
import { fetchNews } from '../../api/fetchNews';
import SwiperComponent from '../Swiper/swiperComponent/swiperComponent';
import ISources from '../../interfaces/ISources';

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
        <SwiperComponent
          items={topHeadlines}
          onItemClick={(item) => window.open((item as ISources).url, '_blank')}
        />
      ) : (
        <p>No headlines available</p>
      )}
    </section>
  );
};

export default TopHeadlines;
