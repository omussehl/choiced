import React from "react";
import Nav from "../navbar";
import { render, screen } from "@testing-library/react";

it("should render welcome text", async () => {
  render(<Nav />);
  expect(screen.getByText("Choiced")).toBeInTheDocument();
});
