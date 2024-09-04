import React from 'react';
import styles from './newsLink.module.css';
import ISources from '../../interfaces/ISources';
import IArticle from '../../interfaces/IArticle';

const isArticle = (source: ISources | IArticle): source is IArticle => {
  return (source as IArticle).title !== undefined;
};

const NewsLink: React.FC<{ sources: ISources | IArticle }> = ({
  sources,
}): JSX.Element => {
  if (isArticle(sources)) {
    return (
      <a
        href={sources.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['article-link']}
      >
        <p className={styles['description']}>{sources.description}</p>
        <p className={styles['name']}>{sources.author}</p>
      </a>
    );
  } else {
    return (
      <a
        href={sources.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['article-link']}
      >
        <p className={styles['description']}>{sources.description}</p>
        <p className={styles['name']}>{sources.name}</p>
      </a>
    );
  }
};

export default NewsLink;
