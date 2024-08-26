import React from 'react';
import styles from './search.module.css';
import IconSearch from '../IconSearch/IconSearch';

const Search: React.FC = (): JSX.Element => {
  return (
    <>
      <input className={styles['search']} type="text" />
      <IconSearch />
    </>
  );
};

export default Search;
