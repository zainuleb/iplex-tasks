import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topLeft}>
        <i class="fab fa-instagram-square fa-2x"></i>
        <i class="fab fa-facebook-square fa-2x"></i>
        <i class="fab fa-medium fa-2x"></i>
      </div>

      <div className={styles.topCenter}>
        <ul className={styles.topCenter}>
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h2>About</h2>
            </Link>
          </li>

          <li>
            <Link to="/">
              <h2>Contact</h2>
            </Link>
          </li>

          <li>
            <Link to="/">
              <h2>Write</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
