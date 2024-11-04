import React from 'react';
import styles from './loader.module.css';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className={styles['loader-container']}>
      <div className={styles['loader']}></div>
    </div>
  );
};

export default Loader;
