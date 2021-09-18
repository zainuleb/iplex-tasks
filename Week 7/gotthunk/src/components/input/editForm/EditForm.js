import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';

import styles from './EditForm.module.css';

const EditForm = () => {
  let history = useHistory();
  const { id } = useParams();

  const loadChar = async () => {
    const char = await axios.get(`http://localhost:5000/characters/${id}`);
    setFormChar(char.data);
  };

  const [formChar, setFormChar] = useState({});

  // eslint-disable-next-line
  useEffect(() => {
    try {
      loadChar();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  const changeHandler = (e) => {
    setFormChar({
      ...formChar,
      [e.target.name]: e.target.value,
      image: `${formChar.title}.jpg`,
      fullName: `${formChar.firstName} ${formChar.lastName}`,
    });
  };

  const submitHandler = async (e) => {
    await axios.put(`http://localhost:5000/characters/${id}`, formChar);
    history.push('/');
  };

  return (
    <>
      <div className={styles.heading}>
        <h2>Update Your Character</h2>
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <input
            value={formChar.firstName}
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            onChange={changeHandler}
          ></input>
          <label>Last Name</label>
          <input
            value={formChar.lastName}
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            onChange={changeHandler}
          ></input>
          <label>Title</label>
          <input
            value={formChar.title}
            type="text"
            id="title"
            name="title"
            placeholder="Your Title.."
            onChange={changeHandler}
          ></input>

          <label>House</label>
          <select
            value={formChar.family}
            id="family"
            name="family"
            onChange={changeHandler}
          >
            <option value="Stark">Stark</option>
            <option value="Targaryan">Targaryan</option>
            <option value="Lanister">Lanister</option>
            <option value="Baratheon">Baratheon</option>
            <option value="Tarly">Tarly</option>
          </select>

          <label>Characters Picture</label>
          <input
            type="text"
            id="imgurl"
            name="imageUrl"
            placeholder="Image Url"
            value={formChar.imageUrl}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default EditForm;
