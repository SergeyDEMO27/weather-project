import React from "react";
import icons from "../../img/sprite-icons/icons.svg";

interface ISupportIconProps {
  name: string;
  size: string;
  viewbox?: number;
}

const SupportIcon: React.FC<ISupportIconProps> = ({ name, size, viewbox }) => {
  if (!viewbox) {
    return (
      <div>
        <svg width={size}>
          <use href={icons + `#icon-${name}`} />
        </svg>
      </div>
    );
  }
  const resultViewbox = `0 0 ${viewbox} ${viewbox}`;

  return (
    <div>
      <svg width={size} viewBox={resultViewbox}>
        <use href={icons + `#icon-${name}`} />
      </svg>
    </div>
  );
};

export default SupportIcon;
