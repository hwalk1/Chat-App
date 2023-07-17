import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Button title="Sign Up" to="/signup" />

      <Button title="Login" to="/login" />
    </>
  );
};

export default Home;
