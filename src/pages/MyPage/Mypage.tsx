import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MyPage/MenuBar';
import { Logo } from '../../utils/Icons';
import * as S from './Styles';

function MyPage() {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator('/');
  };

  return (
    <S.Layout>
      <S.Container>
        <S.ContentsContainer>
          <S.LogoLayout onClick={handleClick}>
            <Logo /> Me.Mic
          </S.LogoLayout>
          <S.IndexLayout>
            <MenuBar />
          </S.IndexLayout>
        </S.ContentsContainer>
      </S.Container>
    </S.Layout>
  );
}

export default MyPage;

