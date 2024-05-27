import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DashboardIcon from '../../assets/dashboard.png';
import ScrapVideosIcon from '../../assets/scrap.png';
import WordsIcon from '../../assets/words.png';
import PrivacyIcon from '../../assets/privacy.png';
import { menuState } from '../../recoil/states';

const IndexLayout = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 50px;
  padding: 30px 30px 0 30px;
  margin-top: 30px;
`;

const MenuItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.isActive ? '#000000' : '#BEBEBE'};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: ${(props) => props.isActive ? 700 : 400};
`;

const IconWrapper = styled.div`
  width: 25px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 30px;
`;

const Icon = styled.img<{ isActive?: boolean }>`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 85px;
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
        <IconWrapper>
          <Icon src={DashboardIcon} alt="Dashboard" isActive={activeMenu === 'Dashboard'} />
        </IconWrapper>
        Dashboard
      </MenuItem>
      <MenuItem isActive={activeMenu === 'Scrap Videos'} onClick={() => handleClick('Scrap Videos')}>
        <IconWrapper>
          <Icon src={ScrapVideosIcon} alt="Scrap Videos" isActive={activeMenu === 'Scrap Videos'} />
        </IconWrapper>
        Scrap Videos
      </MenuItem>
      <MenuItem isActive={activeMenu === 'Words'} onClick={() => handleClick('Words')}>
        <IconWrapper>
          <Icon src={WordsIcon} alt="Words" isActive={activeMenu === 'Words'} />
        </IconWrapper>
        Words
      </MenuItem>
      <MenuItem isActive={activeMenu === '개인정보 수정'} onClick={() => handleClick('개인정보 수정')}>
        <IconWrapper>
          <Icon src={PrivacyIcon} alt="Privacy" isActive={activeMenu === '개인정보 수정'} />
        </IconWrapper>
        개인정보 수정
      </MenuItem>
      <LinkItem>
        <a href="https://www.youtube.com" style={{ color: '#FF0000', textDecoration: 'underline' }}>Youtube</a>
      </LinkItem>
    </IndexLayout>
  );
}

MenuBar.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
};

export default MenuBar;