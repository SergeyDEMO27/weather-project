import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import axios from 'axios';
import { GetWeatherActionTypes } from '../../types/weather';
import citiesParser from '../../parsers/citiesParser';
import weatherParser from '../../parsers/weatherParser';

export const getWeatherAction = (value: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({ type: GetWeatherActionTypes.GET_WEATHER });
      const locationResponse = await axios.get(
        `https://geocode.search.hereapi.com/v1/geocode?q=${value}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
      );
      const { position } = citiesParser(locationResponse.data)[0];
      const { latitude, longtitude } = position;

      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature_2m,pressure_msl,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow&past_days=1`
      );
      const parsedWeather = weatherParser(
        weatherResponse.data.current_weather,
        weatherResponse.data.daily,
        weatherResponse.data.hourly
      );
      dispatch({
        type: GetWeatherActionTypes.GET_WEATHER_SUCCESS,
        payload: parsedWeather,
      });
    } catch (e) {
      dispatch({
        type: GetWeatherActionTypes.GET_WEATHER_ERROR,
        payload: 'Произошла ошибка при загрузке погоды',
      });
    }
  };
};
