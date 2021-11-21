import React, { useState } from 'react';
import styles from './Inputbar.module.css';

//Importing Prim Button
import ButtonPrim from '../UI/ButtonPrim/ButtonPrim';

//Main Foo
const Inputbar = (props) => {
  //useState Initialize
  const [enteredValue, setEnteredValue] = useState('');

  //onChange Function
  const todoInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  //Submit Function
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim) {
      props.onAddToDo(enteredValue);
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.formControl}>
          <label>Enter To Do</label>
          <input type="text" onChange={todoInputHandler} />
        </div>
        <ButtonPrim type="submit">Add</ButtonPrim>
      </form>
    </div>
  );
};

export default Inputbar;
