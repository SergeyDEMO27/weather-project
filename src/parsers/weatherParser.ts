// import roundTemperature from "../utils/tempRounding";

interface IcurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: string;
  weathercode: number;
}

interface Idaily {
  time: any[];
  temperature_2m_max: any[];
  temperature_2m_min: any[];
  weathercode: any[];
}

interface Ihourly {
  time: any[];
  temperature_2m: any[];
  windspeed_10m: any[];
  precipitation: any[];
  weathercode: any[];
  pressure_msl: any[];
}

const weatherParser = (
  current_weather: IcurrentWeather,
  daily: Idaily,
  hourly: Ihourly
) => {
  const chunkLength = 8;
  const eightDaysWeather: any[] = [];
  const detailedDayWeather: any[] = [];

  const result = {
    currentWeather: {
      temperature: current_weather.temperature,
      windspeed: current_weather.windspeed,
      winddirection: current_weather.winddirection,
      weathercode: current_weather.weathercode,
    },
    eightDaysWeather,
    detailedDayWeather,
  };

  for (let i = 0; i < daily.time.length; i += 1) {
    const dayWeather = {
      date: daily.time[i],
      maxTemperature: daily.temperature_2m_max[i],
      minTemperature: daily.temperature_2m_min[i],
      weatherCode: daily.weathercode[i],
    };
    result.eightDaysWeather.push(dayWeather);
  }

  const detailedWeatherFull = [];

  for (let i = 0; i < hourly.time.length; i += 3) {
    const detailedWeather = {
      time: hourly.time[i],
      temperature: Math.floor(hourly.temperature_2m[i]),
      windSpeed: hourly.windspeed_10m[i],
      precipitation: hourly.precipitation[i],
      weatherCode: hourly.weathercode[i],
      pressure: hourly.pressure_msl[i],
    };
    detailedWeatherFull.push(detailedWeather);
  }

  for (let i = 0; i < detailedWeatherFull.length; i += chunkLength) {
    result.detailedDayWeather.push(
      detailedWeatherFull.slice(i, i + chunkLength)
    );
  }

  return result;
};

export default weatherParser;
