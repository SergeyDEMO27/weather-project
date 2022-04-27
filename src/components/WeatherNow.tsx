import React from "react";
import WeatherIcon from "./icons/WeatherIcon";
import SupportIcon from "./icons/SupportIcon";
import { getWeatherIconCode } from "../utils/getWeatherIconCode";
import { getWeatherDescription } from "../utils/getWeatherDescription";
import { getWindDirection } from "../utils/getWindDirection";
import "../style/WeatherNow.scss";

interface IWeatherNowProps {
  temperature: number;
  windspeed: number;
  winddirection: string;
  weathercode: number;
}

const WeatherNow: React.FC<IWeatherNowProps> = ({
  temperature,
  windspeed,
  winddirection,
  weathercode,
}) => {
  const currentWeatherCode = getWeatherIconCode(weathercode);
  const currentWeatherDescription = getWeatherDescription(weathercode);

  const arrowStyle = {
    transform: `rotate(${winddirection}deg)`,
  };

  const windString = getWindDirection(parseInt(winddirection, 10));
  const resultWindSpeed = windspeed.toString().slice(0, 3);

  return (
    <div className="weatherNow">
      <div className="weatherNow__wrapper">
        <h3 className="weatherNow__title">Сейчас</h3>
        <div className="weatherNow__container">
          <div className="weatherNow__icon">
            <WeatherIcon name={currentWeatherCode} />
          </div>
          <p className="weatherNow__description">{currentWeatherDescription}</p>
        </div>
      </div>
      <ul className="weatherNow__list">
        <li>
          <p className="weatherNow__list-title weatherNow__list-title--therm">
            Температура
          </p>
          <p className="weatherNow__list-description">
            {Math.floor(temperature)} &#176;C
          </p>
        </li>
        <li>
          <p className="weatherNow__list-title weatherNow__list-title--wind">
            Ветер
          </p>
          <p className="weatherNow__list-description">
            {resultWindSpeed} м/с
            <span>{windString}</span>
          </p>
          <div style={arrowStyle} className="weatherNow__list-arrow">
            <SupportIcon name="arrow" size={"13px"} viewbox={60} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherNow;
