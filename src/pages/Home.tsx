import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello World!</h1>
      <button type="button" onClick={() => navigate('signup')}>
        Sign Up
      </button>
      <button type="button" onClick={() => navigate('signup')}>
        Login
      </button>
    </>
  );
};

export default Home;
