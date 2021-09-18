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

  //Without Redux
  /*   const [characters, setCharacters] = useState([]); */
  /*   const getData = async () => {
    const data = await Axios.get('http://localhost:5000/characters');
    setCharacters(data.data.reverse());
  }; */

  return (
    <div className={styles.homepage}>
      {characters ? <CardList characters={characters} /> : <div>Loading</div>}
    </div>
  );
};

export default Homepage;
