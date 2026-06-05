import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======

>>>>>>> main
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
<<<<<<< HEAD
import ingredientsReducer from './slices/ingredientsSlice';
import burgerConstructorReducer from './slices/constructorSlice';
import userReducer from './slices/userSlice';
import orderReducer from './slices/orderSlice';
import feedReducer from './slices/feedSlice';
import profileOrdersReducer from './slices/profileOrdersSlice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    user: userReducer,
    order: orderReducer,
    feed: feedReducer,
    profileOrders: profileOrdersReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
=======

const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
>>>>>>> main
