import React from 'react';
import { useSelector } from 'react-redux';
import { registerSelectors } from '../../redux/store/registerSlice';
import DisplayItem from './DisplayItem';

const DisplayList = () => {
  const allData = useSelector(registerSelectors.selectEntities);
  const dataList = [];

  for (const id in allData) {
    if (Object.hasOwnProperty.call(allData, id)) {
      const registerItem = allData[id];
      dataList.unshift(registerItem);
      console.log('DataList', dataList);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => (
          <DisplayItem key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default DisplayList;
