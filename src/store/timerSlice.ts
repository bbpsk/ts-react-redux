import { createSlice } from "@reduxjs/toolkit";
import differenceInSeconds from 'date-fns/differenceInSeconds'

const initialState = {
  startTime: new Date().getTime(),
  offset: 0,
  isRunning: false,
};
const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    start: (state) => {
      state.isRunning = true;
      state.startTime = new Date().getTime();
    },
    pause: (state) => {
      state.isRunning = false;
      state.offset = differenceInSeconds(new Date(), state.startTime) + state.offset; //store seconds already elapsed
    },
    reset: (state) => {
      state.isRunning = false;
      state.offset = 0;
    }
  },
});

export const {start, pause, reset} = timerSlice.actions;
export default timerSlice.reducer;