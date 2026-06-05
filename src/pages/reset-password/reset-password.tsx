import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { ResetPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { clearUserError, resetPassword } from '../../services/slices/userSlice';

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.user);

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
=======

import { resetPasswordApi } from '@api';
import { ResetPasswordUI } from '@ui-pages';

export const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setError(null);
    resetPasswordApi({ password, token })
      .then(() => {
        localStorage.removeItem('resetPassword');
        navigate('/login');
      })
      .catch((err) => setError(err));
  };
>>>>>>> main

  useEffect(() => {
    if (!localStorage.getItem('resetPassword')) {
      navigate('/forgot-password', { replace: true });
    }
  }, [navigate]);

<<<<<<< HEAD
  useEffect(() => {
    return () => {
      dispatch(clearUserError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const resultAction = await dispatch(resetPassword({ password, token }));

    if (resetPassword.fulfilled.match(resultAction)) {
      localStorage.removeItem('resetPassword');
      navigate('/login', { replace: true });
    }
  };

  return (
    <ResetPasswordUI
      errorText={error || ''}
=======
  return (
    <ResetPasswordUI
      errorText={error?.message}
>>>>>>> main
      password={password}
      token={token}
      setPassword={setPassword}
      setToken={setToken}
      handleSubmit={handleSubmit}
    />
  );
};
