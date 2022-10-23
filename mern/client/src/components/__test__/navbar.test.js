import React from "react";
import Nav from "../navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render welcome text", async () => {
  render(<Nav />);
  expect(screen.getByText("Choiced")).toBeInTheDocument();
});
