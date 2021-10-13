import React, { useContext } from 'react';
import styled from 'styled-components';
import { ForecastContext } from '../../context/forecast-context';
import HeaderButton from '../Button';
import ForecastCard from '../ForecastCard';
import HighlightCard from '../HighlightCard';
import { getFutureDates } from '../../utils/getFutureDates';
import { UnitContext } from '../../context/unit-context';

const ContentContainer = styled.div`
  padding-inline: 8%;
  padding-top: 2%;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const CelciusButton = styled(HeaderButton)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const FahrenheitButton = styled(HeaderButton)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
`;

const HighlightContainer = styled.div``;

const HighlightTitle = styled.h1`
  margin: 2rem;
`;

const HighlightStatistics = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 2rem;
`;

const Content: React.FC = () => {
  const forecastCtx = useContext(ForecastContext);
  const forecast = forecastCtx?.forecast;
  const unit = useContext(UnitContext);
  const futureDates = getFutureDates();

  const renderHighlightCards = () => {
    return (
      <HighlightStatistics>
        <HighlightCard highlight='wind' unit={unit.currentUnit.wind}/>
        <HighlightCard highlight='humidity' unit={unit.currentUnit.humidity}/>
        <HighlightCard highlight='visibility' unit={unit.currentUnit.visibility}/>
        <HighlightCard highlight='airPressure' unit={unit.currentUnit.airPressure}/>
      </HighlightStatistics>
    );
  };

  return (
    <ContentContainer>
      <HeaderContainer>
        <CelciusButton>ºC</CelciusButton>
        <FahrenheitButton>ºF</FahrenheitButton>
      </HeaderContainer>

      <ForecastContainer>
        {forecast?.daily?.map((dailyForecast, idx) => (
          <ForecastCard
            key={idx}
            temperature={dailyForecast}
            date={futureDates[idx]}
          ></ForecastCard>
        ))}
      </ForecastContainer>

      <HighlightContainer>
        <HighlightTitle>Today's Highlights</HighlightTitle>
        {renderHighlightCards()}
      </HighlightContainer>
    </ContentContainer>
  );
};

export default Content;
