import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../pages/Products/interfaces/Product';

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalValue: number;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  totalValue: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemAlreadyExists = state.items.some(
        item => item.product.id === action.payload.product.id,
      );

      if (!itemAlreadyExists) {
        state.items = [...state.items, action.payload];

        state.totalValue = state.items.reduce(
          (acc, item) => acc + Number(item.product.price) * item.qty,
          0,
        );
      }

      state.isOpen = true;
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload.product.id,
      );

      state.totalValue = state.items.reduce(
        (acc, item) => acc + Number(item.product.price) * item.qty,
        0,
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
export const { addItem, closeCart, openCart, removeItem, toggleCart } =
  cartSlice.actions;
