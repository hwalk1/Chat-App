import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { signInToSupabase } from '../actions/supabase';
import '../styles/layout.scss';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();
    signInToSupabase(email, password);
  };

  return (
    <div className="screenWrap">
      <div className="contentWrapper">
        <div><h1>Login</h1></div>
        

        <div className="authForm">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formSection">
            <TextInput onChange={setEmail} type="email" value={email} />
            <TextInput
              onChange={setPassword}
              type="password"
              value={password}
            />
            <Button title="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
