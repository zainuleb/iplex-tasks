import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ data }) => {
  return (
    <Link to={`/details/${data.id}`}>
      <div className={styles.cardContainer}>
        <img alt={data.image} src={`${data.imageUrl}`} />
        <h1> {data.fullName}</h1>
        <h2>{data.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
