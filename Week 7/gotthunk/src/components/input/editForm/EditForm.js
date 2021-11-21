import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadSingleChar,
  updateChars,
} from '../../../redux/actions/charActions';
import { useHistory, useParams } from 'react-router';

import styles from './EditForm.module.css';

const EditForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const { character } = useSelector((state) => state.data);
  const { id } = useParams();

  const [formChar, setFormChar] = useState({});

  useEffect(() => {
    try {
      dispatch(loadSingleChar(id));
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    try {
      if (character) {
        setFormChar(character);
      }
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [character]);

  const changeHandler = async (e) => {
    await setFormChar({
      ...formChar,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    await setFormChar({
      ...formChar,
      image: `${formChar.title}.jpg`,
      fullName: `${formChar.firstName} ${formChar.lastName}`,
    });
    dispatch(updateChars(formChar, formChar.id));
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
            readOnly
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};

export default EditForm;
