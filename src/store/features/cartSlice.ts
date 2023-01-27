import { createSelector, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import { Product } from '../../pages/Products/interfaces/Product';

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
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemAlreadyExists = state.items.some(
        item => item.product.id === action.payload.product.id,
      );

      if (!itemAlreadyExists) {
        state.items = [...state.items, action.payload];
      }

      state.isOpen = true;
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload.product.id,
      );
    },
    incrementItemAmount: (state, action: PayloadAction<CartItem>) => {
      const foundedItemToIncrement = state.items.findIndex(
        item => item.product.id === action.payload.product.id,
      );

      if (foundedItemToIncrement >= 0) {
        state.items[foundedItemToIncrement].qty += 1;
      }
    },
    decrementItemAmount: (state, action: PayloadAction<CartItem>) => {
      const foundedItemToDecrement = state.items.findIndex(
        item => item.product.id === action.payload.product.id,
      );

      if (foundedItemToDecrement >= 0) {
        state.items[foundedItemToDecrement].qty > 1
          ? (state.items[foundedItemToDecrement].qty -= 1)
          : (state.items[foundedItemToDecrement].qty = 1);
      }
    },
    openCart: state => {
      state.isOpen = true;
    },
    closeCart: state => {
      state.isOpen = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  closeCart,
  openCart,
  removeItem,
  incrementItemAmount,
  decrementItemAmount,
} = cartSlice.actions;

const items = (state: RootState) => state.cart.items;

export const totalValueFromCartSelector = createSelector([items], items => {
  return items.reduce(
    (total: number, item: CartItem) =>
      (total += item.qty * Number(item.product.price)),
    0,
  );
});
