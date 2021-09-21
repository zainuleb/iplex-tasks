import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChars } from '../../../redux/actions/charActions';
import { useHistory } from 'react-router';

import styles from './AddForm.module.css';

const Input = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  const [formChar, setFormChar] = useState({
    imageUrl: 'https://thronesapi.com/assets/images/ned-stark.jpg',
  });

  const changeHandler = (e) => {
    setFormChar({
      ...formChar,
      [e.target.name]: e.target.value,
      image: `${formChar.title}.jpg`,
      fullName: `${formChar.firstName} ${formChar.lastName}`,
    });
  };

  const submitHandler = async (e) => {
    dispatch(addChars(formChar));
    history.push('/');
  };

  return (
    <>
      <div className={styles.heading}>
        <h2>Make you Own GoT Character</h2>
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            onChange={changeHandler}
            value={formChar.firstName}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            onChange={changeHandler}
            value={formChar.lastName}
          ></input>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Your Title.."
            onChange={changeHandler}
            value={formChar.title}
          ></input>

          <label>House</label>
          <select
            id="family"
            name="family"
            onChange={changeHandler}
            value={formChar.family}
          >
            <option value="Stark">Stark</option>
            <option value="Targaryan">Targaryan</option>
            <option value="Lanister">Lanister</option>
            <option value="Baratheon">Baratheon</option>
          </select>

          <label>Characters Picture</label>
          <input
            type="text"
            id="imgurl"
            name="imageUrl"
            placeholder="Image Url"
            defaultValue="https://thronesapi.com/assets/images/daenerys.jpg"
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default Input;
