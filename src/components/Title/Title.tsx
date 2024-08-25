import React from 'react';
import styles from './title.module.css';

const Title: React.FC<{ title: string }> = (title): JSX.Element => {
  return <h2 className={styles['title']}>{title.title}</h2>;
};

export default Title;
