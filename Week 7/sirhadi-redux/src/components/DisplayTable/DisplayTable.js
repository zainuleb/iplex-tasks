import React from 'react';
import { Table, Button } from 'react-bootstrap';
import styles from './DisplayTable.module.css';

//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

const DisplayTable = ({ handleEditClick }) => {
  const data = useSelector((state) => state.empData.employees);
  const dispatch = useDispatch();

  let content = (
    <tr>
      <td>No Data</td>
    </tr>
  );

  if (data.length > 0) {
    content = data.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
          <Button onClick={() => handleEditClick(item)}>Edit</Button>
        </td>
        <td>
          <Button
            onClick={() =>
              dispatch(allActions.empActions.deleteEmployee(item.id))
            }
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  }

  return (
    <div className={styles.table}>
      <Table striped bordered hover variant="dark" size="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>{content}</tbody>
      </Table>
    </div>
  );
};

export default DisplayTable;
