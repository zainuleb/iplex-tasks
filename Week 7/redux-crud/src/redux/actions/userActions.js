const getEmployee = () => {
  return (dispatch) => {
    return dispatch({
      type: 'GET_USER',
    });
  };
};

const addEmployee = (data) => {
  return (dispatch) => {
    return dispatch({
      type: 'ADD_USER',
      payload: data,
    });
  };
};

export default {
  getEmployee,
  addEmployee,
};
