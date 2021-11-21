import React from 'react';
import styles from './EditRow.module.css';

const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick , validations }) => {
  return (
    <tr className={styles.rowStyle}>
      <td>
        <input
          type="text"
          name="name"
          required="Oii You missed the name"
          placeholder="Enter Name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          pattern = {validations.nameR}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="Oii You missed the Email"
          placeholder="Enter Email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="password"
          name="password"
          required="Oii You missed the pass"
          placeholder="Enter Pass"
          value={editFormData.password}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phoneNum"
          required="Oii You missed the Contact"
          placeholder="Enter Contact"
          value={editFormData.phoneNum}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className={styles.btnBloc}>
        <button type="submit">Save</button>
      </td>
      <td className={styles.btnBloc}>
        <button
          type="button"
          onClick={(e) => handleCancelClick(e, editFormData)}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
