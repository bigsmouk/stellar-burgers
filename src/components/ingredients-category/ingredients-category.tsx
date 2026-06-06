import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { IngredientsCategoryUI } from '../ui/ingredients-category';

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients, getIngredientCount }, ref) => {
  const ingredientsCounters = useMemo(
    () =>
      ingredients.reduce<{ [key: string]: number }>((acc, ingredient) => {
        acc[ingredient._id] = getIngredientCount(ingredient);
        return acc;
      }, {}),
    [ingredients, getIngredientCount]
  );

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
});
