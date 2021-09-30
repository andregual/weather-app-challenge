import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarForecast from './SidebarForecast';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = styled.div`
  width: 500px;
  height: 100vh;
  background: #1e213a;
  display: flex;
  flex-direction: column;
`;

const Sidebar: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    if (isOpened) {
      setIsOpened(false);
      return;
    }

    setIsOpened(true);
  };

  const SidebarContent = isOpened ? (
    <SidebarMenu toggleMenu={toggleMenu}></SidebarMenu>
  ) : (
    <SidebarForecast toggleMenu={toggleMenu}></SidebarForecast>
  );

  return <SidebarWrapper>{SidebarContent}</SidebarWrapper>;
};

export default Sidebar;
