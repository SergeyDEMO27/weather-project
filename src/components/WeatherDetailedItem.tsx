import React from "react";
import WeatherIcon from "./icons/WeatherIcon";
import "../style/WeatherDetailedItem.scss";

interface IWeatherDetailedItemProps {
  time: string;
  temperature: number;
  windSpeed: number;
  precipitation: number;
  currentWeatherCode: number;
  currentPressure: number;
  currentWeatherDescription: string;
}

const WeatherDetailedItem: React.FC<IWeatherDetailedItemProps> = ({
  time,
  temperature,
  windSpeed,
  precipitation,
  currentPressure,
  currentWeatherCode,
  currentWeatherDescription,
}) => {
  return (
    <li className="weather-detailed-item" key={time}>
      <ul>
        <li>
          <p className="weather-detailed-item__time">{time.split("T")[1]}</p>
          <WeatherIcon name={currentWeatherCode} />
          <p className="weather-detailed-item__weather">
            {currentWeatherDescription}
          </p>
        </li>
        <li className="weather-detailed-item__icon">
          <div className="weather-detailed-item__title">температура</div>
          <div className="weather-detailed-item__temp"></div>
          <p className="weather-detailed-item__description">
            {temperature} &#176;C
          </p>
        </li>
        <li className="weather-detailed-item__icon">
          <div className="weather-detailed-item__title">ветер</div>
          <div className="weather-detailed-item__wind"></div>
          <p className="weather-detailed-item__description">{windSpeed} м/с</p>
        </li>
        <li className="weather-detailed-item__icon">
          <div className="weather-detailed-item__title">осадки</div>
          <div className="weather-detailed-item__precip"></div>
          <p className="weather-detailed-item__description">
            {precipitation} мм
          </p>
        </li>
        <li className="weather-detailed-item__icon">
          <div className="weather-detailed-item__title">давление</div>
          <div className="weather-detailed-item__pressure"></div>
          <p className="weather-detailed-item__description">
            {currentPressure} мм
          </p>
        </li>
      </ul>
    </li>
  );
};

export default WeatherDetailedItem;
