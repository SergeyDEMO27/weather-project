import WeatherIcon from "./icons/WeatherIcon";
import { getWeatherIconCode } from "../utils/getWeatherIconCode";
import { createDate } from "../utils/createDate";
import { getWeatherDescription } from "../utils/getWeatherDescription";
import cn from "classnames";
import "../style/WeatherListItem.scss";

interface IWeatherListItemProps {
  id: number;
  date: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
  activeItem: string;
  onKeyDownHandler: (id: string) => React.KeyboardEventHandler;
}

const WeatherListItem: React.FC<IWeatherListItemProps> = ({
  activeItem,
  id,
  date,
  maxTemperature,
  minTemperature,
  weatherCode,
  onKeyDownHandler,
}) => {
  const scrollHandler = () => {
    document
      .getElementById("weatherDetailed")!
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const weatherItemClasses = cn("weather-list-item", {
    "weather-list-item-active":
      activeItem === id.toString() ||
      (id === 1 && parseInt(activeItem, 10) === 1),
  });

  const { weekDay, dayMonth } = createDate(date);
  const currentWeatherCode = getWeatherIconCode(weatherCode);
  const currentWeatherDescription = getWeatherDescription(weatherCode);

  const weekDayClasses = cn("weather-list-item-day", {
    "weather-list-item-holiday": weekDay === "вс" || weekDay === "сб",
  });

  const weekTodayClasses = cn("weather-list-item-today", {
    "weather-list-item-holiday": weekDay === "вс" || weekDay === "сб",
  });

  return (
    <li
      onClick={scrollHandler}
      id={id.toString()}
      onKeyDown={onKeyDownHandler(id.toString())}
      className={weatherItemClasses}
      tabIndex={0}
    >
      {id === 1 ? (
        <p className={weekTodayClasses}>Сегодня</p>
      ) : (
        <p className={weekDayClasses}>{weekDay}</p>
      )}
      {id === 1 ? null : <p className="weather-list-item-month">{dayMonth}</p>}
      <WeatherIcon name={currentWeatherCode} />
      <p className="weather-list-item-description">
        {currentWeatherDescription}
      </p>
      <div className="weather-list-item-container">
        <div>{Math.floor(maxTemperature)}</div>
        <div>{Math.floor(minTemperature)}</div>
      </div>
    </li>
  );
};

export default WeatherListItem;
