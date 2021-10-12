import { createContext, useState } from 'react';
export interface Unit {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
  visibility: string;
  airPressure: string;
}

export const imperial: Unit = {
  name: 'Imperial',
  temperature: 'ºF',
  wind: 'mph',
  humidity: '%',
  visibility: 'miles',
  airPressure: 'hPa',
};

export const metric: Unit = {
  name: 'Metric',
  temperature: 'ºC',
  wind: 'kmh',
  humidity: '%',
  visibility: 'km',
  airPressure: 'hPa',
};

export const UnitContext = createContext({
  currentUnit: metric,
  updateUnit: (newUnit: any) => {},
});

export const UnitProvider: React.FC = ({ children }) => {
  const [unit, setUnit] = useState<Unit>(metric);

  const updateUnit = (newUnit: any) => {
    setUnit(newUnit);
  };

  return (
    <UnitContext.Provider value={{ currentUnit: unit, updateUnit: updateUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
