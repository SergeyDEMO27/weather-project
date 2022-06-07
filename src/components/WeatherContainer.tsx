import React, { useEffect, useState } from 'react';
import { dispatchStore } from '../store';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getWeatherAction } from '../store/action-creators/weatherAction';
import WeatherNow from './WeatherNow';
import WeatherList from './WeatherList';
import WeatherDetailed from './WeatherDetailed';
import '../style/WeatherContainer.scss';

interface IWeatherContainerProps {
  selectedCityTitle: string;
}

const WeatherContainer: React.FC<IWeatherContainerProps> = ({ selectedCityTitle }) => {
  const { weather } = useTypedSelector((state) => state.weather);
  const { currentWeather, eightDaysWeather, detailedDayWeather } = weather;
  const { temperature, windspeed, winddirection, weathercode } = currentWeather;
  const [activeId, activeIdHandler] = useState('1');

  useEffect(() => {
    dispatchStore(getWeatherAction(selectedCityTitle));
  }, []);

  const onClickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const parentElement = e.target as HTMLElement;
    if (parentElement.closest('li') && parentElement.tagName !== 'ul') {
      activeIdHandler(parentElement.closest('li')!.id);
    }
  };

  const onKeyDownHandler = (id: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      activeIdHandler(id);
    }
  };

  return (
    <div className='weather-container'>
      <WeatherNow
        temperature={temperature}
        windspeed={windspeed}
        winddirection={winddirection}
        weathercode={weathercode}
      />
      {eightDaysWeather.length > 0 && (
        <WeatherList
          activeItem={activeId}
          onClickHandler={onClickHandler}
          eightDaysWeather={eightDaysWeather}
          onKeyDownHandler={onKeyDownHandler}
        />
      )}
      {detailedDayWeather.length > 0 && (
        <WeatherDetailed
          activeId={activeId}
          detailedDayWeather={detailedDayWeather[parseInt(activeId, 10)]}
        />
      )}
    </div>
  );
};

export default WeatherContainer;
