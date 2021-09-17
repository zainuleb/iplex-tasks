import React from 'react';
import styles from './ReflectCard.module.css';

const ReflectCard = () => {
  return (
    <div className={styles.reflectContainer}>
      <div>
        <img
          src={`https://i0.wp.com/techweez.com/wp-content/uploads/2016/11/Mesut-Ozil-Goal-1024x711.jpg?fit=1024%2C711&ssl=1`}
          alt="reflect.jpg"
        />
        <h6>Mesut Ozils Goal</h6>
      </div>
      <div>
        <img
          src={`https://dailycannon.com/static/uploads/2020/07/fbl-eng-pr-wolves-arsenal-2-1-scaled-e1593940772780.jpg`}
          alt="reflect.jpg"
        />
        <h6>Ramseys Save</h6>
      </div>

      <div>
        <img
          src={`https://www.thestatesman.com/wp-content/uploads/2019/12/Abraham-1.jpg`}
          alt="reflect.jpg"
        />
        <h6>Arsenals Win 2019</h6>
      </div>

      <div>
        <img
          src={`https://images.daznservices.com/di/library/GOAL/ca/57/pierre-emerick-aubameyang-arsenal-2019-20_1f5dltrsaddto1pt7sr63dowxc.jpg?quality=60&w=800`}
          alt="reflect.jpg"
        />
        <h6>Ramseys Save</h6>
      </div>
    </div>
  );
};

export default ReflectCard;
