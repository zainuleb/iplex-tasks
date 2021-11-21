import { createStore, applyMiddleware, compose } from "redux";
/* import logger from 'redux-logger'; */
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer.js";

/* if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
} */

const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

/* 
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

export default store;
