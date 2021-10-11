import { createContext, useState, useEffect } from 'react';
import { getForecast } from '../api/api';
import { Forecast } from '../interfaces/forecast';

export const ForecastContext = createContext<Forecast | null>(null);

export const ForecastProvider: React.FC = ({ children }) => {
  const [forecast, setForecast] = useState<null | Forecast>(null);

  useEffect(() => {
    getForecast().then((res) => {
      setForecast(res);
    });
  }, []);

  return (
    <ForecastContext.Provider value={forecast}>
      {children}
    </ForecastContext.Provider>
  );
};
