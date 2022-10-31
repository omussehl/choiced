import React from "react";
import Navbar from "../navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

it("should render welcome text", async () => {
  render(<Navbar />);
  expect(screen.getByText("Choiced")).toBeInTheDocument();

  // const button = screen.getByRole("div");
  // await userEvent.click(button);
  // expect(screen.getByText("Your Profile")).toBeInTheDocument();
});
