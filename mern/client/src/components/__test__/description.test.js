import React from "react";
import Description from "../description";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("check counter", () => {
  render(<Description />);
  expect(screen.getByText("Streaming Service")).toBeInTheDocument();
  expect(screen.getByText("Welcome to Choiced")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Choiced is a site that helps with some of the most difficult decisions one can have, such as deciding what to watch. There are so many options on each streaming service, and we want to make this as frictionless as possible."
    )
  ).toBeInTheDocument();
});
