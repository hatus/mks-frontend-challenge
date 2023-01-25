import { createSelector, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../pages/Products/interfaces/Product';
import { RootState } from '../index';

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        item => item.product.id === action.payload.product.id,
      );
    },
    openCart: state => {
      state.isOpen = true;
    },
    closeCart: state => {
      state.isOpen = false;
    },
    toggleCart: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, closeCart, openCart, removeFromCart, toggleCart } =
  cartSlice.actions;
