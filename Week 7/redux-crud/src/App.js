import './App.css';

import PropTypes from 'prop-types';
import { getEmployee, addEmployee } from './redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  return <div className="App"></div>;
}

export default App;
