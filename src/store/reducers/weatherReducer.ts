import {
  GetWeatherActionTypes,
  WeatherAction,
  WeatherState,
} from "../../types/weather";

const defaultState: WeatherState = {
  weather: {
    currentWeather: {
      temperature: 0,
      windspeed: 0,
      winddirection: "",
      weathercode: 0,
    },
    eightDaysWeather: [],
    detailedDayWeather: [],
  },
  isLoading: false,
  error: null,
};

export const weatherReducer = (
  state = defaultState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GetWeatherActionTypes.GET_WEATHER:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case GetWeatherActionTypes.GET_WEATHER_SUCCESS:
      return {
        error: null,
        isLoading: false,
        weather: action.payload,
      };
    case GetWeatherActionTypes.GET_WEATHER_ERROR:
      return {
        error: action.payload,
        isLoading: false,
        weather: {
          currentWeather: {
            temperature: 0,
            windspeed: 0,
            winddirection: "",
            weathercode: 0,
          },
          eightDaysWeather: [],
          detailedDayWeather: [],
        },
      };
    default:
      return state;
  }
};
