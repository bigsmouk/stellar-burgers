import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from '../../services/store';
import { logoutUser } from '../../services/slices/userSlice';

export const ProfileMenu: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = async () => {
    const resultAction = await dispatch(logoutUser());

    if (logoutUser.fulfilled.match(resultAction)) {
      navigate('/login', { replace: true });
    }
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
