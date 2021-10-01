import { Forecast } from '../interfaces/forecast';

const API_KEY = '0ea7a6f50f0282b54e96293809c27908';
const API_PATH = 'http://api.openweathermap.org/data/2.5';
const UNITS = 'units=metric';

const DUMMY_FORECAST: Forecast = {
  name: 'Lisbon',
  weather: {
    main: 'Rain',
    description: 'light rain',
    icon: '10n',
  },
  temperature: {
    temp: 18,
    maxTemp: 19,
    minTemp: 16.5,
  },
  wind: {
    title: 'Wind Status',
    speed: 20,
    direction: 320,
  },
  humidity: { title: 'Humidity', value: 60 },
  visibility: { title: 'visibility', value: 10000 },
  airPressure: { title: 'Air Pressure', value: 998 },
};

/* export const getCurrentForecast = async () => {
  const response = await fetch(
    `${API_PATH}/weather?q=Lisbon&appid=${API_KEY}&${UNITS}`
  );
  const data = await response.json();

  const ForecastObj: Forecast = {
    name: data.name,
    temperature: {
      temp: data.main.temp,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
    },
    wind: {
      speed: data.wind.speed,
      direction: data.wind.deg,
    },
    humidity: data.main.humidity,
    visibility: data.visibility,
    airPressure: data.main.pressure,
  };

  //console.log(ForecastObj);
  //console.log(data);

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  return ForecastObj;
}; */

export const getCurrentForecast = () => {
  return DUMMY_FORECAST;
};
