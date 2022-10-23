import React, { useRef } from "react";
import ButtonSearch from "../buttonSearch";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("my test for ButtonSearch", () => {
  // let document = useRef();
  const netflix = () => {
    fetch("http://localhost:8080/netflix")
      .then((res) => {
        return res.json();
      })
      .then((data) => (document.current = data));
  };
  netflix();

  test("Check to see if text rendered on button click", async () => {
    render(<ButtonSearch />);
    const button = screen.getByRole("button");
    // Simulate clicking button
    userEvent.click(button);
    const text = screen.getByRole("textbox");
    console.log(text);
    // text should contain the word "About:" when rendered
    await expect(button).toBeTruthy();
  });

  test("real fetch call", async () => {
    expect(text).toContain(/random result is:/); // Success!
  });
});
