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
      return {
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
        amount: state.amount - 1,
        total:
          state.total -
          state.cartItems.find((item) => item.id === itemId).price,
      };
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem } = cartSlice.actions;
