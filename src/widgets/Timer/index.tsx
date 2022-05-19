import React from "react";
import { Button } from "../../components";
import { useTimer } from "../../hooks";
import { SpeedControl } from "../SpeedControls";

const Timer = () => {
  const {
    handleChange,
    handleClick,
    handleStart,
    setSpeed,
    speed,
    count,
    timerValue,
    isComplete,
    hasStartedTimer,
  } = useTimer();

  return (
    <>
      <div className="flex justify-center mb-4">
        <label
          data-testid="timer-input-label"
          htmlFor="timer-input"
          className=" font-bold text-2xl pt-3 mr-3"
        >
          Countdown:
        </label>
        <input
          data-testid="timer-input"
          type="number"
          id="timer-input"
          max={99}
          required
          className="text-black border-2 border-black px-3 w-40"
          value={timerValue}
          onChange={(e) => handleChange(e)}
        />
        <Button
          type="submit"
          dataTestId="start-button"
          classes="border-2 text-white bg-green-600 p-2 px-5 ml-4 m-1"
          clickEventHandler={() => handleStart()}
          label="Start"
        />
      </div>

      {count.minutes * 60 + count.seconds <= (parseInt(timerValue) * 60) / 2 ? (
        <h4 data-testid="halftime-marker" className="pt-12 italic">
          More than halfway there!
        </h4>
      ) : isComplete ? (
        <h4 data-testid="completed-marker" className="pt-12 italic">
          Time's up!
        </h4>
      ) : null}

      <div className="flex justify-center items-center">
        <div className=" w-96 mr-9">
          <h1
            data-testid="clock"
            className={
              "font-black text-9xl p-12 " +
              (count.minutes === 0 && count.seconds <= 10 && !isComplete
                ? "animate-flicker"
                : "text-black")
            }
          >
            {("0" + count.minutes).slice(-2) +
              ":" +
              ("0" + count.seconds).slice(-2)}
          </h1>
        </div>

        <div>
          <Button
            type="submit"
            dataTestId="pause-play-timer"
            clickEventHandler={() => handleClick()}
            classes="h-14 w-14 font-black text-xl pb-1 bg-white rounded-full border-black border-4"
            label={hasStartedTimer ? "| |" : <>&#9654;</>}
          />
        </div>
      </div>

      <SpeedControl speed={speed} setSpeed={setSpeed} />
    </>
  );
};

export default Timer;
