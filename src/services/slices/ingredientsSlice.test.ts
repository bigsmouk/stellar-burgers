import ingredientsReducer, {
  initialState,
  fetchIngredients
} from './ingredientsSlice';
import { TIngredient } from '../../utils/types';

const mockIngredients: TIngredient[] = [
  {
    _id: '1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'image.jpg',
    image_mobile: 'image-mobile.jpg',
    image_large: 'image-large.jpg'
  },
  {
    _id: '2',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'image2.jpg',
    image_mobile: 'image2-mobile.jpg',
    image_large: 'image2-large.jpg'
  }
];

describe('ingredientsSlice reducer', () => {
  it('должен вернуть initialState для неизвестного экшена', () => {
    expect(ingredientsReducer(undefined, { type: 'UNKNOWN' })).toEqual(
      initialState
    );
  });

  it('должен обработать fetchIngredients.pending', () => {
    const state = ingredientsReducer(
      initialState,
      fetchIngredients.pending('', undefined)
    );

    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it('должен обработать fetchIngredients.fulfilled', () => {
    const state = ingredientsReducer(
      {
        ...initialState,
        loading: true
      },
      fetchIngredients.fulfilled(mockIngredients, '', undefined)
    );

    expect(state).toEqual({
      ingredients: mockIngredients,
      loading: false,
      error: null
    });
  });

  it('должен обработать fetchIngredients.rejected', () => {
    const action = fetchIngredients.rejected(
      new Error('Ошибка загрузки'),
      '',
      undefined
    );

    const state = ingredientsReducer(
      {
        ...initialState,
        loading: true
      },
      action
    );

    expect(state).toEqual({
      ingredients: [],
      loading: false,
      error: 'Ошибка загрузки'
    });
  });
});