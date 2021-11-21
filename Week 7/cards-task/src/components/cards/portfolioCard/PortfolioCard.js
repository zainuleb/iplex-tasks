import React from 'react';
import styles from './PortfolioCard.module.css';

const PortfolioCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.border}>
          <h2>Liaqat Ali Khan</h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
