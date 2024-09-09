import { sortArticles } from '../../store/slices/newsOfSearchSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './sortIcon.module.css';

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
      <div className={styles['sort-text']}>Sort:</div>
      {isAscendingSort ? (
        <div className={styles['sort-text']}> new ones first </div>
      ) : (
        <div className={styles['sort-text']}> old ones first </div>
      )}
    </div>
  );
};

export default SortIcon;
