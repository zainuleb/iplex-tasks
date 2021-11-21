const initialstate = {
  employees: [
    { id: 1, name: 'Employee 1', email: '.NET Team' },
    { id: 2, name: 'Employee 2', email: 'Mobile Team' },
    { id: 3, name: 'Employee 3', email: 'Design Team' },
  ],
};

const empData = (state = initialstate, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEE':
      return {
        ...state,
      };
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case 'EDIT_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                email: action.payload.email,
              }
            : content
        ),
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default empData;
