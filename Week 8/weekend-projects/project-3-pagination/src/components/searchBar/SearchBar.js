import React, { useState } from 'react';

const SearchBar = ({ data, setFilteredData }) => {
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    let newFilter = [];
    if (data.length > 0) {
      newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
    }

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  /*   const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };
 */
  return (
    <div>
      <input
        type="text"
        placeholder="Search New"
        value={wordEntered}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBar;
