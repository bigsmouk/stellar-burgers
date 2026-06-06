import { TIngredient } from '@utils-types';
import { TCreatedOrder } from '../../../services/slices/orderSlice';
import { TConstructorIngredient } from '../../../services/slices/constructorSlice';

export type TBurgerConstructorIngredientWithHandleClose =
  TConstructorIngredient & {
    handleClose: () => void;
  };

export type BurgerConstructorUIProps = {
  constructorItems: {
    bun: TIngredient | null;
    ingredients: TBurgerConstructorIngredientWithHandleClose[];
  };
  orderRequest: boolean;
  price: number;
  orderModalData: TCreatedOrder | null;
  onOrderClick: () => void;
  closeOrderModal: () => void;
};
