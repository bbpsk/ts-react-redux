import { render, screen } from "../../utils/test-utils";
import Home from "./Home";

test("renders without crashing", () => {
  render(<Home />);
});

test("initial message = Welcome", () => {
  render(<Home />);
  const message = screen.getByText("Welcome");
  expect(message).toBeInTheDocument();
});
