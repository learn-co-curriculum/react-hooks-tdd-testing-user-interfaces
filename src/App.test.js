import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);

  logRoles(container);

  const linkElement = screen.getByRole("link", { name: /learn react/i });

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "https://reactjs.org");
});
