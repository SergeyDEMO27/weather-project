import React from "react";
import icons from "../../img/sprite-icons/icons.svg";
import cn from "classnames";

interface IFormIconProps {
  name?: string;
  color?: string;
  size?: string;
  opacity?: string;
  notEmptyInput?: string;
}

const FormIcon: React.FC<IFormIconProps> = ({
  name,
  color,
  size,
  opacity,
  notEmptyInput,
}) => {
  const loupeClasses = cn("form__icon-loupe", {
    scale: notEmptyInput,
  });

  return (
    <div className={loupeClasses}>
      <svg
        style={{ position: "absolute" }}
        width={size}
        viewBox="0 0 176 176"
        fill={color}
        opacity={opacity}
      >
        <use href={icons + `#icon-${name}`} />
      </svg>
    </div>
  );
};

export default FormIcon;
