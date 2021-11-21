import React, { useState } from 'react';
//Importing Style
import './App.css';

//Importing Components
import Header from './Components/UI/Header/Header.js';
import Inputbar from './Components/Input Bar/Inputbar';
import ToDoList from './Components/To Do/ToDoList/ToDoList';

//Main Foo
function App() {
  //Handling States
  const [todoItems, setTodoItems] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const onAddToDoHandler = (enteredItem) => {
    setTodoItems((prevItem) => {
      const updateItem = [...prevItem];
      updateItem.unshift({ text: enteredItem, id: Math.random().toString() });
      return updateItem;
    });
  };

  //Handle Deletion of Item
  const deleteHandler = (itemID) => {
    setTodoItems((prevItem) => {
      const updateItem = prevItem.filter((item) => item.id !== itemID);
      return updateItem;
    });
  };

  //Case: No To Do's
  let content = (
    <p style={{ textAlign: 'center' }}>No ToDos found. Maybe add one?</p>
  );

  //Case: List item exist
  if (todoItems.length > 0) {
    content = <ToDoList items={todoItems} onDelete={deleteHandler}></ToDoList>;
  }

  return (
    <div className="body">
      <Header />
      <main>
        {/* Form Section */}
        <section id="form">
          <Inputbar onAddToDo={onAddToDoHandler} />
        </section>

        {/* ToDo Section */}
        <section id="todos">{content}</section>
      </main>
    </div>
  );
}

export default App;
