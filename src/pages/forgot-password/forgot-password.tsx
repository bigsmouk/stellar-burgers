<<<<<<< HEAD
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import {
  clearUserError,
  forgotPassword
} from '../../services/slices/userSlice';

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isResetPasswordRequested } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isResetPasswordRequested) {
      localStorage.setItem('resetPassword', 'true');
      navigate('/reset-password', { replace: true });
    }
  }, [isResetPasswordRequested, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearUserError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(forgotPassword(email));
=======
import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { forgotPasswordApi } from '@api';
import { ForgotPasswordUI } from '@ui-pages';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setError(null);
    forgotPasswordApi({ email })
      .then(() => {
        localStorage.setItem('resetPassword', 'true');
        navigate('/reset-password', { replace: true });
      })
      .catch((err) => setError(err));
>>>>>>> main
  };

  return (
    <ForgotPasswordUI
<<<<<<< HEAD
      errorText={error || ''}
=======
      errorText={error?.message}
>>>>>>> main
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
