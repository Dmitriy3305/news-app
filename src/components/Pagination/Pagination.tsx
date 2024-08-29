import { PaginationProps } from '../../interfaces/IPaginationProps';
import { selectCurrentPage } from '../../store/slices/topNewsSlice';
import { useAppSelector } from '../../store/store';
import styles from './pagination.module.css';
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = useAppSelector(selectCurrentPage);

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
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
