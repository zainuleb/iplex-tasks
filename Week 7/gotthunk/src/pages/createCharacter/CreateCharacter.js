import React from 'react';
import AddForm from '../../components/input/addForm/AddForm.js';

import styles from './CreateCharacter.module.css';

const CreateCharacter = () => {
  return (
    <div className={styles.formPageWrap}>
      <AddForm />
    </div>
  );
};

export default CreateCharacter;
