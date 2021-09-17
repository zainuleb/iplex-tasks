import './App.css';

import PropTypes from 'prop-types';
import allActions from './redux/actions';
//import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const storeData = useSelector((state) => state);
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const user = { id: 2, name: 'eba', email: 'uba' };
  const [change, setChange] = useState();

  const content = <div>No Data</div>;

  useEffect(() => {
    dispatch(allActions.userActions.addEmployee(user));
    setChange(dispatch(allActions.userActions.getEmployee()));
    console.log(storeData);
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => dispatch(allActions.userActions.addEmployee(user))}
      >
        Add
      </button>

      <div>{change}</div>
    </div>
  );
}

export default App;
