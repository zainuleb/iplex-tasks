const initialstate = {
  users: [{ id: 1, name: 'eb', email: 'ub' }],
};
const currentUser = (state = initialstate, action) => {
  switch (action) {
    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat(action.payload),
      };

    case 'UPDATE_USER':
      return {};

    case 'DELETE_USER':
      return {};

    case 'GET_USER':
      return { ...state };

    default:
      return state;
  }
};

export default currentUser;
