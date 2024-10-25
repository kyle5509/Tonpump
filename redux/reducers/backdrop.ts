import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

export const BackdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop: (state, action) => {
      state.value = action.payload;
    },
    closeBackdrop: (state) => {
        state.value = ''
    }
  },
});

export const { openBackdrop, closeBackdrop} = BackdropSlice.actions
