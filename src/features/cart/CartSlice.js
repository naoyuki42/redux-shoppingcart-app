import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: cartItems.map((i) => i.price).reduce((acc, elm) => acc + elm),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: () => {
      return {
        cartItems: [],
        amount: 0,
        total: 0,
      };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      ++cartItem.amount;
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      --cartItem.amount;
    },
    calculateAmountTotal: (state) => {
      state.amount = state.cartItems
        .map((item) => item.amount)
        .reduce((acc, elm) => acc + elm, 0);
      state.total = state.cartItems
        .map((item) => item.amount * item.price)
        .reduce((acc, elm) => acc + elm, 0);
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateAmountTotal,
} = cartSlice.actions;
