import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from '../sass/Pagination.module.scss';

function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) {
  const paginationRange = useMemo(() => {
    const length = Math.ceil(totalCount / pageSize);
    return Array.from({ length }, (_, i) => i + 1);
  }, [totalCount, pageSize]);

  return (
    <div className={styles.paginationContainer}>
      {paginationRange.map((item) => (
        <div
          key={item}
          className={item === currentPage ? styles.selectedDotIcon : styles.dotIcon}
          onClick={() => {
            onPageChange(item);
          }}
          role="presentation"
        />
      ))}
    </div>
  );
}

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
