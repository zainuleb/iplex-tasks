import { combineReducers } from 'redux';
import charReducers from './charReducer.js';

const rootReducer = combineReducers({
  data: charReducers,
});

export default rootReducer;
