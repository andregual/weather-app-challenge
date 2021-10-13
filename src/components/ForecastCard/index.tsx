import React, { useContext } from 'react';
import styled from 'styled-components';
import Clear from '../../assets/images/Clear.png';
import { UnitContext } from '../../context/unit-context';
import { Temperature } from '../../interfaces/temperature';

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

const MinTemperature = styled.div`
  color: #A09FB1;
`;

const ForecastCard: React.FC<{ temperature: Temperature; date: string }> = ({
  temperature,
  date,
}) => {
  const unit = useContext(UnitContext);

  return (
    <Wrapper>
      <Day>{date}</Day>
      <Image src={Clear}></Image>
      <TemperatureContainer>
        <MaxTemperature>
          {temperature.max.toFixed(1)}
          {unit.currentUnit.temperature}
        </MaxTemperature>
        <MinTemperature>
          {temperature.min.toFixed(1)}
          {unit.currentUnit.temperature}
        </MinTemperature>
      </TemperatureContainer>
    </Wrapper>
  );
};

export default ForecastCard;
