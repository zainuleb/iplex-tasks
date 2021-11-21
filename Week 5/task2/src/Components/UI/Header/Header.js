import React from 'react';
import styles from './Header.module.css';

//Main Foo
const Header = (props) => {
  return (
    <>
      <div className={styles.headerArea}>
        <h1>CRUD TABLE</h1>
      </div>
    </>
  );
};

export default Header;
