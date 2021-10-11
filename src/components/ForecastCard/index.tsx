import React from 'react';
import styled from 'styled-components';
import Clear from '../../assets/images/Clear.png';

const Wrapper = styled.div`
  height: 180px;
  width: 120px;
  background: #1e213a;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Day = styled.div``;

const Image = styled.img`
  height: 62px;
  width: 62px;
`;

const TemperatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`;

const MaxTemperature = styled.div``;

const MinTemperature = styled.div``;

const ForecastCard:React.FC<{}> = (props) => {
  return (
    <Wrapper>
      <Day>Tomorrow</Day>
      <Image src={Clear}></Image>
      <TemperatureContainer>
        <MaxTemperature>{}</MaxTemperature>
        <MinTemperature>{}</MinTemperature>
      </TemperatureContainer>
    </Wrapper>
  );
};

export default ForecastCard;
