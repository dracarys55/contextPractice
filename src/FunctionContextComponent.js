import React from 'react';
import { useTheme } from './ThemeContext';

const FunctionContextComponent = () => {
  const { toggleTheme, darkTheme } = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default FunctionContextComponent;
