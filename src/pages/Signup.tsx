import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Loader from '../components/Loading';
import { signUpToSupabase } from '../actions/supabase';
import '../styles/layout.scss';
import { isEmpty, get } from 'lodash';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>('');
  const [verifyState, setVerifyState] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState<string>('');

  const handleSubmit = async (
    e: { preventDefault: () => void } | undefined
  ) => {
    e?.preventDefault();
    setIsLoading(true);
    await signUpToSupabase(email, password).then(({ data, error }) => {
      if (!isEmpty(error)) {
        const errMessage = get(error, 'message', 'An error has occurred');
        setErrMessage(errMessage);
      }
      setIsLoading(false);

      if (isEmpty(error) && !isEmpty(data)) {
        //Get UserId
        const userId = get(data, 'user.id', '');
        const userEmail = get(data, 'user.email', '');
        if (userId) {
          setVerifyState(true);
          setVerifyEmail(userEmail);
        }
        //Get Email
      }
    });
  };

  // We need a loading state
  if (isLoading) {
    // need to find a loading animation that is centred to the screen
    // this can become it's own reusable component
    return <Loader />;
  }

  if (verifyState) {
    return (
      <div className="centeredScreenWrapper">
        <div className="contentWrapper">
          <h1>Thanks for Signing Up</h1>
          <p>{`To login, first verify your email at ${verifyEmail}`}</p>
        </div>
      </div>
    );
  }

  // success
  // a message, verfiy your account via your email
  // failure
  // an error has occurred. Display error message to user.
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
        {/* error message banner */}
        {errMessage && <p>{errMessage}</p>}
      </div>
    </div>
  );
};

export default SignUp;
