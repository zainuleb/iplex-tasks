import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Title = (props) => {
  const [title, setTitle] = useState([]);

  /*   useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`)
      .then((response) => response.json())
      .then((json) => setTitle(json))
      .catch((err) => {
        console.log(err);
      });
  }); */

  console.log(props.id);

  return (
    <div>
      <h1>This is by props: {props.title}</h1>
      <h2>This is by Query: {props.id}</h2>
    </div>
  );
};

export default Title;
