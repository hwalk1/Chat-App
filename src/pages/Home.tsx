import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Button title="Sign Up" buttonType="primary" to="/signup" />

      <Button title="Login" buttonType="primary" to="/login" />
    </>
  );
};

export default Home;
