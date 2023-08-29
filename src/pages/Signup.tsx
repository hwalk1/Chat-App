import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { signUpToSupabase } from '../actions/supabase';
import '../styles/layout.scss';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();
    signUpToSupabase(email, password);
  };

  return (
    <div className="centeredScreenWrapper">
      <div className="contentWrapper">
        <div>
          <h1>Sign Up</h1>
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
              <Button title="Sign Up" buttonType="primary" customClass="mb2" />
              <Button title="Login" buttonType="secondary" to="/login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
