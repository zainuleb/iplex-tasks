import React from 'react';

//Importing Style
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  /*  const [deleteText, setDeleteText] = useState(''); */

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <li className={styles.item} onClick={deleteHandler}>
        {props.children}
      </li>
    </div>
  );
};

export default TodoItem;
