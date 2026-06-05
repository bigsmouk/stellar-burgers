import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch } from '../../services/store';
import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
import { addIngredient } from '../../services/slices/constructorSlice';
=======

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
>>>>>>> main

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient, count }) => {
    const location = useLocation();
<<<<<<< HEAD
    const dispatch = useDispatch();

    const handleAdd = () => {
      dispatch(addIngredient(ingredient));
    };
=======

    const handleAdd = () => {};
>>>>>>> main

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
      />
    );
  }
);
