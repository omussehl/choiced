import React from "react";
import PrimeSearch from "../primeVideoSearch";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

render(<PrimeSearch />);
const button = screen.getByRole("button");

describe("my test for ButtonSearch", () => {
  test("Check to see if text rendered on button click", async () => {
    // Simulate clicking button
    await userEvent.click(button);
    // text should contain the word "About:" when rendered
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });
});
