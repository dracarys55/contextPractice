import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import { UserContext } from './UserContext';
import './style.css';
import { ThemeProvider } from './ThemeContext';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

function App() {
  const [user, setUser] = useState('please login in');
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      <ClassContextComponent />
    </ThemeProvider>
    /* <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
      </div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </UserContext.Provider>
    </Router> */
  );
}

export default App;
