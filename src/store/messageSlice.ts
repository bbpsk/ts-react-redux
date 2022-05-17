import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Welcome',
}
export const messageSlice = createSlice({
  name: 'message',
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
    }
  }
})
export const {allCaps, changeMessage, addToMessage} = messageSlice.actions;

export default messageSlice.reducer;
