<<<<<<< HEAD
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { clearUserError, registerUser } from '../../services/slices/userSlice';

export const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error } = useSelector((state) => state.user);

=======
import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';

export const Register: FC = () => {
>>>>>>> main
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< HEAD
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearUserError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await dispatch(
      registerUser({
        name: userName,
        email,
        password
      })
    );
=======
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
>>>>>>> main
  };

  return (
    <RegisterUI
<<<<<<< HEAD
      errorText={error || ''}
=======
      errorText=''
>>>>>>> main
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
