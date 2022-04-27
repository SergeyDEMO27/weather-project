import React from "react";
import icons from "../../img/sprite-icons/icons.svg";

interface IWeatherIconProps {
  name: number;
}

const WeatherIcon: React.FC<IWeatherIconProps> = ({ name }) => {
  return (
    <div>
      <svg width="60px" height="50px" viewBox="0 0 30 27" color="plum">
        <use href={icons + `#icon-${name}`} />
      </svg>
    </div>
  );
};

export default WeatherIcon;
