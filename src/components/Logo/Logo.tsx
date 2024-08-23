import React from 'react';
import styles from './logo.module.css';

const Logo: React.FC = (): JSX.Element => {
  return (
    <h1 className={styles['logo']}>
      <span className={styles['news']}>NEWS</span>
      <span className={styles['app']}>APP</span>
    </h1>
  );
};

export default Logo;
