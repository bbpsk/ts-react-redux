import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  value: "Welcome",
};
const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    allCaps: (state) => {
      state.value = state.value.toUpperCase();
    },
    changeMessage: (state, action) => {
      state.value = action.payload;
    },
    addToMessage: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { allCaps, changeMessage, addToMessage } = messageSlice.actions;
export default messageSlice.reducer;
//Selectors
export const selectMessage = (state: RootState) => state.message.value;
