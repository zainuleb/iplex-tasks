import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, handleChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        placeholder={placeholder}
        type="search"
        onChange={handleChange}
        className={styles.button}
      />
    </div>
  );
};

export default Input;
