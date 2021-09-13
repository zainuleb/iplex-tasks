import React from 'react';

const DisplayItem = ({ id, data }) => {
  console.log(data);

  /*   const deleteHandler = () => {}; */
  return (
    <tr key={id}>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.password}</td>
      <td>
        <button>Update</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default DisplayItem;
