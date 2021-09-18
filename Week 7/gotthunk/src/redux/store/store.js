import { createStore, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

const middlewares = [reduxThunk];
