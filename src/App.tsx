import { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { ForecastContext } from './context/forecast-context';
import { getCurrentForecast } from './api/api';
import { UnitContext } from './context/unit-context';
import { Forecast } from './interfaces/forecast';

// some other

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const App: React.FC = () => {
  const [forecast, setForecast] = useState<Forecast | null | undefined>(null);
  const [unit, setUnit] = useState<string | null | undefined>('ºC');

  useEffect(() => {
    const forecastObj = getCurrentForecast();
    setForecast(forecastObj);
  }, []);

  return (
    <>
      <GlobalStyle />
      <GlobalWrapper>
        <ForecastContext.Provider value={forecast}>
          <UnitContext.Provider value={unit}>
            <Sidebar></Sidebar>
            <Content></Content>
          </UnitContext.Provider>
        </ForecastContext.Provider>
      </GlobalWrapper>
    </>
  );
};

export default App;
