import React from "react";
import icons from "../../img/sprite-icons/icons.svg";
import "../../style/icons/Loader.scss";

const LoaderIcon: React.FC = () => {
  return (
    <div className="loader">
      <svg width="75px" viewBox="0 0 496 496">
        <use href={icons + "#icon-loader"} />
      </svg>
    </div>
  );
};

export default LoaderIcon;
