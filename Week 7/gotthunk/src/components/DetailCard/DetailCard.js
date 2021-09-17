import React from 'react';
import styles from './DetailCard.module.css';

const DetailCard = ({ character, styleClass }) => {
  return (
    <div className={styles.details}>
      <div className={`styles.${styleClass}`}>
        <p>Hey</p>
        <div className={styles.cardWrap}>
          <div className={styles.imageWrap}>
            <img src={character.imageUrl} alt={character.image} />
          </div>
          <div className={styles.contentWrap}>
            <p>
              <span>{character.fullName} </span>
              Also also known as
              <span> {character.title}</span>
            </p>
            <p>{character.family}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
