import React from 'react';
import {
  ClosingButtonContainer,
  ClosingButton,
  InputContainer,
  CommonContainer,
} from './SidebarMenuElements';

const SidebarMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <>
      <ClosingButtonContainer>
        <ClosingButton onClick={toggleMenu}>X</ClosingButton>
      </ClosingButtonContainer>
      <InputContainer>
        <input type='text' placeholder='Search location'></input>
        <button>Search</button>
      </InputContainer>

      <CommonContainer>
        <h2>Common Locations</h2>
        <p>London</p>
        <p>New York</p>
        <p>Barcelona</p>
      </CommonContainer>
    </>
  );
};

export default SidebarMenu;
