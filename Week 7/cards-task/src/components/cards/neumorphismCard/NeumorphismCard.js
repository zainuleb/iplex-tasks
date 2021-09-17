import React from 'react';
import styles from './NeumorphismCard.module.css';

const NeumorphismCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h4 className={styles.cardHeader}>Hodor</h4>
            <div className={styles.image}>
              <img
                alt="hodor"
                src={
                  'https://api.time.com/wp-content/uploads/2016/05/8c8f129f4cd5c96715d3ec63c4727520a9d5c6bd7582c8686e0a7bf53c2155d8-1.jpeg?w=800&quality=85'
                }
              />
            </div>
            <p className={styles.cardInfo}>Hold the Door</p>
            <button className={styles.cardButton}>Watch Episode</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeumorphismCard;
