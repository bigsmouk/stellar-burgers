import { FC, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { fetchFeedOrders } from '../../services/slices/feedSlice';
import { fetchProfileOrders } from '../../services/slices/profileOrdersSlice';

export const OrderInfo: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const feedOrders = useSelector((state) => state.feed.orders);
  const profileOrders = useSelector((state) => state.profileOrders.orders);

  const isProfileOrderPage = location.pathname.startsWith('/profile/orders');

  const orders = isProfileOrderPage ? profileOrders : feedOrders;

  useEffect(() => {
    if (isProfileOrderPage && !profileOrders.length) {
      dispatch(fetchProfileOrders());
    }

    if (!isProfileOrderPage && !feedOrders.length) {
      dispatch(fetchFeedOrders());
    }
  }, [dispatch, isProfileOrderPage, profileOrders.length, feedOrders.length]);

  const orderData = useMemo(
    () => orders.find((order) => order.number === Number(id)) || null,
    [orders, id]
  );

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) {
      return null;
    }

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);

          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count += 1;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
