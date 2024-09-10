import React from 'react';
import styles from './title.module.css';
import { ITitleProps } from '@/interfaces/ITitleProps';
import { useAppDispatch } from '@/store/store';
import { setCurrentPageTopNews } from '@/store/slices/topNewsSlice';
import { setCurrentPageNewsOfSearch } from '@/store/slices/newsOfSearchSlice';
import SortIcon from '../SortIcon/SortIcon';
import Pagination from '../Pagination/Pagination';

const Title: React.FC<ITitleProps> = ({
  title,
  totalItems,
  itemsPerPage,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const handlePageChange = (title: string, newPage: number) => {
    title === 'TOP HEADLINES'
      ? dispatch(setCurrentPageTopNews(newPage))
      : dispatch(setCurrentPageNewsOfSearch(newPage));
  };

  return (
    <h2 className={styles['title']}>
      {title}
      {title != 'TOP HEADLINES' && <SortIcon />}
      <Pagination
        title={title}
        setCurrentPage={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </h2>
  );
};

export default Title;
