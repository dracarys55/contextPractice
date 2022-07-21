import React, { useContext } from 'react';
import { UserContext } from './UserContext';
const About = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>About</h1>
      <div>{user}</div>
    </>
  );
};

export default About;
