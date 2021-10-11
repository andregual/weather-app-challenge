import GlobalStyle from './styles/global';
import styled from 'styled-components';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { ForecastProvider } from './context/forecast-context';

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
          <Sidebar></Sidebar>
          <Content></Content>
        </ForecastProvider>
      </GlobalWrapper>
    </>
  );
};

export default App;
