import { ProfileOrdersUI } from '@ui-pages';
<<<<<<< HEAD
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { fetchProfileOrders } from '../../services/slices/profileOrdersSlice';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.profileOrders.orders);

  useEffect(() => {
    dispatch(fetchProfileOrders());
  }, [dispatch]);
=======
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];
>>>>>>> main

  return <ProfileOrdersUI orders={orders} />;
};
