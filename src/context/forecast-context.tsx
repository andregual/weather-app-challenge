import { createContext } from 'react';
import { Forecast } from '../interfaces/forecast';

export const ForecastContext = createContext<Forecast | null | undefined>(null);
