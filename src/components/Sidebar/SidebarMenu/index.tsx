import React from 'react';
import {
  ClosingButtonContainer,
  ClosingButton,
  InputContainer,
  CommonContainer,
  StyledInput,
  StyledButton,
  CommonLocation,
  CommonLocationTitle,
  CommonLocationArrow,
  CommonLocations,
} from './SidebarMenuElements';

const DUMMY_COMMON_LOCATIONS = [
  { title: 'London' },
  { title: 'New York' },
  { title: 'Barcelona' },
];

const SidebarMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <>
      <ClosingButtonContainer>
        <ClosingButton onClick={toggleMenu}>X</ClosingButton>
      </ClosingButtonContainer>
      <InputContainer>
        <StyledInput type='text' placeholder='Search location'></StyledInput>
        <StyledButton>Search</StyledButton>
      </InputContainer>

      <CommonContainer>
        <CommonLocations>Common Locations</CommonLocations>
        {DUMMY_COMMON_LOCATIONS.map((loc) => (
          <CommonLocation>
            <CommonLocationTitle>{loc.title}</CommonLocationTitle>
            <CommonLocationArrow>{'>'}</CommonLocationArrow>
          </CommonLocation>
        ))}
      </CommonContainer>
    </>
  );
};

export default SidebarMenu;
