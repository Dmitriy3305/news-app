import React from 'react';
import styles from './news.module.css';
import TopHeadlines from '../TopHeadLines/TopHeadlines';
import NewsFromSearch from '../NewsFromSearch/NewsOfSearch';

const News: React.FC = (): JSX.Element => {
  return (
    <div className={styles['news-container']}>
      <TopHeadlines />
      <NewsFromSearch />
    </div>
  );
};
export default News;
