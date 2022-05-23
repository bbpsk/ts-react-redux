import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
}
export const themeSlice = createSlice({
  name: 'darkTheme',
  initialState: initialState,
  reducers: {
    switchTheme: (state) => {
      state.value = !state.value;
    }
  }
})

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;