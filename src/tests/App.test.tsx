import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the greeting", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});

test("demo", () => {
  expect(true).toBe(true);
});
