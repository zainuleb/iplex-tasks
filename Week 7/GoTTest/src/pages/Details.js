import React, { useState, useEffect } from 'react';
import styles from './Details.module.css';

const Details = (props) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${props.id}`)
      .then((response) => response.json())
      .then((res) => setItem(res));
  }, [props.id]);

  let content = <li>Details Loading</li>;

  if (item) {
    content = (
      <div>
        <div>
          <img src={item.imageUrl} alt={item.lastName} />
        </div>
        <div>
          <p>Hi My Name is {item.firstName} </p>
          <p>People also call me {item.title}</p>
        </div>
        <div>Im from {item.family} Family</div>
      </div>
    );
  }

  return <div className={styles.details}>{content}</div>;
};

export default Details;
