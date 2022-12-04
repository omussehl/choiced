import React from "react";
import DisneySearch from "../disneySearch";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("my test for DisneySearch", () => {
  test("Check to see if correct text is there", async () => {
    render(<DisneySearch />);
    expect(screen.getByText("Disney+")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
  });
});
