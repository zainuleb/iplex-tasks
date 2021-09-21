import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <Link to="/">
          <li>
            <h2>Home</h2>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
