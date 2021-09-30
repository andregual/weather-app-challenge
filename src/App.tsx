import GlobalStyle from './styles/global';
import styled from 'styled-components';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

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
        <Sidebar></Sidebar>

        <Content></Content>
      </GlobalWrapper>
    </>
  );
};

export default App;
