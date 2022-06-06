import React from "react";
import { render } from "./utils/test-utils";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});
