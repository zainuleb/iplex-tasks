import React, { useEffect, useState } from 'react';
import DetailCard from '../../components/DetailCard/DetailCard';

import styles from './Details.module.css';
import { useParams } from 'react-router-dom';

const Details = () => {
  let { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    try {
      fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        .then((res) => res.json())
        .then((res) => setCharacter(res));
    } catch (err) {
      console.log(err);
    }
  });

  return <DetailCard character={character} styleClass="one" />;
};

export default Details;
