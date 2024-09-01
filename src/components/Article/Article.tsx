import React from 'react';
import styles from './article.module.css';
import ISources from '../../interfaces/ISources';
import NewsLink from '../NewsLink/NewsLink';
import IArticle from '../../interfaces/IArticle';

const Article: React.FC<{ sources: ISources | IArticle; index: number }> = ({
  sources,
  index,
}): JSX.Element => {
  return (
    <li className={`${styles['article']} ${styles['slide-in']}`} key={index}>
      <NewsLink sources={sources} />
    </li>
  );
};

export default Article;
