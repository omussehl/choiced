import React from "react";
import Description from "../description";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("check counter", () => {
  render(<Description />);
  expect(screen.getByText("Streaming Service")).toBeInTheDocument();
  expect(screen.getByText("Welcome to Choiced")).toBeInTheDocument();
});
