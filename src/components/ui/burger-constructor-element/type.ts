<<<<<<< HEAD
import { TConstructorIngredient } from '../../../services/slices/constructorSlice';

export type TBurgerConstructorIngredientWithHandleClose =
  TConstructorIngredient & {
    handleClose: () => void;
  };

export type BurgerConstructorElementUIProps = {
  ingredient: TBurgerConstructorIngredientWithHandleClose;
  index: number;
  totalItems: number;
  handleMoveUp?: () => void;
  handleMoveDown?: () => void;
  handleClose: () => void;
};
=======
import { TConstructorIngredient } from '@utils-types';

export type BurgerConstructorElementUIProps = {
  ingredient: TConstructorIngredient;
  index: number;
  totalItems: number;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
  handleClose: () => void;
};
>>>>>>> main
