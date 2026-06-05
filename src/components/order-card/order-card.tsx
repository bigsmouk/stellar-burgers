import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { useSelector } from '../../services/store';
=======
>>>>>>> main

import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';
import { OrderCardUI } from '../ui/order-card';

const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = memo(({ order }) => {
  const location = useLocation();
<<<<<<< HEAD
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const orderInfo = useMemo(() => {
    if (!ingredients.length) {
      return null;
    }

    const ingredientsInfo = order.ingredients.reduce<TIngredient[]>(
      (acc, item) => {
        const ingredient = ingredients.find((ing) => ing._id === item);

        if (ingredient) {
          return [...acc, ingredient];
        }

=======

  /** TODO: взять переменную из стора */
  const ingredients: TIngredient[] = [];

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;

    const ingredientsInfo = order.ingredients.reduce(
      (acc: TIngredient[], item: string) => {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) return [...acc, ingredient];
>>>>>>> main
        return acc;
      },
      []
    );

    const total = ingredientsInfo.reduce((acc, item) => acc + item.price, 0);

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);

    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = new Date(order.createdAt);
<<<<<<< HEAD

=======
>>>>>>> main
    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, ingredients]);

<<<<<<< HEAD
  if (!orderInfo) {
    return null;
  }
=======
  if (!orderInfo) return null;
>>>>>>> main

  return (
    <OrderCardUI
      orderInfo={orderInfo}
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> main
