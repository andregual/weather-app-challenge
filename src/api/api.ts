import { Forecast } from '../interfaces/forecast';

const API_KEY = process.env.REACT_APP_API_KEY; // UNSAFE
const API_PATH = process.env.REACT_APP_API_URL;
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

export const getCurrentForecast = async (): Promise<Forecast> => {
  const response = await fetch(
    `${API_PATH}/weather?q=Lisbon&appid=${API_KEY}&${UNITS}`
  );
  const data = await response.json();

  const ForecastObj: Forecast = {
    name: data.name,
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    },
    temperature: {
      temp: data.main.temp,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
    },
    wind: {
      title: 'Wind Status',
      speed: data.wind.speed,
      direction: data.wind.deg,
    },
    humidity: { title: 'Humidity', value: data.main.humidity },
    visibility: { title: 'visibility', value: data.visibility },
    airPressure: { title: 'Air Pressure', value: data.main.pressure },
  };

  console.log(ForecastObj);
  //console.log(data);

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  return ForecastObj;
};

/* export const getCurrentForecast = () => {
  return DUMMY_FORECAST;
}; */
