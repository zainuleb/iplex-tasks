import React, { useState } from 'react';
import './App.css';
import { Fragment } from 'react';

//Import Data from JSON
import data from './seed.json';
//Import Components
import Header from './Components/UI/Header/Header.js';
import ReadRow from './Components/ReadRow';
import EditRow from './Components/EditRow';

//Main Foo
function App() {
  const [records, setRecord] = useState(data); /* Set Initial Data */

  //Initialize States
  const [addFormData, setAddFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNum: '',
  });

  const [editFormId, setEditFormId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNum: '',
  });

  //Add Items Handler Foo
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Math.random().toString(),
      name: addFormData.name,
      email: addFormData.email,
      password: addFormData.password,
      phoneNum: addFormData.phoneNum,
    };

    const newRecords = [...records, newRecord];
    setRecord(newRecords);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedRecord = {
      id: editFormId,
      name: editFormData.name,
      email: editFormData.email,
      password: editFormData.password,
      phoneNum: editFormData.phoneNum,
    };

    const newRecord = [...records];
    const index = records.findIndex((record) => record.id === editFormId);
    console.log(index);
    newRecord[index] = editedRecord;
    setRecord(newRecord);
    setEditFormId(null);
  };

  //Edit Items Handler Foo
  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //Clicks Handers
  const handleEditClick = (e, record) => {
    e.preventDefault();

    setEditFormId(record.id);

    const formValues = {
      name: record.name,
      email: record.email,
      password: record.password,
      phoneNum: record.phoneNum,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditFormId(null);
  };

  //Handle Delete Click Event
  const handleDeleteClick = (recordId) => {
    const newRecords = [...records];
    const index = records.findIndex((record) => record.id === recordId);
    newRecords.splice(index, 1);
    setRecord(newRecords);
  };

  //Regex Tests
  const validations = {
    nameRegex: '[A-Za-z]{3,20}',
    passRegex: '^(?=.*[A-Za-z])[A-Za-zd]{8,}$',
    emailRegex: '^(.+)@(.+)$',
    phNumRegex: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="content-wrapper">
        <div className="record">
          <h2>Add Record</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="name"
              required="Oii You missed the name"
              placeholder="Name"
              onChange={handleAddFormChange}
              pattern={validations.nameRegex}
            ></input>
            <input
              type="text"
              name="email"
              required="Oii You missed the Email"
              placeholder="Email"
              onChange={handleAddFormChange}
              pattern={validations.emailRegex}
            ></input>
            <input
              type="password"
              name="password"
              required="Oii You missed the pass"
              placeholder="Password"
              onChange={handleAddFormChange}
              pattern={validations.passRegex}
            ></input>
            <input
              type="text"
              name="phoneNum"
              required="Oii You missed the Contact"
              placeholder="Contact"
              onChange={handleAddFormChange}
              pattern={validations.phNumRegex}
            ></input>
            <div className="btn-block">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
        <div className="table">
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <Fragment>
                    {editFormId === record.id ? (
                      <EditRow
                        key={record.id}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        validations={validations}
                      />
                    ) : (
                      <ReadRow
                        key={record.id}
                        record={record}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
