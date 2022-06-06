import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import messageReducer from "../store/messageSlice";
import themeReducer from "../store/themeSlice";
import timerReducer from "../store/timerSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    theme: themeReducer,
    timer: timerReducer,
  },
});

const TestingState = (props: { children: any }) => {
  return <Provider store={store}>{props.children}</Provider>;
};
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: TestingState, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
