import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './messageSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    darkTheme: themeReducer
  },
})
