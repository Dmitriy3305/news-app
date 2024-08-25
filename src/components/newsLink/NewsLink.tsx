import React from 'react';
import styles from './newsLink.module.css';
import ISources from '../../interfaces/ISources';

const NewsLink: React.FC<{ sources: ISources }> = ({
  sources,
}): JSX.Element => {
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
};

export default NewsLink;
