import React from 'react';
import styles from './ButtomPrim.module.css';

const ButtonPrim = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonPrim;
