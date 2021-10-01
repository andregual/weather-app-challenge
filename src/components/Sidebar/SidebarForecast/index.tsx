import React, { useContext } from 'react';
import {
  HeaderContainer,
  SearchButton,
  LocationButton,
  ImageContainer,
  WeatherImage,
  InformationContainer,
  Temperature,
  TemperatureDescription,
  FooterContainter,
  DateContainer,
  Today,
  Date,
  LocationContainer,
  Icon,
  City,
} from './SidebarElements';
import LightCloud from '../../../assets/images/LightCloud.png';
import { ForecastContext } from '../../../context/forecast-context';
import { UnitContext } from '../../../context/unit-context';

const SidebarForecast: React.FC<{ toggleMenu: () => void }> = ({
  children,
  toggleMenu,
}) => {
  const forecast = useContext(ForecastContext);
  const unit = useContext(UnitContext);

  return (
    <>
      <HeaderContainer>
        <SearchButton onClick={toggleMenu}>Search for places</SearchButton>
        <LocationButton
          onClick={() => {
            console.log(forecast);
          }}
        ></LocationButton>
      </HeaderContainer>

      <ImageContainer>
        <WeatherImage src={LightCloud} alt=''></WeatherImage>
      </ImageContainer>

      <InformationContainer>
        <Temperature>
          {forecast?.temperature.temp}
          {unit}
        </Temperature>
        <TemperatureDescription>
          {forecast?.weather.main}
        </TemperatureDescription>
        <FooterContainter>
          <DateContainer>
            <Today>Today</Today>
            <Date>Fri. 5 jun</Date>
          </DateContainer>
          <LocationContainer>
            <Icon>*</Icon>
            <City>{forecast?.name}</City>
          </LocationContainer>
        </FooterContainter>
      </InformationContainer>
    </>
  );
};

export default SidebarForecast;
