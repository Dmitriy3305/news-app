import React, { useState } from 'react';
import styles from './search.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectInputValue, setInputValue } from '@/store/slices/inputValue';
import InfoIcon from '../InfoIcon/InfoIcon';
import SearchIcon from '../SearchIcon/SearchIcon';
import Popup from '../Popup/Popup';

const Search: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(selectInputValue);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleInfoClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <InfoIcon handleInfoClick={handleInfoClick} />
      <input
        className={styles['search']}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <SearchIcon />
      {isPopupVisible && <Popup handleInfoClick={handleInfoClick} />}
    </>
  );
};

export default Search;
