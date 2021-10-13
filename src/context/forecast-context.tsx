import { createContext, useState, useEffect } from 'react';
import { getForecast } from '../api/api';
import { Forecast } from '../interfaces/forecast';

type ContextProps = {
  forecast: Forecast | null;
  newForecast: (location: string) => void;
};

export const ForecastContext = createContext<ContextProps | null>(null);

export const ForecastProvider: React.FC = ({ children }) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);

  const handleForecastChange = (location: string) => {
    getForecast(location).then((res) => {
      setForecast(res);
    });
  };

  useEffect(() => {
    getForecast().then((res) => {
      setForecast(res);
    });
  }, []);

  return (
    <ForecastContext.Provider
      value={{ forecast: forecast, newForecast: handleForecastChange }}
    >
      {children}
    </ForecastContext.Provider>
  );
};
