import React from 'react';
import styles from './search.module.css';
import IconSearch from '../IconSearch/IconSearch';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectInputValue, setInputValue } from '../../store/slices/inputValue';
import InfoIcon from '../Info/InfoIcon';

const Search: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(selectInputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  return (
    <>
      <InfoIcon />
      <input
        className={styles['search']}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <IconSearch />
    </>
  );
};

export default Search;
