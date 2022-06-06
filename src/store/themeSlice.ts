import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  isDark: false,
  primaryColor: 'orchid'
}
const themeSlice = createSlice({
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
//Selectors
export const selectTheme = (state: RootState) => state.theme;
export const selectDarkTheme = (state: RootState) => state.theme.isDark;