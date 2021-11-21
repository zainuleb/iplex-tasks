import React from 'react';
import styles from './DisplayData.module.css';

const DisplayData = (props) => {
  return (
    <ul className={styles.listStyle}>
      {props.inputArray.map((input) => (
        <li className={styles.itemStyle} key={input.id}>
          {input.text}
        </li>
      ))}
    </ul>
  );
};

export default DisplayData;
