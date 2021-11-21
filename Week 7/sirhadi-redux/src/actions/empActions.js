const addEmployee = (data) => {
  return {
    type: 'ADD_EMPLOYEE',
    payload: data,
  };
};

const deleteEmployee = (employeeId) => {
  return {
    type: 'DELETE_EMPLOYEE',
    payload: employeeId,
  };
};

const editEmployee = (data) => {
  return {
    type: 'EDIT_EMPLOYEE',
    payload: data,
  };
};

export default {
  addEmployee,
  deleteEmployee,
  editEmployee,
};
