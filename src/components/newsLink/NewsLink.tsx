import React from 'react';
import styles from './newsLink.module.css';
import ISources from '@/interfaces/ISources';
import IArticle from '@/interfaces/IArticle';
import { isArticle } from '@/utils/isArticle';
import { formattedDate } from '@/utils/formattedDate';

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
        <p className={styles['description']}>{sources.title}</p>
        <div className={styles['name-date']}>
          <p className={styles['name']}>{sources.source.name}</p>
          <p className={styles['date']}>{formattedDate(sources.publishedAt)}</p>
        </div>
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
