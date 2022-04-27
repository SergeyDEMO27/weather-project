export interface WeatherState {
  weather: {
    currentWeather: {
      temperature: number;
      windspeed: number;
      winddirection: string;
      weathercode: number;
    };
    eightDaysWeather: Array<{
      date: string;
      maxTemperature: number;
      minTemperature: number;
      weatherCode: number;
    }>;
    detailedDayWeather: Array<
      Array<{
        time: string;
        temperature: number;
        windSpeed: number;
        precipitation: number;
        weatherCode: number;
        pressure: number;
      }>
    >;
  };
  isLoading: boolean;
  error: null | string;
}

export enum GetWeatherActionTypes {
  GET_WEATHER = "GET_WEATHER",
  GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS",
  GET_WEATHER_ERROR = "GET_WEATHER_ERROR",
}

interface GetWeatherAction {
  type: GetWeatherActionTypes.GET_WEATHER;
}

interface GetWeatherSuccessAction {
  type: GetWeatherActionTypes.GET_WEATHER_SUCCESS;
  payload: {
    currentWeather: {
      temperature: number;
      windspeed: number;
      winddirection: string;
      weathercode: number;
    };
    eightDaysWeather: Array<{
      date: string;
      maxTemperature: number;
      minTemperature: number;
      weatherCode: number;
    }>;
    detailedDayWeather: Array<
      Array<{
        time: string;
        temperature: number;
        windSpeed: number;
        precipitation: number;
        weatherCode: number;
        pressure: number;
      }>
    >;
  };
}

interface GetWeatherErrorAction {
  type: GetWeatherActionTypes.GET_WEATHER_ERROR;
  payload: string;
}

export type WeatherAction =
  | GetWeatherAction
  | GetWeatherSuccessAction
  | GetWeatherErrorAction;
