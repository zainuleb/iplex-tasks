import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/reflect">
              <h5>Card 1</h5>
            </Link>
          </li>
          <li>
            <Link to="/recepie">
              <h5>Card 2</h5>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <h5>Card 3</h5>
            </Link>
          </li>
          <li>
            <Link to="/neumorphism">
              <h5>Card 4</h5>
            </Link>
          </li>
          {/*           <li>
            <Link to="/material">
              <h5>Card 5</h5>
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
