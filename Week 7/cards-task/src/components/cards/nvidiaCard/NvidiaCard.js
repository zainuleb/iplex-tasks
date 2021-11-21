import React from 'react';
import styles from './NvidiaCard.module.css';

const NvidiaCard = () => {
  return (
    <div className={styles.nvidiaContainer}>
      <div className={styles.productDetails}>
        <h1>NVIDIA GEFORCE RTX 3070</h1>
        <p className={styles.information}>
          "Planning to buy a high-performance graphics card that could easily
          handle the most demanding games available?"
        </p>
        <div className={styles.control}>
          <button className={styles.btn}>
            <span className={styles.price}>Rs.90000</span>
            <span className={styles.buy}>Buy</span>
          </button>
        </div>
      </div>
      <div className={styles.productImage}>
        <img
          src={`https://cdn.alzashop.com/ImgW.ashx?fd=f4&cd=EVr3070f2&i=1.jpg`}
          alt=""
        />

        <div className={styles.info}>
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Cooling System : </strong>Fan
            </li>
            <li>
              <strong>Boost Clock Speed : </strong>1.73 GHz
            </li>
            <li>
              <strong>GPU Memory Size: </strong>balls and bells
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NvidiaCard;
