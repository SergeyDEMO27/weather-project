import React from "react";
import WeatherDetailedItem from "./WeatherDetailedItem";
import { getWeatherIconCode } from "../utils/getWeatherIconCode";
import { getWeatherDescription } from "../utils/getWeatherDescription";
import cn from "classnames";
import "../style/WeatherDetailed.scss";

interface IWeatherDetailedProps {
  activeId: string;
  detailedDayWeather: Array<{
    time: string;
    temperature: number;
    windSpeed: number;
    precipitation: number;
    weatherCode: number;
    pressure: number;
  }>;
}

const WeatherDetailed: React.FC<IWeatherDetailedProps> = ({
  activeId,
  detailedDayWeather,
}) => {
  const weatherClasses = cn("weather-detailed", {
    "weather-detailed--first": parseInt(activeId, 10) === 0,
    "weather-detailed--last": parseInt(activeId, 10) === 7,
  });

  return (
    <div className={weatherClasses} id="weatherDetailed">
      <ul className="weather-detailed__list">
        {detailedDayWeather.map(
          ({
            time,
            temperature,
            windSpeed,
            precipitation,
            weatherCode,
            pressure,
          }) => {
            const currentWeatherCode = getWeatherIconCode(weatherCode);
            const currentWeatherDescription =
              getWeatherDescription(weatherCode);
            const currentPressure = Math.floor(pressure / 1.333) - 1;

            return (
              <WeatherDetailedItem
                key={time}
                time={time}
                currentWeatherCode={currentWeatherCode}
                currentWeatherDescription={currentWeatherDescription}
                temperature={temperature}
                windSpeed={windSpeed}
                precipitation={precipitation}
                currentPressure={currentPressure}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default WeatherDetailed;
