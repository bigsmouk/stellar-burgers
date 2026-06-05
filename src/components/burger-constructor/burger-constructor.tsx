import { FC, useMemo } from 'react';
<<<<<<< HEAD
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { BurgerConstructorUI } from '@ui';
import {
  clearOrder,
  createOrder
} from '../../services/slices/orderSlice';
import { removeIngredient } from '../../services/slices/constructorSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { bun, ingredients } = useSelector(
    (state) => state.burgerConstructor
  );
  const { user } = useSelector((state) => state.user);
  const { orderRequest, orderData } = useSelector((state) => state.order);

  const constructorItems = {
    bun,
    ingredients: ingredients.map((item) => ({
      ...item,
      handleClose: () => dispatch(removeIngredient(item.id))
    }))
  };

  const onOrderClick = () => {
    if (!bun || orderRequest) {
      return;
    }

    if (!user) {
      navigate('/login', { state: { from: location } });
      return;
    }

    const ingredientIds = [
      bun._id,
      ...ingredients.map((item) => item._id),
      bun._id
    ];

    dispatch(createOrder(ingredientIds));
  };

  const closeOrderModal = () => {
    dispatch(clearOrder());
  };

  const price = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce(
      (sum, item) => sum + item.price,
      0
    );

    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);
=======
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = {
    bun: {
      price: 0
    },
    ingredients: []
  };

  const orderRequest = false;

  const orderModalData = null;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };
  const closeOrderModal = () => {};

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return null;
>>>>>>> main

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
<<<<<<< HEAD
      orderModalData={orderData}
=======
      orderModalData={orderModalData}
>>>>>>> main
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> main
