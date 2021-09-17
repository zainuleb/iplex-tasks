import React from 'react';
import styles from './CardList.module.css';

import Card from '../Card/Card';

const CardList = ({ characters }) => {
  return (
    <div className={styles.cardList}>
      {characters.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardList;
