import React, { useState } from 'react';
import './App.css';

//Components
import Input from './components/input/Input';
import DisplayTable from './components/DisplayTable/DisplayTable.js';
import EditUserForm from './components/input/EditUserForm';

const App = () => {
  //Editing Area Start
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  //Editing Area End

  return (
    <div className="App">
      <div className="formStyles">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm setEditing={setEditing} currentUser={currentUser} />
          </div>
        ) : (
          <Input />
        )}
      </div>
      <div className="displayStyles">
        <h2 class="display-6">Display Data</h2>
        <DisplayTable handleEditClick={editRow} />
      </div>
    </div>
  );
};

export default App;
