import React from 'react';

//Importing Style
import styles from './ToDoList.module.css';

//Importing Components
import TodoItem from '../TodoItem/TodoItem';

const ToDoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <TodoItem key={item.id} id={item.id} onDelete={props.onDelete}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
