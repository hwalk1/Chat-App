import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { signInToSupabase } from '../actions/supabase';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();
    signInToSupabase(email, password);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <TextInput onChange={setEmail} type="email" value={email} />
      <TextInput onChange={setPassword} type="password" value={password} />
      <Button title="Login" />
    </form>
  );
};

export default Login;
