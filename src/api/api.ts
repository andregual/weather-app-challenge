import { Forecast } from '../interfaces/forecast';
import { Temperature } from '../interfaces/temperature';

const API_KEY = process.env.REACT_APP_API_KEY; // UNSAFE
const API_PATH = process.env.REACT_APP_API_URL;
const UNITS = 'units=metric';

export const getForecast = async (): Promise<Forecast> => {
  const response = await fetch(
    `${API_PATH}/weather?q=Lisbon&appid=${API_KEY}&${UNITS}`
  );
  const data = await response.json();

  const forecastObj: Forecast = {
    coord: {
      lat: data.coord.lat,
      lon: data.coord.lon,
    },
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
    daily: null,
  };

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  const responseWeekly = await fetch(
    `${API_PATH}/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,current,minutely,alerts&appid=${API_KEY}&${UNITS}`
  );
  const dataWeekly = await responseWeekly.json();

  const dailyData = dataWeekly.daily.slice(1, 6); // get the only five next days

  const weeklyForecast = dailyData.map((day: any): Temperature => {
    return { max: day.temp.max, min: day.temp.min };
  });

  forecastObj.daily = weeklyForecast;

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  return forecastObj;
};
