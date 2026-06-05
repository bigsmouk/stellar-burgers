import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from '../../services/store';
import { updateUser } from '../../services/slices/userSlice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
=======

export const Profile: FC = () => {
  /** TODO: взять переменную из стора */
  const user = {
    name: '',
    email: ''
  };

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
>>>>>>> main
    password: ''
  });

  useEffect(() => {
<<<<<<< HEAD
    setFormValue({
      name: user?.name || '',
      email: user?.email || '',
      password: ''
    });
  }, [user]);

  const isFormChanged =
    formValue.name !== (user?.name || '') ||
    formValue.email !== (user?.email || '') ||
    !!formValue.password;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const userData = {
      name: formValue.name,
      email: formValue.email,
      ...(formValue.password ? { password: formValue.password } : {})
    };

    const resultAction = await dispatch(updateUser(userData));

    if (updateUser.fulfilled.match(resultAction)) {
      setFormValue({
        name: resultAction.payload.name,
        email: resultAction.payload.email,
        password: ''
      });
    }
=======
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
>>>>>>> main
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD

    setFormValue({
      name: user?.name || '',
      email: user?.email || '',
=======
    setFormValue({
      name: user.name,
      email: user.email,
>>>>>>> main
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
<<<<<<< HEAD
=======

  return null;
>>>>>>> main
};
