import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "..";

describe("Timer Tests", () => {
  test("Check if it renders correctly", () => {
    render(<Timer />);

    expect(screen.getByTestId("timer-input-label")).toBeInTheDocument();
    expect(screen.getByTestId("timer-input")).toBeInTheDocument();
    expect(screen.getByTestId("start-button")).toBeInTheDocument();
    expect(screen.queryByTestId("halftime-marker")).not.toBeInTheDocument();
    expect(screen.getByTestId("completed-marker")).toBeInTheDocument();
    expect(screen.getByTestId("clock")).toBeInTheDocument();
    expect(screen.getByTestId("pause-play-timer")).toBeInTheDocument();
  });

  test("Timer works as intended", () => {
    render(<Timer />);

    const timerInput = screen.getByTestId("timer-input");
    const startButton = screen.getByTestId("start-button");
    fireEvent.change(timerInput, { target: { value: "1" } });
    fireEvent.click(startButton);
    setTimeout(
      () => expect(screen.getByTestId("halfway-marker")).toBeInTheDocument(),
      1000 * 32
    );
    setTimeout(
      () => expect(screen.getByTestId("completed-marker")).toBeInTheDocument(),
      1000 * 60
    );
  });

  test("Timer input does not register characters other than numbers", () => {
    render(<Timer />);

    const timerInput: HTMLInputElement = screen.getByTestId("timer-input");
    fireEvent.change(timerInput, { target: { value: "as-e^" } });
    expect(timerInput.value).toBe("");
  });

  test("Timer input stops on pause", (done) => {
    render(<Timer />);

    const timerInput = screen.getByTestId("timer-input");
    const startButton = screen.getByTestId("start-button");
    const pauseButton = screen.getByTestId("pause-play-timer");
    fireEvent.change(timerInput, { target: { value: "1" } });
    fireEvent.click(startButton);

    const clock = screen.getByTestId("clock");
    setTimeout(() => {
      fireEvent.click(pauseButton);
      done();
      const pausedClock = screen.getByTestId("clock");
      console.log(pausedClock.textContent);
      expect(clock.textContent).toBe(pausedClock.textContent);
    }, 1000 * 4);
  });

  test("snapshot test", () => {
    const { asFragment } = render(<Timer />);
    expect(asFragment).toMatchSnapshot();
  });
});
