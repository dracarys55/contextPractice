import React, { useContext, useState } from 'react';

/* this is for class component, so need to export */
export const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((darkTheme) => !darkTheme);
  };
  const themeObj = {
    darkTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeObj}>{children}</ThemeContext.Provider>
  );
}
