import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  primaryColor: 'orchid'
}
export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
    changePrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    }
  }
})

export const {toggleTheme, changePrimaryColor} = themeSlice.actions;
export default themeSlice.reducer;