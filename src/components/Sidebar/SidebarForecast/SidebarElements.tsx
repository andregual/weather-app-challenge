import styled from 'styled-components';
import HeaderButton from '../../Button';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`;

export const SearchButton = styled(HeaderButton)`
  width: 160px;
  height: 40px;
  font-size: 16px;
`;

export const LocationButton = styled(HeaderButton)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  height: 350px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherImage = styled.img``;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const Temperature = styled.h1`
  font-size: 75px;
  font-weight: 500;
`;

export const TemperatureDescription = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

export const FooterContainter = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  justify-content: space-between;
`;

export const Today = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: center;
`;

export const Icon = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const City = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
