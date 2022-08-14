import React, { useEffect } from 'react';
import { FormComponent } from '../../components/formComponent/formComponent';
import { signInFields } from './signInFields';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/actions/auth/authActions';
import { MessageWindow } from '../../components/messageWindow/messageWindow';
import { AuthWrapper } from '../../styled/authStyle';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const signInDispatch = useDispatch();
  const { auth } = useSelector(store => store || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.auth?.data) {
      navigate('/');
    }
  }, [auth]);

  return (
    <AuthWrapper>
      <FormComponent
        titleText="Welcome Back"
        inputContent={signInFields}
        buttonText="Sign in"
        redirectButtonPath="*"
        onSubmit={data => signInDispatch(setUser(data))}
      >
        <Link to="/forgot-password">Forgot password?</Link>
      </FormComponent>
      <MessageWindow content={auth} />
    </AuthWrapper>
  );
};
