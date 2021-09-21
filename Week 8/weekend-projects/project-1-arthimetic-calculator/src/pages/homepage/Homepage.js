import React from 'react';

import { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

import styles from './Homepage.module.css';

import TextPad from '../../components/textPad/TextPad';

const Homepage = () => {
  const [preState, setPreState] = useState('');
  const [input, setInput] = useState('0');

  //Refresh UseEffect
  useEffect(() => {
    setInput('0');
  }, []);

  return (
    <div className={styles.calWrap}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.screen}>
            {input !== '' || input === '0' ? (
              <NumberFormat
                value={input}
                displayType={'text'}
                thousandSeparator={true}
              />
            ) : (
              <NumberFormat
                value={preState}
                displayType={'text'}
                thousandSeparator={true}
              />
            )}
          </div>
          <TextPad
            preState={preState}
            setPreState={setPreState}
            input={input}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
