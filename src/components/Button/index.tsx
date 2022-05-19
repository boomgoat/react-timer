import React from "react";

type ButtonProps = {
  clickEventHandler: () => void;
  dataTestId?: string;
  label: string | React.ReactNode;
  classes?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  clickEventHandler,
  label,
  classes,
  type,
  dataTestId,
}) => {
  return (
    <button
      type={type}
      data-testid={dataTestId}
      className={classes}
      onClick={() => clickEventHandler()}
    >
      {label}
    </button>
  );
};
