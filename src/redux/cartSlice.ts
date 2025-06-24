import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../types';

interface CartState {
  items: Product[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems = state.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalItems = state.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;