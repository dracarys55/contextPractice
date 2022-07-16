import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponen from './ClassContextComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      <ClassContextComponen />
    </ThemeProvider>
  );
}

export default App;
