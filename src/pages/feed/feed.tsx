<<<<<<< HEAD
import { FC, useEffect } from 'react';
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { useDispatch, useSelector } from '../../services/store';
import { fetchFeedOrders } from '../../services/slices/feedSlice';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchFeedOrders());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(fetchFeedOrders());
  };

  if (loading && !orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
=======
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];

  if (!orders.length) {
    return <Preloader />;
  }

  <FeedUI orders={orders} handleGetFeeds={() => {}} />;
>>>>>>> main
};
