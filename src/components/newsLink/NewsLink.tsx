import React from 'react';
import styles from './newsLink.module.css';
import ISources from '../../interfaces/ISources';
import IArticle from '../../interfaces/IArticle';

const isArticle = (source: ISources | IArticle): source is IArticle => {
  return (source as IArticle).description !== undefined;
};

const NewsLink: React.FC<{ sources: ISources | IArticle }> = ({
  sources,
}): JSX.Element => {
  return (
    <a
      href={sources.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['article-link']}
    >
      <p className={styles['description']}>
        {isArticle(sources) ? sources.description : 'No description available'}
      </p>
      <p className={styles['name']}>
        {isArticle(sources) ? sources.author : sources.name}
      </p>
    </a>
  );
};

export default NewsLink;
