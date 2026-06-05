<<<<<<< HEAD
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
=======
import { FC } from 'react';
>>>>>>> main
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
<<<<<<< HEAD
  const { id } = useParams();
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  const ingredientData = useMemo(
    () => ingredients.find((item) => item._id === id) || null,
    [ingredients, id]
  );
=======
  /** TODO: взять переменную из стора */
  const ingredientData = null;
>>>>>>> main

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
