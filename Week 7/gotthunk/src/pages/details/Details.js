import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailCard from '../../components/detailCard/DetailCard';

import { useParams } from 'react-router-dom';

const Details = () => {
  let { id } = useParams();

  const [character, setCharacter] = useState({});

  const loadChar = async () => {
    const char = await axios.get(`http://localhost:5000/characters/${id}`);
    setCharacter(char.data);
  };

  useEffect(() => {
    try {
      loadChar();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return <DetailCard character={character} styleClass="one" />;
};

export default Details;
