import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
<<<<<<< HEAD
  ({ ingredient, index, totalItems, handleClose }) => (
    <BurgerConstructorElementUI
      ingredient={ingredient}
      index={index}
      totalItems={totalItems}
      handleClose={handleClose}
      handleMoveUp={() => {}}
      handleMoveDown={() => {}}
    />
  )
);
=======
  ({ ingredient, index, totalItems }) => {
    const handleMoveDown = () => {};

    const handleMoveUp = () => {};

    const handleClose = () => {};

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
>>>>>>> main
