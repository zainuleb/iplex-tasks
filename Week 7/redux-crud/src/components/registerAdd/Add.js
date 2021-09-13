import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAdd } from '../../redux/store/registerSlice';
import { nanoid } from '@reduxjs/toolkit';

const Add = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: nanoid(),
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData((prev) => {
      return { ...prev, id: nanoid() };
    });
    console.log(data);
    dispatch(registerAdd(data));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={data.name}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={changeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
