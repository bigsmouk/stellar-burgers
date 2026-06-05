<<<<<<< HEAD
import { TConstructorIngredient } from '../../services/slices/constructorSlice';

export type TBurgerConstructorIngredientWithHandleClose =
  TConstructorIngredient & {
    handleClose: () => void;
  };

export type BurgerConstructorElementProps = {
  ingredient: TBurgerConstructorIngredientWithHandleClose;
  index: number;
  totalItems: number;
  handleClose: () => void;
};
=======
import { TConstructorIngredient } from '@utils-types';

export type BurgerConstructorElementProps = {
  ingredient: TConstructorIngredient;
  index: number;
  totalItems: number;
};
>>>>>>> main
