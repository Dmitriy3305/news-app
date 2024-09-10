import { PaginationProps } from '@/interfaces/IPaginationProps';
import styles from './pagination.module.css';
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';
import { useAppSelector } from '@/store/store';
import { selectCurrentPageTopNews } from '@/store/slices/topNewsSlice';
import { selectCurrentPageNewsOfSearch } from '@/store/slices/newsOfSearchSlice';

const Pagination: React.FC<PaginationProps> = ({
  title,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPageTopNews = useAppSelector(selectCurrentPageTopNews);
  const currentPageNewsOfSearch = useAppSelector(selectCurrentPageNewsOfSearch);

  const currentPage =
    title === 'TOP HEADLINES' ? currentPageTopNews : currentPageNewsOfSearch;

  const handleNextPage = () => {
    setCurrentPage(title, Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(title, Math.max(currentPage - 1, 1));
  };

  return (
    <div className={styles['pagination']}>
      <button
        className={styles['btn']}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <GoArrowLeft className={styles['arrow']} />
      </button>
      <span className={styles['pages']}>
        {currentPage} of {totalPages}
      </span>
      <button
        className={styles['btn']}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <GoArrowRight className={styles['arrow']} />
      </button>
    </div>
  );
};

export default Pagination;
