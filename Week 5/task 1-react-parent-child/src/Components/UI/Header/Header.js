import React from 'react';
import styles from './Header.module.css';

//Main Foo
const Header = (props) => {
  return (
    <>
      <div className={styles.headerArea}>
        <h1>To Do List (Add/Delete) </h1>
      </div>
    </>
  );
};

export default Header;
