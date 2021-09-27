import React from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import cloudBackground from './assets/images/Cloud-background.png';
import LightCloud from './assets/images/LightCloud.png';

// sidebar

const Sidebar = styled.div`
  width: 500px;
  height: 100vh;
  background: #1e213a;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`;

const HeaderButton = styled.div`
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchButton = styled(HeaderButton)`
  width: 160px;
  height: 40px;
  font-size: 16px;
`;

const LocationButton = styled(HeaderButton)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const ImageContainer = styled.div`  
  height: 350px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherImage = styled.img``;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Temperature = styled.h1`
  font-size: 144px;
  font-weight: 500;
`;

const TemperatureDescription = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

const FooterContainter = styled.div``;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

const Today = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 1rem;
`;

const Date = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-left: 1rem;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

const Icon = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 1rem;
`;

const City = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-left: 1rem;
`;

// content

const ContentContainer = styled.div``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Sidebar>
        <HeaderContainer>
          <SearchButton>Search for places</SearchButton>
          <LocationButton></LocationButton>
        </HeaderContainer>

        <ImageContainer>
          <WeatherImage src={LightCloud} alt=''></WeatherImage>
        </ImageContainer>

        <InformationContainer>
          <Temperature>15ºC</Temperature>
          <TemperatureDescription>Shower</TemperatureDescription>
          <FooterContainter>
            <DateContainer>
              <Today>Today</Today>
              <Date>Fri. 5 jun</Date>
            </DateContainer>
            <LocationContainer>
              <Icon>*</Icon>
              <City>Helsinki</City>
            </LocationContainer>
          </FooterContainter>
        </InformationContainer>
      </Sidebar>

      <ContentContainer></ContentContainer>
    </>
  );
}

export default App;
