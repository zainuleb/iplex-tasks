import React from 'react';
import styles from './NewsUI.module.css';

const NewsUI = ({ news, loading }) => {
  return (
    <div className={styles.newsContainer}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <ul className={styles.newsList}>
          {news.map((item) => (
            <li key={item.id}>
              <div className={styles.contentContainer}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsUI;
