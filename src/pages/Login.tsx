import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { supabase } from '../App';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitToSupabase = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log('data', data);
    console.log('error', error);
  };
  const handleSubmit = (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();
    submitToSupabase();
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
