import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteChars } from '../../redux/actions/charActions';

import { Link } from 'react-router-dom';
import styles from './DetailCard.module.css';

const DetailCard = ({ character, styleClass }) => {
  //DeleteReduxArea
  let dispatch = useDispatch();
  const deleteChar = async (id) => {
    if (window.confirm('Are You Sure?')) {
      dispatch(deleteChars(id));
    }
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
