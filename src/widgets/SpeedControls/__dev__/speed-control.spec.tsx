import React from "react";
import { render, screen } from "@testing-library/react";
import { SpeedControl } from "..";

describe("Speed Control Tests", () => {
  const setSpeed = () => {};

  test("speed set to 1.0x", () => {
    const speed: number = 1;
    render(<SpeedControl speed={speed} setSpeed={setSpeed} />);

    expect(screen.getByTestId("1.0x-button")).toHaveClass("bg-green-900");
    expect(screen.getByTestId("1.5x-button")).not.toHaveClass("bg-green-900");
    expect(screen.getByTestId("2.0x-button")).not.toHaveClass("bg-green-900");
  });

  test("speed set to 1.5x", () => {
    const speed: number = 1.5;
    render(<SpeedControl speed={speed} setSpeed={setSpeed} />);

    expect(screen.getByTestId("1.0x-button")).not.toHaveClass("bg-green-900");
    expect(screen.getByTestId("1.5x-button")).toHaveClass("bg-green-900");
    expect(screen.getByTestId("2.0x-button")).not.toHaveClass("bg-green-900");
  });

  test("speed set to 2.0x", () => {
    const speed: number = 2;
    render(<SpeedControl speed={speed} setSpeed={setSpeed} />);

    expect(screen.getByTestId("1.0x-button")).not.toHaveClass("bg-green-900");
    expect(screen.getByTestId("1.5x-button")).not.toHaveClass("bg-green-900");
    expect(screen.getByTestId("2.0x-button")).toHaveClass("bg-green-900");
  });

  test("snapshot test", () => {
    const speed: number = 1;
    const { asFragment } = render(
      <SpeedControl speed={speed} setSpeed={setSpeed} />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
