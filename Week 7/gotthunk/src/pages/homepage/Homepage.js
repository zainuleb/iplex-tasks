import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';

import CardList from '../../components/CardList/CardList';

const Homepage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      let jsonData = require('../../data/gotData.json');
      setCharacters(jsonData);
    } catch (err) {
      console.log(err);
    }
  });

  //For API
  /*   useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.json())
      .then((res) => setCharacters(res));
  }, []); */

  return (
    <div className={styles.homepage}>
      {characters ? <CardList characters={characters} /> : <div>Loading</div>}
    </div>
  );
};

export default Homepage;
