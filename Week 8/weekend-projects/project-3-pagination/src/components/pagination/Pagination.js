import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({ newsPerPage, totalNews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((num) => (
          <li key={num}>
            <Link to="!#" onClick={() => paginate(num)}>
              {num}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
