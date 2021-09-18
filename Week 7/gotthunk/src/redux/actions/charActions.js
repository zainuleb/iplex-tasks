import * as types from './actionTypes.js';
import axios from 'axios';

const getChars = (chars) => ({
  type: types.GET_CHARS,
  payload: chars,
});

const getSingleChar = (chars) => ({
  type: types.GET_SINGLE_CHAR,
  payload: chars,
});

const addChar = () => ({
  type: types.ADD_CHAR,
});

const updateChar = () => ({
  type: types.UPDATE_CHAR,
});

const deleteChar = () => ({
  type: types.DELETE_CHAR,
});

export const loadChars = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/characters`)
      .then((res) => {
        dispatch(getChars(res.data));
      })

      .catch((err) => console.log(err));
  };
};

export const loadSingleChar = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/characters/${id}`)
      .then((res) => {
        dispatch(getSingleChar(res.data));
      })

      .catch((err) => console.log(err));
  };
};

export const addChars = (char) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:5000/characters`, char)
      .then((res) => {
        dispatch(addChar());
      })
      .catch((err) => console.log(err));
  };
};

export const updateChars = (char, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/characters/${id}`, char)
      .then((res) => {
        dispatch(updateChar());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteChars = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/characters/${id}`)
      .then((res) => {
        dispatch(deleteChar());
      })
      /*       .then((res) => {
        dispatch(getChars(res.data));
      }) */

      .catch((err) => console.log(err));
  };
};
