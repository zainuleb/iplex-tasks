import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Input from '../components/input/Input';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  let content = <li key={data.id}>Loading</li>;

  if (data.length > 0) {
    content = data.map((item) => (
      <Link to={`/detail?id=${item.id}`}>
        <ul key={item.id}>
          <li key={item.id}>{item.fullName}</li>
        </ul>
      </Link>
    ));
  }

  const [searchField, setSearchField] = useState('');

  const handleChange = (e) => {
    setSearchField({ searchField: e.target.value });
  };

  console.log('search', searchField);
  console.log('data', data);
  if (searchField.length > 3) {
    setData((data) => data.filter(searchField === data.firstName));
  }

  return (
    <div className={styles.homePage}>
      <div>
        <Input placeholder="Search Characters" handleChange={handleChange} />
      </div>
      {content}
    </div>
  );
};

export default HomePage;
