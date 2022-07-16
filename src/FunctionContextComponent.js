import React, { useContext } from 'react';
import { useTheme } from './ThemeContext';

const FunctionContextComponent = () => {
  const themeObj = useTheme();
  const themeStyles = {
    backgroundColor: themeObj.darkTheme ? '#333' : '#CCC',
    color: themeObj.darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return (
    <>
      <button onClick={themeObj.toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default FunctionContextComponent;
