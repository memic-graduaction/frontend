import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MyPage/MenuBar';
import { Logo } from '../../assets/Icons';
import TopTitle from '../../components/MyPage/TopTitleIndex';
import Dashboard from '../../components/MyPage/Dashboard/Dashboard';
import Accuracy from '../../components/MyPage/Dashboard/Accuracy';
import Statistics from '../../components/MyPage/Dashboard/Statistics';
import ScrapVideos from '../../components/MyPage/ScrapVideo/ScrapVideo';
import Words from '../../components/MyPage/Words/Words';
import Privacy from '../../components/MyPage/Privacy';
import * as S from './Styles';

function MyPage() {
  const navigator = useNavigate();
  const [activeComponent, setActiveComponent] = useState(null);
  const handleClick = () => {
    navigator('/');
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Scrap Videos':
        return <ScrapVideos />;
      case 'Words':
        return <Words />;
      case '개인정보 수정':
        return <Privacy />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <S.Layout>
      <S.Container>
        {/* 목차컨테이너 */}
        <S.IndexContainer>
          <S.LogoLayout onClick={handleClick}>
            <Logo /> Me.Mic
          </S.LogoLayout>
          <MenuBar setActiveComponent={setActiveComponent} />
        </S.IndexContainer>
        <S.ContentsContainer className={activeComponent === 'Dashboard' ? 'dashboard-width' : ''}>
          <TopTitle />
          {renderActiveComponent()}
        </S.ContentsContainer>
        {activeComponent === 'Dashboard' && (
          <S.BoardContainer>
            <Accuracy />
            <Statistics />
          </S.BoardContainer>
        )}
      </S.Container>
    </S.Layout>
  );
}

export default MyPage;
