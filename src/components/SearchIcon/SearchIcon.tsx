import React from 'react';
import styles from './searchIcon.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectInputValue } from '@/store/slices/inputValue';
import { fetchNewsFromSearh } from '@/api/fetchNewsFromSearch';

const SearchIcon: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(selectInputValue);

  const handleClickIconSearch = () => {
    if (inputValue.trim() !== '') {
      dispatch(fetchNewsFromSearh({ dispatch, inputValue }));
    }
  };

  return (
    <svg
      className={styles['search-icon']}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={handleClickIconSearch}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1062 18.6618C15.302 20.124 13.0033 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 13.0033 20.124 15.3019 18.6618 17.1062L24 22.4443L22.4444 24L17.1062 18.6618ZM19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z"
        fill="rgb(26, 115, 232)"
      ></path>
    </svg>
  );
};

export default SearchIcon;
