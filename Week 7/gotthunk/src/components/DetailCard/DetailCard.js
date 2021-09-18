import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './DetailCard.module.css';

const DetailCard = ({ character, styleClass }) => {
  const deleteChar = async (id) => {
    await axios.delete(`http://localhost:5000/characters/${id}`);
  };

  return (
    <div className={styles.details}>
      <div className={`styles.${styleClass}`}>
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
          <div className={styles.options}>
            <ul>
              <li>
                <Link to={`/update/${character.id}`}>Update</Link>
              </li>
              <li>
                <Link to="/" onClick={() => deleteChar(character.id)}>
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
