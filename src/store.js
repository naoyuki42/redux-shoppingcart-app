import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
