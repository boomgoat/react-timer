import React from "react";
import { Button } from "../../components";

type SpeedCOntrolProps = {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
};

export const SpeedControl: React.FC<SpeedCOntrolProps> = ({
  setSpeed,
  speed,
}) => {
  return (
    <div className="flex justify-center">
      <Button
        dataTestId="1.0x-button"
        type="submit"
        classes={
          "border-2 border-black p-2 m-1 " +
          (speed === 1 ? " bg-green-900 text-white" : "bg-white")
        }
        clickEventHandler={() => setSpeed(1)}
        label="1.0x"
      />
      <Button
        dataTestId="1.5x-button"
        type="submit"
        classes={
          "border-2 border-black p-2 m-1 " +
          (speed === 1.5 ? " bg-green-900 text-white" : "bg-white")
        }
        clickEventHandler={() => setSpeed(1.5)}
        label="1.5x"
      />
      <Button
        dataTestId="2.0x-button"
        type="submit"
        classes={
          "border-2 border-black p-2 m-1 " +
          (speed === 2 ? " bg-green-900 text-white" : "bg-white")
        }
        clickEventHandler={() => setSpeed(2)}
        label="2.0x"
      />
    </div>
  );
};
