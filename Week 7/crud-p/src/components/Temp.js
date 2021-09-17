import React, { useState } from 'react';

export const Temp = () => {
  const tempData = fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => data.results)
    .then((data) => data[0])
    .then((data) => data.name)
    .then((data) => data.first)
    .then((data) => console.log(data));

  const [data, setData] = useState({
    loading: 'false',
    persons: {
      person1: null,
      person2: null,
    },
  });

  /*   setData({persons.person1=tempData}) */

  return <div>Here</div>;
};

export default Temp;
