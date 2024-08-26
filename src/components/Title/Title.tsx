import React from 'react';
import styles from './title.module.css';
import Pagination from '../Pagination/Pagination';
import { useAppDispatch } from '../../store/store';
import { setCurrentPage } from '../../store/slices/newsSlice';

interface TitleProps {
  title: string;
  totalItems: number;
  itemsPerPage: number;
}

const Title: React.FC<TitleProps> = ({
  title,
  totalItems,
  itemsPerPage,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <h2 className={styles['title']}>
      {title}
      <Pagination
        setCurrentPage={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </h2>
  );
};

export default Title;
