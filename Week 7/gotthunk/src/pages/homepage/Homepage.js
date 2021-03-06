import React, { useEffect } from 'react';
/* import Axios from 'axios'; */

import { useDispatch, useSelector } from 'react-redux';
import { loadChars } from '../../redux/actions/charActions';

import styles from './Homepage.module.css';

import CardList from '../../components/cardList/CardList';

const Homepage = () => {
  //ReduxArea
  let dispatch = useDispatch();

  const { characters } = useSelector((state) => state.data);

  useEffect(() => {
    try {
      dispatch(loadChars());
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.homepage}>
      {characters ? (
        <CardList characters={characters} />
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )}
    </div>
  );
};

export default Homepage;
