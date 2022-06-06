import { render, screen } from "../../utils/test-utils";
import Timer from "./Timer";

test("renders without crashing", () => {
  render(<Timer />);
});

test("initial time = 0:00", () => {
  render(<Timer />);
  const time = screen.getByText("0:00");
  expect(time).toBeInTheDocument();
});
