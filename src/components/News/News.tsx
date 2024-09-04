import React from 'react';
import styles from './news.module.css';
import TopHeadlines from '../TopHeadLines/TopHeadlines';
import NewsOfSearch from '../NewsOfSearch/NewsOfSearch';

const News: React.FC = (): JSX.Element => {
  return (
    <div className={styles['news-container']}>
      <TopHeadlines />
      <NewsOfSearch />
    </div>
  );
};
export default News;
