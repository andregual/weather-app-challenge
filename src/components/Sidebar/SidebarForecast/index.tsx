import React, { useEffect } from 'react';
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
import useHttp from '../../../hooks/useHttp';
import { getCurrentForecast } from '../../../api/api';

const SidebarForecast: React.FC<{ toggleMenu: () => void }> = ({
  children,
  toggleMenu,
}) => {
  const { sendRequest, status, data, error } = useHttp(
    getCurrentForecast,
    false
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>
      <HeaderContainer>
        <SearchButton onClick={toggleMenu}>Search for places</SearchButton>
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
    </>
  );
};

export default SidebarForecast;
