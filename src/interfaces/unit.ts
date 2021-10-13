export interface Unit {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
  visibility: string;
  airPressure: string;
}

export const imperial: Unit = {
  name: 'imperial',
  temperature: 'ºF',
  wind: 'mph',
  humidity: '%',
  visibility: 'miles',
  airPressure: 'hPa',
};

export const metric: Unit = {
  name: 'metric',
  temperature: 'ºC',
  wind: 'm/s',
  humidity: '%',
  visibility: 'm',
  airPressure: 'hPa',
};
