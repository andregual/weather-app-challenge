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

const HighlightCard: React.FC<{ highlight: string }> = ({ highlight }) => {
  const forecastCtx = useContext(ForecastContext);

  if (highlight === 'wind') {
    return (
      <Wrapper>
        <CardTitle>{forecastCtx?.wind.title}</CardTitle>
        <CardValue>{forecastCtx?.wind.speed}</CardValue>
        <WindDirectionContainer>
          <WindDirectionIcon></WindDirectionIcon>
          <WindDirectionText>
            {getWindDirection(forecastCtx?.wind.direction)}
          </WindDirectionText>
        </WindDirectionContainer>
      </Wrapper>
    );
  } else if (highlight === 'humidity') {
    return (
      <Wrapper>
        <CardTitle>{forecastCtx?.humidity.title}</CardTitle>
        <CardValue>{forecastCtx?.humidity.value}</CardValue>
      </Wrapper>
    );
  } else if (highlight === 'visibility') {
    return (
      <Wrapper>
        <CardTitle>{forecastCtx?.visibility.title}</CardTitle>
        <CardValue>{forecastCtx?.visibility.value}</CardValue>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CardTitle>{forecastCtx?.airPressure.title}</CardTitle>
      <CardValue>{forecastCtx?.airPressure.value}</CardValue>
    </Wrapper>
  );
};

export default HighlightCard;
