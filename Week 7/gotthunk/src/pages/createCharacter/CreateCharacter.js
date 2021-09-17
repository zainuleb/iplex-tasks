import React from 'react';
import { useState } from 'react';
import styles from './CreateCharacter.module.css';

const CreateCharacter = () => {
  const [formChar, setFormChar] = useState({});

  const changeHandler = (e) => {
    setFormChar({ ...formChar, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    setFormChar({ ...formChar, [e.target.name]: e.target.value });
  };

  console.log(formChar);

  return (
    <div className={styles.formPageWrap}>
      <div className={styles.heading}>
        <h2>Make you Own GoT Character</h2>
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            onChange={changeHandler}
            value={formChar.firstName}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
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
            onChange={changeHandler}
            value={formChar.imageUrl}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default CreateCharacter;

/*   <div className={styles.fileArea}>
    <label className={styles.file}>
      Upload File
      <input
        type="file"
        id="myFile"
        name="filename"
        onChange={changeHandler}
        value={formChar.imageUrl}
      />
    </label>
  </div>; */
