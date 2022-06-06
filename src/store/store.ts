import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './messageSlice';
import themeReducer from './themeSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    theme: themeReducer,
    timer: timerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
