import React from 'react';
import Search from './Search';

const HeaderComp = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode
          )
        }
        className='save'
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default HeaderComp;
