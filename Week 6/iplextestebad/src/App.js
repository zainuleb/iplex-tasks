import './App.css';
import React, { useState } from 'react';

//Import Components
import Header from './Components/Header/Header';
import DataInput from './Components/DataInput/DataInput.js';
import DisplayData from './Components/DisplayData/DisplayData';
import Count from './Components/Count/Count';
function App() {
  const [inputArray, setInputArray] = useState([]);
  const [count, setCount] = useState(0);

  const onAddArray = (enteredValue) => {
    setInputArray((prevItem) => {
      const updateItem = [...prevItem];
      updateItem.unshift({ text: enteredValue, id: Math.random().toString() });
      return updateItem;
    });

    let updateCount = count;
    updateCount++;
    setCount(updateCount);
  };

  let content = (
    <p style={{ textAlign: 'center', fontSize: '18px' }}>
      No Data found. Maybe add one?
    </p>
  );

  if (inputArray.length > 0) {
    content = <DisplayData inputArray={inputArray} />;
  }

  return (
    <div className="App">
      <Header />
      <div className="appWrap">
        <div className="inputData">
          <DataInput onAddArray={onAddArray} />
        </div>
        <div className="displayData">{content}</div>
        <div className="countData">
          <Count count={count} />
        </div>
      </div>
    </div>
  );
}

export default App;
