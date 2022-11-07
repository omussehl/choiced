import React from "react";
import DisneySearch from "../disneySearch";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("my test for ButtonSearch", () => {
  test("Check to see if text rendered on button click", async () => {
    render(<DisneySearch />);
    const button = screen.getByRole("button");
    // Simulate clicking button
    await userEvent.click(button);

    // text should contain the word "About:" when rendered
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });
  test("make sure text rendered", async () => {
    render(<DisneySearch />);

    expect(screen.getByText("Disney+")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
  });
});
