import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MyPage/MenuBar';
import { Logo } from '../../utils/Icons';
import TopTitle from '../../components/MyPage/TopTitleIndex';
// import Dashboard from '../../components/MyPage/Dashboard/Dashboard';
// import Records from '../../components/MyPage/Records';
// import ScrapVideos from '../../components/MyPage/ScrapVideo/ScrapVideo';
// import Words from '../../components/MyPage/Words/Words';
// import Privacy from '../../components/MyPage/Privacy';
import * as S from './Styles';

function MyPage() {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator('/');
  };

  return (
    <S.Layout>
      <S.Container>
        {/* 목차컨테이너 */}
        <S.IndexContainer>
          <S.LogoLayout onClick={handleClick}>
            <Logo /> Me.Mic
          </S.LogoLayout>
          <MenuBar />
        </S.IndexContainer>
        <S.ContentsContainer>
          <TopTitle />
        </S.ContentsContainer>
      </S.Container>
    </S.Layout>
  );
}

export default MyPage;

