import React, { useContext, useRef } from 'react';
import { ForecastContext } from '../../../context/forecast-context';
import {
  ClosingButtonContainer,
  ClosingButton,
  InputContainer,
  CommonContainer,
  StyledInput,
  StyledButton,
  CommonLocation,
  CommonLocationWrapper,
  CommonLocationTitle,
  CommonLocationArrow,
  CommonLocations,
} from './SidebarMenuElements';

const COMMON_LOCATIONS = [
  { title: 'London' },
  { title: 'New York' },
  { title: 'Barcelona' },
];

const SidebarMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const forecast = useContext(ForecastContext);
  const inputLocationRef = useRef<HTMLInputElement>(null);

  const handleNewLocationFromInput = () => {
    if (inputLocationRef && inputLocationRef.current) {
      const value = inputLocationRef.current.value;
      forecast?.newForecast(value);
    } else return;
  };

  const handleNewLocation = (newLoc: string) => {
    if (newLoc && newLoc.length > 0) {
      forecast?.newForecast(newLoc);
    }
    return;
  };

  return (
    <>
      <ClosingButtonContainer>
        <ClosingButton onClick={toggleMenu}>X</ClosingButton>
      </ClosingButtonContainer>
      <InputContainer>
        <StyledInput
          type='text'
          placeholder='Search location'
          ref={inputLocationRef}
        ></StyledInput>
        <StyledButton onClick={handleNewLocationFromInput}>Search</StyledButton>
      </InputContainer>

      <CommonContainer>
        <CommonLocations>Common Locations</CommonLocations>
        <CommonLocationWrapper>
          {COMMON_LOCATIONS.map((location) => {
            return (
              <CommonLocation
                key={location.title}
                onClick={() => handleNewLocation(location.title)}
              >
                <CommonLocationTitle>{location.title}</CommonLocationTitle>
                <CommonLocationArrow>{' > '}</CommonLocationArrow>
              </CommonLocation>
            );
          })}
        </CommonLocationWrapper>
      </CommonContainer>
    </>
  );
};

export default SidebarMenu;
