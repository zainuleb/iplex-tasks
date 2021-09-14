import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <Link to="/input">
          <li>
            <h1>Input</h1>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
