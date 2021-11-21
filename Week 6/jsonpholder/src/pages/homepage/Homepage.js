import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
      .then((response) => response.json())
      .then((res) => console.log(res));
  });

  return (
    <div>
      <ul>
        {data.map((data) => (
          <Link
            to={`/title?id=${data.id}`}
            key={data.id}
            onClick={(e) => {
              props.title(data.title);
            }}
          >
            <li key={data.id}>{data.id}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;

/*    */
