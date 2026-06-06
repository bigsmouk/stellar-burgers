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
};
