import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render the same text passed into the render prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
