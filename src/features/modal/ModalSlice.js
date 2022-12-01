import { createSlice } from "@reduxjs/toolkit";

// 買い物かごの初期化
const initialState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isVisible = true;
    },
    closeModal: (state) => {
      state.isVisible = false;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
