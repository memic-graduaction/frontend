import React from 'react';
import { IoPowerOutline } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../../recoil/states';
import * as S from './Styles';
import { Logo } from '../../assets/Icons';

function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setLoggedIn = useSetRecoilState(isLoggedInState);
  const navigator = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    // 현재 페이지 정보 저장
    document.cookie = `previousPage=${location.pathname}`;
    navigator('/login');
  };

  const handleMyPageClick = () => {
    if (isLoggedIn) {
      navigator('/mypage'); // 로그인 상태라면 마이페이지로 이동
    } else {
      // 로그인 페이지로 이동하면서 이전 페이지 정보를 쿠키로 저장
      document.cookie = `previousPage=${location.pathname}`;
      navigator('/login'); // 로그인 상태가 아니면 로그인 페이지로 이동
    }
  };

  const handleLogoutClick = () => {
    // 로그아웃 시 항상 홈 페이지로 이동
    setLoggedIn(false);
    navigator('/');
  };

  return (
    <S.Layout>
      <S.LogoLayout onClick={() => navigator('/')}>
        <Logo />
        Me.Mic
      </S.LogoLayout>
      <S.MenuLayout>
        <S.MenuWrap onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
          <S.IconBox>
            <IoPowerOutline />
          </S.IconBox>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </S.MenuWrap>
        <S.MenuWrap onClick={handleMyPageClick}>
          <S.IconBox>
            <LuUser2 />
          </S.IconBox>
          마이페이지
        </S.MenuWrap>
      </S.MenuLayout>
    </S.Layout>
  );
}

export default Header;
