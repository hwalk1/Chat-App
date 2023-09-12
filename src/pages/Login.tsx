import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Loader from '../components/Loading';

import { signInToSupabase } from '../actions/supabase';
import '../styles/layout.scss';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [errMessage, setErrMessage] = useState<string>('');

  const handleSubmit = async (
    e: { preventDefault: () => void } | undefined
  ) => {
    e?.preventDefault();
    await signInToSupabase(email, password).then(({ data, error }) => {
      console.log('data', data);
      console.log('error', error);
    });
  };
  if (isLoading) {
    // need to find a loading animation that is centred to the screen
    // this can become it's own reusable component
    return <Loader />;
  }
  return (
    <div className="centeredScreenWrapper">
      <div className="contentWrapper">
        <div>
          <h1>Login</h1>
        </div>

        <div className="authForm">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formSection">
              <TextInput
                onChange={setEmail}
                type="email"
                value={email}
                customClass="mb2"
                placeHolder="Enter email..."
              />
              <TextInput
                onChange={setPassword}
                type="password"
                value={password}
                customClass="mb2"
                placeHolder="Enter password..."
              />
              <Button title="Login" buttonType="primary" customClass="mb2" />
              <Button title="Signup" buttonType="secondary" to="/signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
