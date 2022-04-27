import React from "react";
import cn from "classnames";
import "../../style/UI/ButtonClear.scss";

interface IButtonClearProps {
  notEmptyInput: string;
  inputAvailibiliy: boolean;
  clearInputHandler: () => void;
}

const ButtonClear: React.FC<IButtonClearProps> = ({
  clearInputHandler,
  notEmptyInput,
  inputAvailibiliy,
}) => {
  const clearClasses = cn("buttonClear", {
    buttonClearShow: notEmptyInput,
  });

  return (
    <button
      onClick={clearInputHandler}
      className={clearClasses}
      type="button"
      disabled={inputAvailibiliy}
    />
  );
};

export default ButtonClear;
