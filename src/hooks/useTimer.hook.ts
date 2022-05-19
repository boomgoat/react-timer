import { useState, useEffect } from "react";

export const useTimer = () => {
  const [count, setCount] = useState<Record<string, number>>({
    minutes: 0,
    seconds: 0,
  });
  const [timerValue, setTimerValue] = useState("");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [hasStartedTimer, setHasStartedTimer] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  useEffect(() => {
    if (count.minutes === 0 && count.seconds === 0) {
      setIsComplete(true);
      setHasStartedTimer(false);
    } else if (!isComplete && hasStartedTimer) {
      if (count.seconds === 0 && count.minutes !== 0)
        setCount({
          minutes: count.minutes - 1,
          seconds: 59,
        });
      else
        setTimeout(
          () => setCount({ ...count, seconds: count.seconds - 1 }),
          1000 / speed
        );
    }
  }, [count, isComplete, hasStartedTimer, speed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsComplete(false);
    const regex = /(^[0-9]+$|^$)/;
    if (parseInt(e.target.value) >= 0 && regex.test(e.target.value)) {
      setTimerValue(e.target.value);
      // setCount({ minutes: parseInt(e.target.value), seconds: 0 });
    }
  };

  const handleClick = () => {
    // setCount({ minutes: parseInt(timerValue), seconds: 0 });
    setHasStartedTimer(!hasStartedTimer);
    // setIsComplete(!isComplete);
  };

  const handleStart = () => {
    setCount({ minutes: parseInt(timerValue), seconds: 0 });
    setHasStartedTimer(true);
    setIsComplete(false);
  };

  return {
    handleChange,
    handleClick,
    handleStart,
    setSpeed,
    speed,
    count,
    timerValue,
    isComplete,
    hasStartedTimer,
  };
};
