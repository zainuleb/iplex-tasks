import * as types from '../actions/actionTypes.js';

const initialState = {
  characters: [],
  character: {},
  loading: true,
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };

    case types.GET_SINGLE_CHAR:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };

    case types.ADD_CHAR:
      console.log(state.charactes);
      return {
        ...state,
        characters: state.characters.concat(action.payload),
        loading: false,
      };

    case types.UPDATE_CHAR:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_CHAR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default charReducer;
