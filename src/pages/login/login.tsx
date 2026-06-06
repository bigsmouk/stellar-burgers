import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { clearUserError, loginUser } from '../../services/slices/userSlice';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from =
    (location.state as { from?: { pathname: string } } | null)?.from
      ?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearUserError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(loginUser({ email, password }));
  };

  return (
    <LoginUI
      errorText={error || ''}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
