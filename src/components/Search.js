import React from 'react';

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type='text'
        placeholder='Search notes...'
      />
    </div>
  );
};

export default Search;
