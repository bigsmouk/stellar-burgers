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
  };

  return (
    <ForgotPasswordUI
      errorText={error || ''}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
