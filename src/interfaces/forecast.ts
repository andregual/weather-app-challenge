import { Temperature } from "./temperature";

export interface Forecast {
  coord: { lat: number; lon: number };
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  temperature: {
    temp: number;
    maxTemp: number;
    minTemp: number;
  };
  wind: {
    title: string;
    speed: number;
    direction: number;
  };
  humidity: { title: string; value: number };
  visibility: { title: string; value: number };
  airPressure: { title: string; value: number };
  daily?: Temperature[] | null
}
