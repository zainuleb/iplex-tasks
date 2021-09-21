import React from 'react';
import { useState, useEffect } from 'react';

import styles from './TextPad.module.css';

const TextPad = ({ preState, setPreState, input, setInput }) => {
  //Initialize Textpad States
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [curState, setCurState] = useState('');

  const inputNum = (e) => {
    if (curState.includes('.') && e.target.innerText === '.') return;
    if (total) {
      setPreState('');
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  //Change with Input
  useEffect(() => {
    setInput(curState);
    // eslint-disable-next-line
  }, [curState]);

  //Compute Result
  const equals = (e) => {
    if (e?.target.innerText === '=') {
      setTotal(true);
    }

    let cal;
    switch (operator) {
      case '/':
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case '+':
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case 'X':
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case '-':
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }

    //Reset States
    setInput('');
    setPreState(cal);
    setCurState('');
  };

  //MinPlus Operation
  const minusPlus = () => {
    if (curState.charAt(0) === '-') {
      setCurState(curState.substring(1));
    } else {
      setCurState('-' + curState);
    }
  };

  //Percentage Operation
  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  //Reset Foo
  const reset = () => {
    setPreState('');
    setCurState('');
    setInput('0');
  };

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === '') return;
    if (preState !== '') {
      equals();
    } else {
      setPreState(curState);
      setCurState('');
    }
  };

  return (
    <>
      <div className={styles.btn} onClick={reset}>
        AC
      </div>
      <div className={styles.btn} onClick={percent}>
        %
      </div>
      <div className={styles.btn} onClick={minusPlus}>
        +/-
      </div>
      <div className={styles.btn} onClick={operatorType}>
        /
      </div>
      <div className={styles.btn} onClick={inputNum}>
        7
      </div>
      <div className={styles.btn} onClick={inputNum}>
        8
      </div>
      <div className={styles.btn} onClick={inputNum}>
        9
      </div>
      <div className={styles.btn} onClick={operatorType}>
        X
      </div>
      <div className={styles.btn} onClick={inputNum}>
        4
      </div>
      <div className={styles.btn} onClick={inputNum}>
        5
      </div>
      <div className={styles.btn} onClick={inputNum}>
        6
      </div>
      <div className={styles.btn} onClick={operatorType}>
        +
      </div>
      <div className={styles.btn} onClick={inputNum}>
        1
      </div>
      <div className={styles.btn} onClick={inputNum}>
        2
      </div>
      <div className={styles.btn} onClick={inputNum}>
        3
      </div>
      <div className={styles.btn} onClick={operatorType}>
        -
      </div>
      <div className={styles.btn} onClick={inputNum}>
        0
      </div>
      <div className={styles.btn} onClick={inputNum}>
        .
      </div>
      <div className={styles.btn} onClick={equals}>
        =
      </div>
    </>
  );
};

export default TextPad;
