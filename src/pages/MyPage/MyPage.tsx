import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '../../recoil/states';
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
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [, setSelectedDate] = useRecoilState(selectedDateState);

  const handleClick = () => {
    navigator('/');
  };

  const handleDateChange = (date: Date) => {
    const newDate = new Date(date.getFullYear(), date.getMonth());
    setSelectedDate(newDate);
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
        <S.IndexContainer>
          <S.LogoLayout onClick={handleClick}>
            <Logo /> Me.Mic
          </S.LogoLayout>
          <S.Separator />
          <MenuBar setActiveComponent={setActiveComponent} />
        </S.IndexContainer>
        <S.ContentsContainer>
          <TopTitle onDateChange={handleDateChange} />
          <S.OuterContainer>
            {renderActiveComponent()}
            {activeComponent === 'Dashboard' && (
              <S.BoardContainer>
                <Accuracy />
                <Statistics />
              </S.BoardContainer>
            )}
          </S.OuterContainer>
        </S.ContentsContainer>
      </S.Container>
    </S.Layout>
  );
}

export default MyPage;
