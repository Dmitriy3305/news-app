import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './sortIcon.module.css';
import { sortArticles } from '@/store/slices/newsOfSearchSlice';
import { BiSortAlt2 } from 'react-icons/bi';

const SortIcon: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAscendingSort = useAppSelector(
    (state) => state.newsOfSearch.isAscendingSort
  );
  const articlesLength = useAppSelector(
    (state) => state.newsOfSearch.articles.length
  );

  const handleSortClick = () => {
    if (articlesLength > 0) {
      dispatch(sortArticles());
    }
  };

  return (
    <div
      className={`${styles['sort-icon']} ${articlesLength > 0 ? '' : styles['disabled']}`}
      onClick={handleSortClick}
    >
      <div className={styles['sort']}></div>
      {isAscendingSort ? (
        <BiSortAlt2 className={styles['sort-up-down']} />
      ) : (
        <BiSortAlt2 className={styles['sort-down-up']} />
      )}
    </div>
  );
};

export default SortIcon;
