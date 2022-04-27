import React from "react";
import WeatherListItem from "./WeatherListItem";
import "../style/WeatherList.scss";

interface IWeatherListProps {
  eightDaysWeather: Array<{
    date: string;
    maxTemperature: number;
    minTemperature: number;
    weatherCode: number;
  }>;
  activeItem: string;
  onClickHandler: React.MouseEventHandler;
  onKeyDownHandler: (id: string) => React.KeyboardEventHandler;
}

const WeatherList: React.FC<IWeatherListProps> = ({
  onClickHandler,
  eightDaysWeather,
  activeItem,
  onKeyDownHandler,
}) => {
  return (
    <ul onClick={onClickHandler} className="weather-list">
      {eightDaysWeather.map(
        ({ date, maxTemperature, minTemperature, weatherCode }, index) => {
          return (
            <WeatherListItem
              activeItem={activeItem}
              id={index}
              key={date}
              date={date}
              maxTemperature={maxTemperature}
              minTemperature={minTemperature}
              weatherCode={weatherCode}
              onKeyDownHandler={onKeyDownHandler}
            />
          );
        }
      )}
    </ul>
  );
};

export default WeatherList;
