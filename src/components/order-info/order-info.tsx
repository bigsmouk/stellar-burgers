<<<<<<< HEAD
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
=======
import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = {
    createdAt: '',
    ingredients: [],
    _id: '',
    status: '',
    name: '',
    updatedAt: 'string',
    number: 0
  };

  const ingredients: TIngredient[] = [];

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;
>>>>>>> main

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
<<<<<<< HEAD

=======
>>>>>>> main
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
<<<<<<< HEAD
          acc[item].count += 1;
=======
          acc[item].count++;
>>>>>>> main
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
