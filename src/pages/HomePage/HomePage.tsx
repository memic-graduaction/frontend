import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { youtubeLinkState } from 'src/recoil/states';
import { Link } from 'react-scroll';
import Header from '../../components/Header/Header';
import * as S from './Styles';
import searchIcon from '../../assets/searchIcon.png';
import scrollIcon from '../../assets/scrollIcon.png';


function HomePage() {
  const navigator = useNavigate();
  const setLink = useSetRecoilState(youtubeLinkState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = new URL(e.target.value);
    const urlParams = url.searchParams;
    const param = String(urlParams.get('v'));
    setLink(param);
  };
  const handleClick = () => {
    navigator('/script');
  };
  const ScrollButton = () => {
    return (
      <Link to="targetSection" smooth={true} duration={500}>
        <img style={{ width: '2.5rem' }} src={scrollIcon} alt="Scroll Icon" />
      </Link>
    );
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
        <button type="submit" onClick={handleClick}>
          <img style={{ width: '2.5rem' }} src={searchIcon} alt="Search Icon" />
        </button>
      </S.SearchBar>
      <ScrollButton />
    </S.Layout>
  );
}

export default HomePage;
