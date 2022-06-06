import { render, screen, fireEvent } from "../../utils/test-utils";
import Navbar from "./Navbar";

const mockNav = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNav,
  useLocation: () => {
    return { pathname: "" };
  },
}));

test("renders without crashing", () => {
  render(<Navbar />);
});

test("should navigate on button click", () => {
  render(<Navbar />);
  const linksBtn = screen.getByText("Links");
  fireEvent.click(linksBtn);
  expect(mockNav).toHaveBeenCalledWith("/links");
});
