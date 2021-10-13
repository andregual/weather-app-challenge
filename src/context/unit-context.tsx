import { createContext, useState } from 'react';
import { metric, Unit } from '../interfaces/unit';

export const UnitContext = createContext({
  currentUnit: metric,
  updateUnit: (newUnit: Unit) => {},
});

export const UnitProvider: React.FC = ({ children }) => {
  const [unit, setUnit] = useState<Unit>(metric);

  const updateUnit = (newUnit: Unit) => {
    setUnit(newUnit);
  };

  return (
    <UnitContext.Provider value={{ currentUnit: unit, updateUnit: updateUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
