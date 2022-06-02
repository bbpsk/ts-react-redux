import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './messageSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
