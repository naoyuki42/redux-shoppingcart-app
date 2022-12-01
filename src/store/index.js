import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/CartSlice";
import ModalSlice from "../features/modal/ModalSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: ModalSlice,
  },
});

export default store;
