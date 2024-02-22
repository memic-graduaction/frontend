// HomePage.tsx
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { youtubeIDstate, youtubeLinkState } from 'src/recoil/states';
import { getUrlParam } from 'src/utils/getUrlParam';
import Header from '../../components/Header/Header';
import * as S from './Styles';
import SearchButton from './SearchButton';
import mouseIcon from '../../assets/mouseIcon.png';

function HomePage() {
  const setLink = useSetRecoilState(youtubeLinkState);
  const [inputValue, setInputValue] = useState('');
  const setID = useSetRecoilState(youtubeIDstate);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isYoutubeUrl, setIsYoutubeUrl] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
      const url = e.target.value;
      setLink(url);
      const param = getUrlParam(url);
      setID(param);

    // URL 및 YouTube 동영상 URL 형식 검사
    const url = new URL(e.target.value);
    setIsYoutubeUrl(
      url.hostname.includes('youtube') &&
      url.pathname.includes('watch') &&
      url.searchParams.has('v')
    );

    // URL이 유효한지 검사
    setIsValidUrl(true);
  };

  const handleButtonClick = () => {
    // 버튼을 누를 때 실행되는 함수
    if (isValidUrl && isYoutubeUrl) {
      const url = new URL(inputValue);
      const videoId = url.searchParams.get('v');
      setLink(videoId);
      console.log('유효한 YouTube URL입니다.');
    } else {
      alert('유효한 YouTube 동영상 URL이 아닙니다.');
    }
  };

  return (
    <S.Layout>
      <Header />
      <S.Title>
        좋아하는 동영상<S.T>으로</S.T><br />
        영어 공부<S.T>와</S.T> 회화 능력 향상<S.T>까지</S.T>
      </S.Title>
      <S.SearchBar>
        <S.Guide>SEARCH</S.Guide>|
        <S.Input placeholder="YOUTUBE 주소를 붙여넣기 해주세요" onChange={handleChange} />
        <SearchButton onClick={handleButtonClick} isValidUrl={isValidUrl} isYoutubeUrl={isYoutubeUrl} />
      </S.SearchBar>
      <S.ScrollIcon src={mouseIcon} alt="Icon" />
    </S.Layout>
  );
}

export default HomePage;
