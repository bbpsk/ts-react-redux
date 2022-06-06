import { fireEvent, render, screen } from "../../utils/test-utils";
import ReduxExs from "./ReduxExs";

test("renders without crashing", () => {
  render(<ReduxExs />);
});

test("initial message = Welcome", () => {
  render(<ReduxExs />);
  const message = screen.getByPlaceholderText("Welcome");
  expect(message).toBeInTheDocument();
});

test("initial switch = off", () => {
  render(<ReduxExs />);
  const toggle = screen.getByRole("switch");
  expect(toggle).not.toBeChecked();
});

test("initial buttons - pause is disabled", () => {
  render(<ReduxExs />);
  expect(screen.getByText("Pause")).toBeDisabled();
  expect(screen.getByText("Start")).not.toBeDisabled();
});

test("start should be disabled after clicked", () => {
  render(<ReduxExs />);
  fireEvent.click(screen.getByText("Start"));
  expect(screen.getByText("Start")).toBeDisabled();
  expect(screen.getByText("Pause")).not.toBeDisabled();
});
