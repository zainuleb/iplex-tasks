//Importing
import React from 'react';

//Main Foo
const ButtonPrim = (props) => {
  return (
    <div>
      <button
        type={props.type}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default ButtonPrim;
