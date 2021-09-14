import React from 'react';
import { Link } from 'react-router-dom';

const DisplayData = ({ data }) => {
  let content = <li>Loading</li>;

  if (data.length > 0) {
    content = data.map((item) => (
      <Link /* to={`/title?id=${data.id}`} */>
        <ul key={item.id}>
          <li>{item.fullName}</li>
        </ul>
      </Link>
    ));
  }

  return { content };
};

export default DisplayData;
