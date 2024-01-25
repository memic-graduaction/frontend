import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { youtubeLinkState } from 'src/recoil/states';
import { Link } from 'react-scroll';
import Header from '../../components/Header/Header';
import * as S from './Styles';
import SearchButton from './SearchButton';
import scrollIcon from '../../assets/scrollIcon.png';

function ScrollButton() {
  return (
    <Link to="targetSection" smooth duration={500}>
      <img style={{ width: '2.5rem' }} src={scrollIcon} alt="Scroll Icon" />
    </Link>
  );
}

function HomePage() {
  const navigator = useNavigate();
  const setLink = useSetRecoilState(youtubeLinkState);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const userEnteredUrl = e.target.value;
      const url = new URL(userEnteredUrl);

      const urlParams = url.searchParams;
      const param = String(urlParams.get('v'));
      setLink(param);

      // URL이 유효하면 상태를 true로 설정합니다.
      setIsValidUrl(true);
    } catch (error) {
      // 유효하지 않은 URL이 입력된 경우 에러 처리
      console.error(`유효하지 않은 URL: ${e.target.value}`);
      // 상태를 false로 설정하여 유효하지 않은 상태임을 알립니다.
      setIsValidUrl(false);
    }
  };
  const handleClick = () => {
    navigator('/script');
  };
  return (
    <S.Layout>
      <Header />
      <S.Title>
        좋아하는 동영상<S.T>으로</S.T><br/>
        영어 공부<S.T>와</S.T> 회화 능력 향상<S.T>까지</S.T>
      </S.Title>
      <S.SearchBar>
        <S.Guide>SEARCH</S.Guide>|
        <S.Input placeholder="YOUTUBE 주소를 붙여넣기 해주세요" onChange={handleChange} />
        {/* isValidUrl을 SearchButton 컴포넌트에 전달합니다. */}
        <SearchButton onClick={handleClick} isValidUrl={isValidUrl} />
      </S.SearchBar>
      <ScrollButton />
    </S.Layout>
  );
}

export default HomePage;