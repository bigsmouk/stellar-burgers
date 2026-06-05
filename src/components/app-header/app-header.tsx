import { FC } from 'react';
import { AppHeaderUI } from '@ui';
<<<<<<< HEAD
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const userName = useSelector((state) => state.user.user?.name || '');

  return <AppHeaderUI userName={userName} />;
};
=======

export const AppHeader: FC = () => <AppHeaderUI userName='' />;
>>>>>>> main
