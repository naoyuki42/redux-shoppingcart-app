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
  },
});

export default cartSlice.reducer;
export const { clearCart } = cartSlice.actions;
