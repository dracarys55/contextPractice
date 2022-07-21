import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { UserInfo } from './UserInfo';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Home</h1>
      <div>{user}</div>
      {user === 'please login in' ? (
        <button onClick={() => setUser(JSON.stringify(UserInfo))}>login</button>
      ) : (
        <button onClick={() => setUser('please login in')}>log out</button>
      )}
    </>
  );
};

export default Home;
