import currentUser from './currentUser';
import counter from './counter';
import empData from './empData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser,
  counter,
  empData,
});

export default rootReducer;
