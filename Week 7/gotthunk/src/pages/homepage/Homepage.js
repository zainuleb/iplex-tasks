import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './Homepage.module.css';

import CardList from '../../components/CardList/CardList';

const Homepage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getData = async () => {
    const data = await Axios.get('http://localhost:5000/characters');
    setCharacters(data.data.reverse());
  };

  console.log(characters);

  return (
    <div className={styles.homepage}>
      {characters ? <CardList characters={characters} /> : <div>Loading</div>}
    </div>
  );
};

export default Homepage;
