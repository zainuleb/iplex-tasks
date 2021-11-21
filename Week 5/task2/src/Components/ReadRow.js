import React from 'react';
import styles from './ReadRow.module.css';
const ReadRow = ({ record, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={record.id}>
      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>{record.password}</td>
      <td>{record.phoneNum}</td>
      <td className={styles.btnBloc}>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, record)}
        >
          Edit
        </button>
      </td>
      <td className={styles.btnBloc}>
        <button type="button" onClick={() => handleDeleteClick(record.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadRow;
