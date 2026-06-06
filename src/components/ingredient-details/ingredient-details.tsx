import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  const { id } = useParams();
  const { ingredients, loading } = useSelector((state) => state.ingredients);

  const ingredientData = useMemo(
    () => ingredients.find((item) => item._id === id) || null,
    [ingredients, id]
  );

  if (loading) {
    return <Preloader />;
  }

  if (!ingredientData) {
    return (
      <p className='text text_type_main-medium pt-10'>Ингредиент не найден</p>
    );
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
