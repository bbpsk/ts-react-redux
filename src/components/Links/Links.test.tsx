import { render, screen } from "../../utils/test-utils";
import Links from "./Links";

test("renders without crashing", () => {
  render(<Links />);
});

test("should have 9 links in the list", () => {
  render(<Links />);
  const list = screen.getAllByRole("link");
  expect(list).toHaveLength(10);
});
