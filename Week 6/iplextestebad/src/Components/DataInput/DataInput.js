import React, { useState } from 'react';
import styles from './DataInput.module.css';

import ButtonPrim from '../UI/Button/ButtonPrim.js';

const Inputbar = (props) => {
  //useState Initialize
  const [enteredValue, setEnteredValue] = useState('');

  //onChange Function
  const inputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  //Submit Function
  const fromSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim) props.onAddArray(enteredValue);
  };

  return (
    <div className={styles.inputStyles}>
      <form onSubmit={fromSubmitHandler}>
        <div className={styles.formControl}>
          <label>Enter Data</label>
          <div>
            <input type="text" onChange={inputHandler} required />
            <ButtonPrim type="submit">Add</ButtonPrim>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputbar;
