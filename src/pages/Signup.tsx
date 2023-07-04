import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { signUpToSupabase } from '../actions/supabase';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleSubmit = (e: { preventDefault: () => void } | undefined) => {
    e?.preventDefault();
    signUpToSupabase(email, password);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign Up</h1>
      <TextInput onChange={setEmail} type="email" value={email} />
      <TextInput onChange={setPassword} type="password" value={password} />
      <Button title="Sign Up" />
    </form>
  );
};

export default SignUp;
