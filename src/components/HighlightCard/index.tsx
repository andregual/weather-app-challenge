import React, { useContext } from 'react';
import styled from 'styled-components';
import { ForecastContext } from '../../context/forecast-context';
import { getWindDirection } from '../../utils/getWindData';

const Wrapper = styled.div`
  height: auto;
  padding: 2rem;
  width: 100%;
  background: #1e213a;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const CardTitle = styled.p`
  font-size: 16px;
  color: #e7e7eb;
`;

const CardValue = styled.h1`
  font-size: 64px;
`;

const WindDirectionContainer = styled.div``;

const WindDirectionIcon = styled.i``;

const WindDirectionText = styled.p`
  font-size: 14px;
`;

const UnitText = styled.span`
  font-size: 46px;
  font-weight: 500;
`;

const HighlightCard: React.FC<{ highlight: string; unit: string }> = ({
  highlight,
  unit,
}) => {
  const forecastCtx = useContext(ForecastContext);
  const forecast = forecastCtx?.forecast;

  if (highlight === 'wind') {
    return (
      <Wrapper>
        <CardTitle>{forecast?.wind.title}</CardTitle>
        <CardValue>
          {forecast?.wind.speed} <UnitText>{unit}</UnitText>
        </CardValue>
        <WindDirectionContainer>
          <WindDirectionIcon></WindDirectionIcon>
          <WindDirectionText>
            {getWindDirection(forecast?.wind.direction)}
          </WindDirectionText>
        </WindDirectionContainer>
      </Wrapper>
    );
  } else if (highlight === 'humidity') {
    return (
      <Wrapper>
        <CardTitle>{forecast?.humidity.title}</CardTitle>
        <CardValue>
          {forecast?.humidity.value} <UnitText>{unit}</UnitText>
        </CardValue>
      </Wrapper>
    );
  } else if (highlight === 'visibility') {
    return (
      <Wrapper>
        <CardTitle>{forecast?.visibility.title}</CardTitle>
        <CardValue>
          {forecast?.visibility.value} <UnitText>{unit}</UnitText>
        </CardValue>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CardTitle>{forecast?.airPressure.title}</CardTitle>
      <CardValue>
        {forecast?.airPressure.value} <UnitText>{unit}</UnitText>
      </CardValue>
    </Wrapper>
  );
};

export default HighlightCard;
