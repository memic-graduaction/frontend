import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { menuState } from '../../recoil/states';

const IndexLayout = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 15px;
  padding: 10px;
  margin-top: 30px;
`;

const MenuItem = styled.div<{ isActive?: boolean }>`
  padding: 15px;
  background-color: ${(props) => props.isActive ? '#80C0F2' : 'transparent'};
  color: ${(props) => props.isActive ? '#FFFFFF' : '#000000'};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
`;

const MenuItemText = styled.span`
  margin-left: 30px;
`;

function MenuBar({ setActiveComponent }) {
  const [activeMenu, setActiveMenu] = useRecoilState(menuState);

  const handleClick = (menu: string) => {
    setActiveMenu(menu);
    setActiveComponent(menu);
  };

  return (
    <IndexLayout>
      <MenuItem isActive={activeMenu === 'Dashboard'} onClick={() => handleClick('Dashboard')}>
        <MenuItemText>Dashboard</MenuItemText>
      </MenuItem>
      <MenuItem isActive={activeMenu === 'Scrap Videos'} onClick={() => handleClick('Scrap Videos')}>
        <MenuItemText>Scrap Videos</MenuItemText>
      </MenuItem>
      <MenuItem isActive={activeMenu === 'Words'} onClick={() => handleClick('Words')}>
        <MenuItemText>Words</MenuItemText>
      </MenuItem>
      <MenuItem>
        <MenuItemText>
          <a href="https://www.youtube.com" style={{ color: '#FF0000', textDecoration: 'underline' }}>Youtube</a>
        </MenuItemText>
      </MenuItem>
      <MenuItem isActive={activeMenu === '개인정보 수정'} onClick={() => handleClick('개인정보 수정')}>
        <MenuItemText>개인정보 수정</MenuItemText>
      </MenuItem>
    </IndexLayout>
  );
}

MenuBar.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
};

export default MenuBar;