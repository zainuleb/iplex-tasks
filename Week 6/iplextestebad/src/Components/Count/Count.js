import React from 'react';
import styles from './Count.module.css';

const Count = ({ count }) => {
  return (
    <div className={styles.countClass}>
      <h2>Count is</h2>
      {count}
    </div>
  );
};

export default Count;
