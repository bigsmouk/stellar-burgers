import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderBurgerApi } from '../../utils/burger-api';
import { clearConstructor } from './constructorSlice';

export type TCreatedOrder = {
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
};

interface OrderState {
  orderData: TCreatedOrder | null;
  orderRequest: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orderData: null,
  orderRequest: false,
  error: null
};

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (ingredientIds: string[], { dispatch }) => {
    const response = await orderBurgerApi(ingredientIds);
    dispatch(clearConstructor());
    return response.order;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.orderData = null;
      state.orderRequest = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderData = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message || 'Ошибка оформления заказа';
      });
  }
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
