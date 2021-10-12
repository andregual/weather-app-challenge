import GlobalStyle from './styles/global';
import styled from 'styled-components';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { ForecastProvider } from './context/forecast-context';
import { UnitProvider } from './context/unit-context';

// some other

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalWrapper>
        <ForecastProvider>
          <UnitProvider>
            <Sidebar></Sidebar>
            <Content></Content>
          </UnitProvider>
        </ForecastProvider>
      </GlobalWrapper>
    </>
  );
};

export default App;
