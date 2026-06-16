import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { clearUserError, resetPassword } from '../../services/slices/userSlice';

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.user);

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('resetPassword')) {
      navigate('/forgot-password', { replace: true });
    }
  }, [navigate]);

  useEffect(
    () => () => {
      dispatch(clearUserError());
    },
    [dispatch]
  );

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
      password={password}
      token={token}
      setPassword={setPassword}
      setToken={setToken}
      handleSubmit={handleSubmit}
    />
  );
};
